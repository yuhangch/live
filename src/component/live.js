import Tweet from "./tweet";

import "antd/dist/antd.css"
import React from "react";
import {BackTop, Spin} from "antd";
import {Heatmap} from "./heatmap";
import {LoadingOutlined} from "@ant-design/icons";
import InfiniteScroll from 'react-infinite-scroller';
import {FetchTweets} from "../services/fetch";
import Config from "../conf"
import GitHubButton from 'react-github-btn'

const LIMIT = Config.paginate;

export default class Live extends React.Component {

    state = {loading: true, hasMore: true, data: []};
    scrollParentRef = {}
    loadTweets = (list) => {
        const {data} = this.state;
        if (list.length < LIMIT && data.length > 0) {
            this.setState({
                data: data.concat(list),
                hasMore: false,
                loading: false
            })
            return
        }
        this.setState({
            data: data.concat(list),
            loading: false,
        })
    }

    createTweets = () => {
        const {data} = this.state;
        if (data.length < 1) {
            return <></>
        }
        return (
            <div>
                {
                    data.map((tweet) =>
                        <Tweet key={tweet.id}
                               content={tweet.get("content")}
                               tags={tweet.get("tags")}
                               likes={tweet.get("likes")}
                               createdAt={tweet.createdAt}
                               id={tweet.id}
                        />)
                }
            </div>);


    }
    handleInfiniteOnLoad = () => {
        let {data} = this.state;
        this.setState({
            loading: true,
        });
        FetchTweets(this.loadTweets, data.length, LIMIT)
    };


    componentDidMount() {
        this.setState({
            loading: true
        })
        FetchTweets(this.loadTweets, 0, LIMIT)
    }

    render() {
        const loadingOutlined = <LoadingOutlined style={{fontSize: 24, margin: 'auto', color: 'red'}} spin/>;
        return (
            <div className={"live-container"}>
                <div className={"page-container"}>
                    <div className={"header"}>
                        <a href={"/"}>
                            <div className={"color-border"}><b>LIVE.</b></div>
                        </a>
                    </div>

                    <div className={"heatmap-container"}>
                        <Heatmap/>
                    </div>
                    <div style={{overflow: 'auto'}} ref={(ref) => this.scrollParentRef = ref}>
                        <InfiniteScroll
                            //TODO [BUG] initialLoad 为 false 时，初始页面不满屏将无法触发后续加载
                            initialLoad={true}
                            pageStart={0}
                            loadMore={this.handleInfiniteOnLoad}
                            hasMore={!this.state.loading && this.state.hasMore}
                            useWindow={true}
                            getScrollParent={() => this.scrollParentRef}
                        >
                            <div className={"content-container"}>
                                {this.createTweets()}
                            </div>
                        </InfiniteScroll>
                    </div>

                    <Spin className={"loading"} spinning={this.state.loading} indicator={loadingOutlined}/>
                    <BackTop>
                        <div className={"color-border"}><b>back</b></div>
                    </BackTop>

                    <div className={"footer"}>
                        {Config.footerText}
                        <div hidden={!Config.showGithubStars} style={{marginTop: '10px'}}>
                            <GitHubButton href="https://github.com/yuhangch/live"
                                          data-color-scheme="no-preference: light; light: light; dark: dark;"
                                          data-show-count="true"
                                          aria-label="Star yuhangch/live on GitHub">Star</GitHubButton>
                        </div>

                    </div>
                </div>
            </div>

        );
    }

}

