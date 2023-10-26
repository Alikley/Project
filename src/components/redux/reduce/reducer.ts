import { ActionTypes, CartAction } from "../action/action";
import { CardItemType } from "../../pages/shop/Products";

const cart:CardItemType[] = [];

const reduce = (state = cart, action: CartAction) => {
  const product = action.payload;
  switch (action.type) {
    case ActionTypes.ADDITEM:
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      
    case ActionTypes.DELITEM:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1 && exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default reduce