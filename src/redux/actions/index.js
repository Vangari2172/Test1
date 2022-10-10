export const userData = (data) => {
  return {
    type: "USER_DATA",
    data,
  };
};

export const delete_user = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const edit_user = (id) => {
  return {
    type: "EDIT_USER",
    id,
  };
};

export const update_user = (data) => {
  return {
    type: "UPDATE_USER",
    data,
  };
};
