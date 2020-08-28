import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class ClassificationButton extends Component {
    render() {
        let {information,select:{type,typeList,fn}} = this.props
        return (
            <span className={`cbtn ${typeList[type] === information._id ? "action" : ""}`}
                  onClick={() => {fn(type,information._id)}}
            >
                {information.name}
            </span>
        );
    }
}

export default withRouter(ClassificationButton);