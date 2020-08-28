import React, {Component} from 'react';
// import {getLatestRecommended,getPopularrecommendation} from "../api/comment"
// import MiddleRight from "./MiddleRight";

class MovieDetainlHead extends Component {
    play(information){
        console.log(information)
    }
    render() {
        let {information} = this.props
        let bottonStyle = {
            background: "#FF9900",
            color: "#fff",
            display: "inline-block",
            padding: "6px 30px",
            borderRadius: "4px",
            cursor:"pointer"
        }
        return (
                    <div className="card" style={{    width: "100%", display: "flex", height: "300px"}}>
                        <img src={information.videoImage} alt="" className="detail_head_img"/>
                        <div className="topLeft" style={{marginLeft:"20px",textAlign:"left"}}>
                            <h2>{information.videoTitle}</h2>
                            <p>状态： <span style={{color:"red"}}>{information.remind_tip}</span></p>
                            <p>导演： {information.director}</p>
                            <p>主演： {information.performer}</p>
                            <p>
                                <span>类型： {information.video_type.name} |</span>
                                <span>语言： {information.language} |</span>
                                <span>地区： {information.sub_region} |</span>
                                <span>时间： {information.rel_time} |</span>
                            </p>
                            <p>评分： <span style={{color:"red",fontWeight:600}}>{information.video_rate} 分</span></p>
                            <div>
                        <span
                            style={bottonStyle}
                            onClick={() => this.play(information)}
                        >点击播放</span>
                            </div>
                        </div>
                    </div>

        );
    }
}

export default MovieDetainlHead;