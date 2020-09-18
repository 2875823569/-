import React, {lazy, Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import logo from './logo.png'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink,
    // Link
} from "react-router-dom";
import {Input} from 'antd';
import {
    SearchOutlined,
    UnorderedListOutlined,
    UserOutlined,
    HistoryOutlined
} from '@ant-design/icons';
const {Search} = Input;
const searchStyle = {
    width: "180px",
}
const iconStyle = {
    color: "gray", fontSize: "30px"
}

let Index = lazy(() => import('./pages/Home'))
let News = lazy(() => import('./pages/News'))
let Movie = lazy(() => import('./pages/Movie'))
let User = lazy(() => import('./pages/User'))
let Welfare = lazy(() => import("./pages/Welfare"))
let Moviedetails = lazy(() => import("./pages/Moviedetails"))
// let Articledetails = lazy(() => import("./pages/Articledetails"))
let classification = lazy(() => import("./pages/Classification"))

function App() {
    return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="top">
                            <a href="/#">
                                <img className="block" src={logo}
                                     alt="网站logo图片"/>
                            </a>
                            <ul className="nav">
                                    <li><NavLink to="/index">首页</NavLink></li>
                                <li><NavLink to="/Movie/movie">电影</NavLink></li>
                                <li><NavLink to="/Movie/tv">电视剧</NavLink></li>
                                <li><NavLink to="/Movie/varietyShow">综艺</NavLink></li>
                                <li><NavLink to="/Movie/anime">动漫</NavLink></li>
                                <li><NavLink to="/Welfare">福利</NavLink></li>
                                <li><NavLink to="/News">资讯</NavLink></li>
                                <li><NavLink to="/User/aaa">用户</NavLink></li>
                            </ul>
                            <div className="nav_left">
                                <Search
                                    enterButton={<SearchOutlined className="searchButton"/>}
                                    size="large"
                                    style={searchStyle}
                                    onSearch={value => console.log(value)}
                                />
                                <NavLink to="/index/classification">
                                    <UnorderedListOutlined className="iconButton" style={iconStyle}/>
                                </NavLink>
                                <UserOutlined className="iconButton" style={iconStyle}/>
                                <HistoryOutlined className="iconButton" style={iconStyle}/>
                            </div>

                        </div>
                    </header>
                </div>
                <section>
                    <Suspense fallback={<div style={{fontSize: "30px", textAlign: "center"}}>加载中</div>}>
                        <Switch>
                            <Route path="/index" component={Index} exact/>
                            <Route path="/Movie/:type" component={Movie} />
                            <Route path="/Welfare" component={Welfare} />
                            <Route path="/News" component={News} />
                            <Route path="/index/Moviedetails" component={Moviedetails} exact={true}/>
                            <Route path="/index/classification" component={classification} exact={true}/>
                            <Route path="/User/:id" component={User} exact/>
                            <Redirect from="/" to="/index" exact/>
                            <Route path="*" render={() => (<div style={{textAlign: "center"}}>404</div>)}/>
                        </Switch>
                    </Suspense>
                </section>
                <div className="footer">
                    <p>XXX影视免费提供的完整版全集电影电视剧在线观看数据来自网络视频资源平台，本站未参与任何制作与下载，仅供WEB引用。</p>
                    <p>Copyright © XXX影院XXX.COM</p>
                </div>
            </Router>
    );
}
export default App;
