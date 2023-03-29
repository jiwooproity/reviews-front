const defaultState = {
  speed: 3,
};

const proxyAction = {
  get: (state, props) => {
    return state[props];
  },
  set: (state, props, value) => {
    return (state[props] = value);
  },
};

const ProxyState = new Proxy(defaultState, proxyAction);
export default ProxyState;
