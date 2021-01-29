export const initialState = {
  favList: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favList: [...state.favList, action.item],
      };

    case "EMPTY_FAV":
      return {
        ...state,
        favList: [],
      };

    case "REMOVE_FROM_FAV":
      const index = state.favList.findIndex(
        (favItem) => favItem.id === action.id
      );
      let newList = [...state.favList];

      if (index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the list!`
        );
      }

      return {
        ...state,
        favList: newList,
      };

    default:
      return state;
  }
};

export default reducer;
