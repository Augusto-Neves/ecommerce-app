const initialState = {
  items: [
    {
      id: 1,
      name: "Apple",
      image:
        "https://t3.ftcdn.net/jpg/03/10/32/02/360_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg",
      price: 1.5,
    },
    {
      id: 2,
      name: "Pear",
      image:
        "https://5.imimg.com/data5/YW/JL/MY-41533060/pear-fruit-500x500.jpg",
      price: 2.5,
    },
    {
      id: 3,
      name: "Banana",
      image:
        "https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/banana-prata-unidade-aprox.-110-gramas_2021-04-20_11-27-58_3_423.jpeg",
      price: 2.0,
    },
    {
      id: 4,
      name: "Pineapple",
      image:
        "https://www.earthytales.in/uploads/products/fresh-pineapple-281kg-29-500x5001.png",
      price: 3.0,
    },
    {
      id: 5,
      name: "Mango",
      image:
        "https://www.collinsdictionary.com/images/full/mango_414745195.jpg",
      price: 3.5,
    },
  ],
};

const productReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
