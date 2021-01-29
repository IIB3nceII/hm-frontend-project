export const initialState = {
  basket: [],
  favList: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
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
      const itemIndex = state.favList.findIndex(
        (favItem) => favItem.id === action.id
      );
      let newList = [...state.favList];

      if (itemIndex >= 0) {
        newList.splice(itemIndex, 1);
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
