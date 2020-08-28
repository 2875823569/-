import React, {Component} from 'react';


class Newsbox extends Component {
    render() {
        let {type} = this.props.match.params
        let container
        switch (type) {
            case "index":
                container = "资讯";break;
            case "notice":
                container = "公告";break;
            case "news":
                container = "新闻";break;
            default:
                container = "暂无内容";
        }
        return (
            <div className="card">
                <div style={{textAlign:"center"}}>{container}</div>
            </div>
        );
    }
}

export default Newsbox;