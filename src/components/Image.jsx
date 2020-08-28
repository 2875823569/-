import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {PlayCircleTwoTone} from '@ant-design/icons'
import {getMovieDetails} from "../api/comment";
class Image extends Component {
    async changePage(id){
        let res = await getMovieDetails({id:id})
        this.props.history.push({
            pathname:"/index/Moviedetails",
            query:{data:res.data}
        })
    }
    render() {
        let information = this.props.information
        return (
            <div onClick={() => this.changePage(information._id)} className="topImg">
                <img src={information.videoImage} alt=""/>
                <span className="remind_tip">{information.remind_tip}</span>
                <PlayCircleTwoTone className="playButton"/>
            </div>
        );
    }
}

export default withRouter(Image);