import {createStore} from "redux";
let Mystate = {
    count:1,
    fours:[{
        name:"经典汽车"
    }]
}
function reducer(state=Mystate,action) {
    switch(action.type){
        case "ADD":
            return  Object.assign(state , {count:state.count+action.preload}) ;
        case "REDUCE":
            return Object.assign(state,{count:state.count-action.preload})
        default: return state
    }
}

let actions = {
    type:"ADD",
    preload:5,
}

let store = createStore(reducer) //创建仓库

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(actions) //触发一个动作
store.dispatch(actions)
store.dispatch(actions)

