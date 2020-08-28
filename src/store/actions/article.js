import {getArticalList} from "../../api/comment";

export function initArticle(article){ //定义个初始资讯的 action
    return {
        type:"INITNEWS",
        preload:article
    }
}
export function fetchArticle() {
    return async (dispath) => {
        let res = await getArticalList({
            page:1,
            size:12,
        })
        dispath(initArticle(res.data.list))
    }
}