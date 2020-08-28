export function article(state=[],action) {
    switch(action.type){
        case "INITNEWS":
            return [...action.preload]
        default:
            return state
    }
}