import SET_ from './index';

const setInput = (inputValue, inputName) => ({
  type: `${ SET_ }${ inputName.toUpperCase() }`,
  payload: {
    inputValue,
  },
});

export default setInput;