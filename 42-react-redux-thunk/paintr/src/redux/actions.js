const URL = "http://localhost:3003/paintings"

function changeSearchText(value) {
    return {type: "CHANGE_SEARCH_TEXT", value}
}

const fectchedPaintings = (paintings) => {
    return { type: "FETCHED_PAINTINGS", paintings }

}

const loadingPaintings = () => {
    return { type: "LOADING_PAINTINGS"}
}
const loadedPaintings = () => {
    return { type: "LOADED"}
}

const fetchPaintings = () => {
    return (dispatch) => {
        dispatch(loadingPaintings())
        fetch(URL)
            .then(res => res.json())
            .then(paintings => dispatch(fectchedPaintings(paintings)))
            .then(() => dispatch(loadedPaintings()))
    }
}

export { changeSearchText, fetchPaintings }