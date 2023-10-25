// export const addCart = (product) => {
//     return{
//         type : "ADDITEM",
//         payload : product
//     }
// }


// // For Delete Item From Cart
// export const delCart = (product) => {
//     return{
//         type : "DELITEM",
//         payload : product
//     }
// }

import { CardItemType } from "../../pages/shop/Products";

export enum ActionTypes {
    ADDITEM = "ADDITEM",
    DELITEM = "DELITEM"
  }
  
  
  
  export interface AddItemAction {
    type: ActionTypes.ADDITEM;
    payload: CardItemType;
  }
  
  export interface DelItemAction {
    type: ActionTypes.DELITEM;
    payload: CardItemType;
  }
  
  export type CartAction = AddItemAction | DelItemAction;
  
  export const addCart = (product: CardItemType): AddItemAction => {
    return {
      type: ActionTypes.ADDITEM,
      payload: product
    };
  };
  
  export const delCart = (product: CardItemType): DelItemAction => {
    return {
      type: ActionTypes.DELITEM,
      payload: product
    };
  };