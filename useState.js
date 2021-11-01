 const useState = function(initalValue = undefined) {
  let _state = initalValue;
  function state () {
    return _state
  }
  function setState(newStateValue) {
    _state = newStateValue;
  }

  return  [state, setState];
};

module.exports = { useState };