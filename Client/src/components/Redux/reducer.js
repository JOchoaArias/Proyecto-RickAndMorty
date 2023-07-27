const initialState = {
    allCharacters: [],
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            state.allCharacters = action.payload
            return { ...state, myFavorites: action.payload, }

        case 'REMOVE_FAV':
            state.allCharacters = action.payload
            return { ...state, myFavorites: action.payload, }

        case "FILTER":
            const charactersFiltered = state.allCharacters.filter((characterFilter) => characterFilter.gender === action.payload)
            return {
                ...state,
                myFavorites: charactersFiltered
            }

        case "ORDER":
            const copyState = state.allCharacters
            if (action.payload === "A") {
                copyState.sort((a, b) => a.id - b.id)
            } else if (action.payload === "D") {
                copyState.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: copyState
            }

        case "SHOW_FAVS":
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return { ...state };
    }
}

export default reducer;