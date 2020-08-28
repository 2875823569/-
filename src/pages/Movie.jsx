import React, {Component} from 'react';
import IndexBox from "../components/IndexBox";
import {getTypeVedioList} from "../api/comment"
import TvItem from "../components/TvItem";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:"",
            type:this.props.match.params.type
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.type !== this.state.type){
            this.change()
        }
    }

    async change(){
        let typeList = await getTypeVedioList({
            type:this.props.match.params.type,
            page:1,
            size:12
        })
        this.setState({
            list:typeList.data.obj,
            type:this.props.match.params.type
        })
    }

    componentDidMount() {
        this.change()
    }

    render() {
        let list = this.state.list
        return (
            <div className="moviebox">
                {list && Object.entries(list).map((item,index) => {
                    return <IndexBox
                        icon={"icon-dianying"}
                        nav={item[0]}
                        TvList={item[1]}
                        Container={item[1] && item[1].map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default Movie;