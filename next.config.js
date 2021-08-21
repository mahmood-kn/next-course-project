const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mahmood',
        mongodb_password: 'r0u2L9iqRk75cJJz',
        mongodb_clustername: 'contactkeeper',
        mongodb_database: 'my-site-dev',
      },
      target: 'serverless',
    };
  }
  return {
    env: {
      mongodb_username: 'mahmood',
      mongodb_password: 'r0u2L9iqRk75cJJz',
      mongodb_clustername: 'contactkeeper',
      mongodb_database: 'my-site',
    },
    target: 'serverless',
  };
};
