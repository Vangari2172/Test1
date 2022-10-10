const initialData = {
  list: [],
  editData: [],
};

const userList = (state = initialData, action) => {
  if (action.type === "USER_DATA") {
    console.log("USER_DATA", state);
    return {
      list: [...state.list, action.data],
    };
  }
  if (action.type === "DELETE_USER") {
    console.log("DELETE_USER", state);
    const newUserData = state.list.filter((item) => item.id !== action.id);
    return { list: newUserData };
  }
  if (action.type === "EDIT_USER") {
    console.log("EDIT_USER", state);
    const editUserData = state.list.filter((item) => item.id === action.id);
    return { list: [...state.list], editData: editUserData };
  }

  if (action.type === "UPDATE_USER") {
    const newUpdateData = state.list.filter(
      (item) => item.id !== action.data.id
    );
    newUpdateData.push(action.data);
    return {
      list: newUpdateData,
    };
  }

  return state;
};

export default userList;
