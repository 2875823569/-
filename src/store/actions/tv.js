import {getMovieList} from "../../api/comment"

export function initTv(tvList) {
    return {
        type:"INITTV",
        preload:tvList
    }
}

export function fetchTv() {
    return async (dispath) => {
        let res = await getMovieList({
            page:1,
            size:12,
        })
        dispath(initTv(res.data.list))
    }
}

export function getTypeTv(type){
    return {
        type:"TYPE",
        preload:type
    }
}