import {
  GET_SUPERHEROS,
  GET_SUPERHEROS_SUCCESS
} from "../../constants/ActionTypes";

export const getSuperheros = () => {
  return {
    type: GET_SUPERHEROS,
  };
};

export const getSuperherosSuccess = (data) => {
  return {
    type: GET_SUPERHEROS_SUCCESS,
    payload: data,
  };
};
