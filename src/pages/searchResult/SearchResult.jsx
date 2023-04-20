import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./SearchResult.scss";
import { fetchDataFromApi } from "../../utils/api";
import Card from "../../components/card/Card";
import { ThreeDots } from  'react-loader-spinner';
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="searchResultsPage">
            {loading &&  <div className="center">
                    <ThreeDots  
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#1e90ff" 
                        ariaLabel="three-dots-loading"
                        visible={true}
                    />
                </div>}
            {!loading && (
                <div className="wrapper">
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={ <div className="center">
                                <ThreeDots  
                                    height="80" 
                                    width="80" 
                                    radius="9"
                                    color="#1e90ff" 
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                />
                            </div>}
                            >
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <Card
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchResult;

