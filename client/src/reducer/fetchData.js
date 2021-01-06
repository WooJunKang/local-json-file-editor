
export default function reducer(state, action) {

  switch (action.type) {

    case "LOADING":
      return Object.assign({}, state, {
        loading: true
      })

    case "SUCCESS":
      return Object.assign({}, state, {
        loading: false,
        [action.key]: action.value
      })

    case "SET_CURRENT_FILE":
      return Object.assign({}, state, {
        currentFile: action.value
      })

    case "HANDLE_INPUT_CHANGE":
      return Object.assign({}, state, {
        curFileData: {
          ...state.curFileData,
          [action.name]: action.value
        }
      })

    default:
      return state;
  }

}