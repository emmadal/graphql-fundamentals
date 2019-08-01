let products = [];

const getProductById = ({ productId }) => {
  return Promise.resolve(products.find(p => p.id === productId));
};

const createProduct = ({ product }) => {
  const newId = products.length === 0 ? 1 : products.length + 1;
  products = [...products, { ...product, id: newId }];
  return Promise.resolve(`Product saved`);
};

module.exports = {
  Query: {
    products: () => products,
    product: async (_, { id }) => getProductById({ productId: id })
  },
  Mutation: {
    createProduct: async (_, { product }) => createProduct({ product })
  }
};
