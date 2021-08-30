const initialState = {
  bugers: [
    { tenMon: "salad", soLuong: 1 },
    { tenMon: "cheese", soLuong: 1 },
    { tenMon: "beef", soLuong: 1 },
  ],
  menu: [
    { tenMon: "salad", gia: 10 },
    { tenMon: "cheese", gia: 10 },
    { tenMon: "beef", gia: 10 },
  ],
  total: 30,
};

const bugerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GIAM_MON": {
      const { tenMon } = action.payload;
      const newbugers = state.bugers.map((item) => {
        return item.tenMon === tenMon
          ? { ...item, soLuong: item.soLuong - 1 }
          : item;
      });
      return {
        ...state,
        bugers: newbugers,
        total: state.total - 10,
      };
    }
    case "THEM_MON": {
      const { tenMon } = action.payload;
      const newbugers = state.bugers.map((item) => {
        return item.tenMon === tenMon
          ? { ...item, soLuong: item.soLuong + 1 }
          : item;
      });
      return {
        ...state,
        bugers: newbugers,
        total: state.total + 10,
      };
    }
    default:
      return state;
  }
};
export default bugerReducer;
