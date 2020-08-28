import React, {Component} from 'react';
import "./css/MovieItem.css"
import Image from "./Image";
import {withRouter} from "react-router-dom";
class TvItem extends Component {

    render() {
        let {information} = this.props
        if (information){
            return (
                <div className="itemBox">
                    <div>
                        <Image information={information}/>
                        <span className="TvTitle" onClick={() => this.changePage(information._id)}>{information.videoTitle}</span>
                        <span className="performer">{information.performer}</span>
                    </div>
                </div>
            );
        }else {
            return <div></div>
        }
    }
}

export default withRouter(TvItem);