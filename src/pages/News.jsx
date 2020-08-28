import React, {lazy, Suspense, Component} from 'react';
import {
    Switch,
    Route,
    Redirect,
    NavLink,
} from "react-router-dom";
import {connect} from "react-redux"
import {deleteNews} from "../store/actions/news"

let Newsbox = lazy(() => import('../components/Newsbox'))
let MiddleRight = lazy(() => import('../components/MiddleRight'))
let Articledetails = lazy(() => import("../pages/Articledetails"))

class News extends Component {
    render() {
        let isdetails = this.props.location.pathname.includes("Articledetails") ? true : false;
        return (
            <div className="NewTitle moviebox">
                <div style={{flex: 1}}>
                    {
                        !isdetails?
                            <div>
                        <ul className="nav card">
                            <NavLink to="/News/index" className="">
                                <li>资讯</li>
                            </NavLink>
                            <NavLink to="/News/notice">
                                <li>公告</li>
                            </NavLink>
                            <NavLink to="/News/news">
                                <li>新闻</li>
                            </NavLink>
                        </ul>
                        <section>
                            <Suspense fallback={<div style={{fontSize: "30px", textAlign: "center"}}>加载中</div>}>
                                <Switch>
                                    <Route path="/News/:type" component={Newsbox}/>
                                    <Redirect from="/News" to="/News/index"/>
                                    <Route path="*" render={() => (<div style={{textAlign: "center"}}>404</div>)}/>
                                </Switch>
                            </Suspense>
                        </section>
                    </div> :
                        <Route path="/News/Articledetails" component={Articledetails} exact={true}/>
                    }
                </div>
                <div>
                    <MiddleRight information={this.props.TvList} icon={"icon-dianshiju-"} nav={"影视推荐"}/>
                    <MiddleRight information={this.props.ArticleList} icon={"icon-dianshiju-"} nav={"推荐阅读"}/>
                </div>

            </div>
        );
    }
}

let mapStateToProps = function (state) {
    return {
        TvList: state.tv,
        ArticleList: state.article
    }
}
let mapDisPathToProps = function (dispatch) {
    return {
        dispatch,
        getName: (name) => dispatch(deleteNews(name))
    }
}
export default connect(
    mapStateToProps, mapDisPathToProps
)(News);