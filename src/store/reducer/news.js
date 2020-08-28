export function news(state=[],action) {
    switch(action.type){
        case "INITNEWS":
            return [...action.preload]
        case "DELETENEWS":
            return state.filter((item) => item.name !== action.preload)
        default:
            return state
    }
}