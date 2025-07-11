module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      playgroundAlways: false,
      shadowCRUD: true,
      depthLimit: 7,
      amountLimit: 100,
      graphiql: true,
    },
  },
});
