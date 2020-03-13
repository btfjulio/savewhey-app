import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/items";

const initialState = {
  items: MEALS,
  filteredItems: MEALS,
  favoriteItem: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const updatedFavItems = state.favoriteItems.filter(
        item => item.id !== action.itemId
      );
      if (state.favoriteItems !== updatedFavItems) {
        return { ...state, favoriteItems: updatedFavItems };
      } else {
        return {
          ...state,
          favoriteItems: [
            ...state.favoriteItems,
            state.items.find(item => item.id === action.itemId)
          ]
        };
      }

    default:
      return state;
  }
  return state;
};

export default itemsReducer;
