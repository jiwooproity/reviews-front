const defaultState = {
  data: 100,
};

const proxyAction = {
  get: (state, props) => {
    return state[props];
  },
  set: (state, props, value) => {
    return (state[props] = state[props] + value);
  },
};

const proxyState = new Proxy(defaultState, proxyAction);
export default proxyState;
