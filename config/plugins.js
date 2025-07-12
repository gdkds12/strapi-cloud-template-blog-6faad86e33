module.exports = () => ({
  'populate-deep': {
    config: {
      defaultDepth: 5, // 필요 깊이
    },
  },
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
