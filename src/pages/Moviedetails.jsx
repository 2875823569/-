import React, {Component} from 'react';
import MovieDetainlHead from "../components/MovieDetainlHead"
import MiddleRight from "../components/MiddleRight";
import IndexBox from "../components/IndexBox";
import {Button,Typography} from 'antd';
import {getLatestRecommended, getPopularrecommendation} from "../api/comment";
import TvItem from "../components/TvItem";
const { Paragraph } = Typography;

class Moviedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestList: "",
            popularList: "",
            playsource:"",
        }
    }

    changesource(idex){
        let source = this.props.location.query?.data.data.source[idex].list[0].match(/^(.*?)\$/)[1]
        this.setState({
            playsource:source
        })
    }

    async componentDidMount() {
        let information = this.props.location.query?.data.data
        let data = {page: 1, size: 12}
        let initsource = information && information.source[0].list[0].match(/^(.*?)\$/)[1]
        let latest = await getLatestRecommended(data)
        let Popular = await getPopularrecommendation(data)
        this.setState({
            latestList: latest.data.list,
            popularList: Popular.data.list,
            playsource: initsource
        })
    }

    render() {
        let obj = this.props.location.query?.data.data
        let playsource = this.state.playsource
        if (obj) {
            let {likeMovie, source, videoInfo} = obj
            return (
                <div className="homeBox" style={{display: "flex"}}>
                    <div className="middle_left" style={{display:"block"}}>
                        <MovieDetainlHead information={videoInfo}/>
                        <IndexBox
                            icon={"icon-youtube"}
                            nav={`播放源`}
                            headcomp={
                                <div style={{flex:1,marginLeft:"10px"}}>
                                    {source.map((item,idex) =>
                                        <Button
                                            key={item._id}
                                            onClick={() => this.changesource(idex)}>
                                            {item.name}
                                        </Button>)}
                                </div>}
                            Container={<Button>{playsource}</Button>}
                        />
                        <IndexBox
                            icon={"icon-youtube"}
                            nav={`《${videoInfo.videoTitle}》剧情介绍`}
                            Container={
                                <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>
                                    {videoInfo.introduce}
                                </Paragraph>
                            }
                        />
                        <IndexBox
                            icon={"icon-dianying"}
                            nav={`《${videoInfo.videoTitle}》的相关影片`}
                            Container={likeMovie && likeMovie.map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                        />
                        <IndexBox
                            icon={"icon-wenzhang-common"}
                            nav={`《${videoInfo.videoTitle}》的相关文章`}
                            Container={
                                <p style={{width:"100%",textAlign:"center"}}>暂无内容</p>
                            }
                        />
                        <IndexBox
                            icon={"icon-WeiXin"}
                            nav={"留言回复"}
                            Container={
                                <p style={{width:"100%",textAlign:"center"}}>暂无内容</p>
                            }
                        />
                    </div>

                    {
                        this.state.popularList ?
                            <div>
                                <MiddleRight information={this.state.popularList} icon={"icon-dianying"}
                                             nav={"热门推荐"}/>/>
                                <MiddleRight information={this.state.latestList} icon={"icon-dianying"}
                                             nav={"最新推荐"}/>/>
                            </div>
                            : null
                    }
                </div>
            );
        } else {
            return null
        }

    }
}

export default Moviedetails;