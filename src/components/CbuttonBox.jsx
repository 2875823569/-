import React, {Component} from 'react';
import ClassificationButton from "./ClassificationButton";
class CbuttonBox extends Component {
    render() {
        let {information ,select}  = this.props
        let {typeList,type,fn} = select
        return (
            <div className="flex cbox">
                <span
                    className={`CbuttonBox cbtn ${typeList[type] === "" ? "action" : ""}`}
                    onClick={() => fn(type,"")}
                >全部</span>
                {
                    information.map((item) => {
                        return <ClassificationButton information={item} select={select} key={item._id}/>
                    })
                }
            </div>
        );
    }
}

export default CbuttonBox;