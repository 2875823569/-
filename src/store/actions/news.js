export function initNews(news){ //定义个初始资讯的 action
    return {
        type:"INITNEWS",
        preload:news
    }
}

export function deleteNews(id){

    return {
        type:"DELETENEWS",
        preload:id
    }

}
