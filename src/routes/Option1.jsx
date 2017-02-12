export default {
  path: '/option1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Option1').default);
    });
  }
};
