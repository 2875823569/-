export function classfication(state = {}, action) {
    switch (action.type) {
        case "INICLASSFICTION":
            return {...action.preload}
        default:
            return state
    }
}