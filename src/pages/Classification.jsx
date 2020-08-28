import React, {Component} from 'react';
import {getNavList} from "../api/comment"
import CbuttonBox from "../components/CbuttonBox";
import { Menu,Pagination } from 'antd';
import {connect} from "react-redux"
import {fetClassfication} from "../store/actions/classfication"
import TvItem from "../components/TvItem";
import IndexBox from "../components/IndexBox";


class Classification extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            typeList: {
                nav: "",
                classifycation: ""
            },
            sort: ["time"],
            current:1
        }

        this.select = this.select.bind(this)
        this.change = this.change.bind(this)
    }
    select(type,id){
        let typeList = this.state.typeList
        typeList[type] = id
        this.setState({
            typeList:typeList,
            current:1,
        })
        this.change(1)
    }
    change(num){
        this.props.dispatch(fetClassfication({
            nav:this.state.typeList.nav,
            classifycation:this.state.typeList.classifycation,
            page:num,
            size:12,
            sort:this.state.sort[0],
        }))
        this.setState({
            current:num,
        })
    }
    changeCheck(key){
        this.setState({
            sort:[key],
            current:1,
        })
        this.change(1)
    }
    async componentDidMount() {
        let res = await getNavList()
        this.setState({data:res.data.value})

        //储存查询的分类数据进仓库
        this.change(1)
    }

    render() {
        let data = this.state.data
        let Classification = []
        let list = this.props.list || []
        let total = this.props.total
        // console.log(list,this.props)
        if(data){
            data.forEach((parent,idx) => {
                parent.children && parent.children.forEach((child) => {
                    Classification.push(child)
                })
            })
            return (
                <div className="card" style={{width:"1166px",margin:"20px auto"}}>
                    <div className="flex cbox">
                        <span className="cbtn gray">导航</span>
                        <CbuttonBox
                            information={data}
                            select={{type: "nav",typeList:this.state.typeList,fn:this.select}}/>
                    </div>
                    <div className="flex cbox">
                        <span className="cbtn gray">分类</span>
                        <CbuttonBox
                            information={Classification}
                            select={{type: "classifycation",typeList:this.state.typeList,fn:this.select}}
                        />
                    </div>
                    <Menu mode="horizontal" selectedKeys={this.state.sort}>
                        <Menu.Item  key="time" onClick={() => this.changeCheck("time")}>
                            按时间
                        </Menu.Item>
                        <Menu.Item key="popularity" onClick={() => this.changeCheck("popularity")}>
                            按人气
                        </Menu.Item>
                    </Menu>
                    <IndexBox
                        Container={list && list.map((item,index) => <TvItem information={item} key={item._id || index}/>)}
                    />
                    <Pagination
                        current={this.state.current}
                        total={total}
                        onChange={(page) => this.change(page)}/>
                </div>
            );
        }else {
            return null;
        }

    }
}

let mapStateToProps = function (state) {
    return {
        list: state.classfication.list,
        total:state.classfication.total
    }
}

export default connect(mapStateToProps)(Classification);