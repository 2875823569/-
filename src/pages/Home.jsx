import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchTv} from "../store/actions/tv"
import {fetchArticle} from "../store/actions/article"

import IndexBox from "../components/IndexBox";
import MiddleRight from "../components/MiddleRight"
import {getMovieList,getVarietyShowList} from "../api/comment"
import TvItem from "../components/TvItem";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            movieList:"",
            VarietyShowList:""
        }
    }
    async componentDidMount() {
        let data = {
            page:1,
            size:12
        }
        //讲数据存放进仓库
        await this.props.dispatch(fetchTv())
        await this.props.dispatch(fetchArticle())

        //电影列表
        let movie = await getMovieList(data)
        this.setState({movieList: movie.data.list})

        let VarietyShowList = await getVarietyShowList(data)
        this.setState(({
            VarietyShowList:VarietyShowList.data.list
        }))
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    render() {
        let TvList = this.props.TvList;
        let movieList = this.state.movieList;
        let VarietyShowList = this.state.VarietyShowList;
        return (
            <div>
                <div className="homeBox">
                    <IndexBox
                        icon={"icon-dianshiju-"}
                        nav={"电视剧"}
                        TvList={this.props.TvList}
                        comp={
                            <MiddleRight
                                information={this.props.TvList}
                                icon={"icon-dianshiju-"}
                                nav={"最新电视剧"}/>
                        }
                        headcomp={<a href="/#">更多</a>}
                        Container={TvList && TvList.map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                    />
                    <IndexBox
                        icon={"icon-dianying"}
                        nav={"电影"}
                        TvList={this.state.movieList}
                        comp={
                            <MiddleRight
                                information={this.state.movieList}
                                icon={"icon-dianying"}
                                nav={"最新电影"}/>
                        }
                        headcomp={<a href="/#">更多</a>}
                        Container={movieList && movieList.map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                    />
                    <IndexBox
                        icon={"icon-zongyi"}
                        nav={"综艺"}
                        TvList={this.state.VarietyShowList}
                        comp={
                            <MiddleRight
                                information={this.state.VarietyShowList}
                                icon={"icon-zongyi"}
                                nav={"最新综艺"}/>
                        }
                        headcomp={<a href="/#">更多</a>}
                        Container={VarietyShowList && VarietyShowList.map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                    />
                </div>
            </div>
        );
    }
}

let mapStateToProps = function (state) {
    return {
        TvList: state.tv
    }
}
export default connect(
    mapStateToProps
)(Home);