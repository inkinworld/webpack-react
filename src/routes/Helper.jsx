export default {
  path: '/helper',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Helper').default);
    });
  }
};
