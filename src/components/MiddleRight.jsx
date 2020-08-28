import React, {Component} from 'react';
import LeaderboardItem from "./LeaderboardItem";
import Image from "./Image";
class MiddleRight extends Component {
    render() {
        let {information,icon,nav} = this.props
        let numberOne = information[0]
        if(information[0]){
            return (
                <div className="middle_right card">
                    <div className="LeaderboardTop">
                        <div className="Leaderboardtitle">
                            <i className={`iconfont ${icon}`}></i>
                            <p style={{margin:0}}>{nav}</p>
                        </div>
                        {numberOne.videoImage ?
                            <div className="NumberOne">
                                <Image information={numberOne}/>
                            <div className="NumberOneInfo">
                                <div className="TvName">{numberOne.videoTitle}</div>
                                <div className="director">导演：{numberOne.director || "佚名"}</div>
                                <div className="performer">主演{numberOne.performer}</div>
                            </div>
                        </div>
                            : null}
                    </div>
                    {information.map((item,index) => <LeaderboardItem index={index} information={item} key={item._id || index} />)}
                </div>
            );
        }else {
            return <div></div>
        }
    }
}

export default MiddleRight;