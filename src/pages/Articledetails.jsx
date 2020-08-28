import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import IndexBox from "../components/IndexBox";

class Articledetails extends Component {
    render() {
        let data = this.props.location.query?.data?.data
        return (data ?

                <div>
                    <div className="card middle_left">
                        电影
                    </div>
                    <div className="card middle_left articleCotainer">
                        <h2 className="articleTitle">{data.articleTitle}</h2>
                        <div className="article_small_title">战争片{data.update_time}</div>
                        <div className="articleContainer">
                            {data.container}
                        </div>
                    </div>
                    <div className="card">
                        <div style={{display: "flex", justifyContent: "space-between", color: "gray"}}>
                            <span>上一篇</span>
                            <span>下一篇</span>
                        </div>
                        <div><h3>暂无内容</h3></div>
                    </div>
                    <IndexBox
                        icon={"icon-dianying"}
                        Container={<div style={{textAlign:"center",width:"100%"}}>暂无内容</div>}
                        nav={"相关影片"}
                    />
                    <IndexBox
                        icon={"icon-WeiXin"}
                        Container={<div style={{textAlign:"center",width:"100%"}}>功能已禁用</div>}
                        nav={"留言回复"}
                    />
                </div>


                : null
        );
    }
}

export default withRouter(Articledetails);