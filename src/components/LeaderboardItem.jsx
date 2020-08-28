import React, {Component} from 'react';
import "./css/LeaderItem.css";
import {withRouter} from "react-router-dom";
import {getMovieDetails} from "../api/comment"

class LeaderboardItem extends Component {
    choiceColor(index){
        switch (index+1) {
            case 1:
                return "#FF4A4A";
            case 2:
                return "#FF7701";
            case 3:
                return "#FFB400";
            default:
                return "#EEEEEE";
        }
    }
    async toDetails(information){
        let isMovie = information.videoTitle ? true:false;
        let res = await getMovieDetails({
            type:isMovie ? "movie" : "article",
            id:information._id
        })
        this.props.history.push({
            pathname:isMovie ? "/index/Moviedetails" : "/News/Articledetails",
            query:{data:res.data}
        })
    }
    render() {
        let {index,information} = this.props
        let color = this.choiceColor(index)
        return (
            <div className="LeaderBoardItem">
                <span style={{background:color,color:"white"}}>{index+1}</span>
                <a href="/#" className="LeaderTvName ellipses" onClick={() =>this.toDetails(information)}>
                    {information.videoTitle || information.articleTitle}
                </a>
                {information.remind_tip ? <p>{information.remind_tip}</p> : null}
            </div>
        );
    }
}

export default withRouter(LeaderboardItem);





