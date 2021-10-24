import person from '../persons.json'

let initialState = person

  export const fetchReducer = (state = initialState, action) => {
      switch (action.type) {
          case 'FETCH_PEOPLE':
              return state

            default:
                return state
      }
  }