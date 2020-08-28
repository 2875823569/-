import {getVedioByType} from "../../api/comment";

export function initClassfication(classfication){ //定义个初始资讯的 action
    return {
        type:"INICLASSFICTION",
        preload:classfication
    }
}
export function fetClassfication(data) {
    return async (dispath) => {
        let res = await getVedioByType(data)
        dispath(initClassfication({
            list:res.data.list,
            total:res.data.total
        }))
    }
}