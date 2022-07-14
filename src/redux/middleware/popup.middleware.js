import { showPopup } from "../features/popup/popup.slice";

const CHECKOUT_MAKEORDER_FULFILLED_PROPERTIES = {
  isShow: true,
  message: 'Congratulations, your order has been placed!',
  style: {
    "background-image": "linear-gradient(to left top, #F8B510 50%, #28A745)"
  }
}

const SUBSCRIBE_SUBSCRIBE_PROPERTIES = {
  isShow: true,
  message: 'Sorry, this feature is temporarily unavailable',
  style: {
    "background-image": "linear-gradient(to left top, #F8B510 50%, #4F8A8B)"
  }
}

const CHECKOUT_DELETEORDERBYID_FULFILLED_PROPERTIES = {
  isShow: true,
  message: 'The order has been successfully deleted',
  style: {
    "background-image": "linear-gradient(to left top, #F8B510 50%, #17A2B8)"
  }
}

const FILTER_PRODUCTS_BY_COLOR_PROPERTIES = {
  isShow: true,
  message: 'Sorry, color filtering is in progress',
  style: {
    "background": "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"
  }
}

const PopupMiddleware = ({dispatch, getState }) => next => action => {
  const { type } = action;
  switch(type) {
    case 'checkout/makeOrder/fulfilled' : {
      dispatch(showPopup(CHECKOUT_MAKEORDER_FULFILLED_PROPERTIES));
      break;
    }
    case 'subscribe/subscribe' : {
      dispatch(showPopup(SUBSCRIBE_SUBSCRIBE_PROPERTIES));
      break;
    }
    case 'checkout/deleteOrderById/fulfilled' : {
      dispatch(showPopup(CHECKOUT_DELETEORDERBYID_FULFILLED_PROPERTIES));
      break;
    }
    case 'filterProductsByColor' : {
      dispatch(showPopup(FILTER_PRODUCTS_BY_COLOR_PROPERTIES));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;