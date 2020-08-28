import server from "../utils/require"

//获取电视剧列表
export function getTVList(data) {
    return server({
        method: "GET",
        url:"/api/getTvList",
        params:data
    })
}

//获取电影列表
export function getMovieList(data) {
    return server({
        method:"GET",
        url:"/api/getMovieList",
        params:data
    })
}

//获取所有类型视频
export function getTypeVedioList(data) {
    return server({
        method:"GET",
        url:"/api/getTypeVedioList",
        params:data
    })
}

export function getVarietyShowList(data) {
    return server({
        method:"GET",
        url:"/api/getVarietyShowList",
        params:data
    })
}
//获取文章列表
export function getArticalList(data) {
    return server({
        method:"GET",
        url:"/api/getArticle",
        params:data
    })
}

//获取导航列表
export function getNavList(data) {
    return server({
        method:"GET",
        url:"/api/getNavList",
        params:data
    })
}

//获取视频详情
export function getMovieDetails(data) {
    return server({
        method:"GET",
        url:"/api/getMovieDetails",
        params:data
    })
}

//获取最新推荐
export function getLatestRecommended(data) {
    return server({
        method:"GET",
        url:"/api/getLatestRecommended",
        params:data
    })
}
//获取热门推荐
export function getPopularrecommendation(data) {
    return server({
        method:"GET",
        url:"/api/getPopularrecommendation",
        params:data
    })
}
//通过选择的类型过去视频信息
export function getVedioByType(data) {
    return server({
        method:"GET",
        url:"/api/getVedioByType",
        params:data
    })
}