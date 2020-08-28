import React, {Component} from 'react';

class IndexBox extends Component {
    render() {
        let {icon,nav,comp,headcomp,Container} = this.props
        // console.log(TvList)
        return (
            <div>
                <div className="middle">
                    <div className="middle_left card">
                        <div className="middle_top">
                            <div>
                                <i className={`iconfont ${icon}`}></i>
                                <span>{nav}</span>
                            </div>
                            {headcomp}
                        </div>
                        {Container}
                    </div>
                    {comp}
                </div>
            </div>
        );
    }
}

export default IndexBox;