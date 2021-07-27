const createModule = require('./createModule');

const manager = (option, name) => {
  const options = {
    module: createModule(name),
  };

  if (!Object.keys(options).includes(option)) {
    console.log('Opción no valida!!!');
    return;
  }

  options[option];
};

module.exports = manager;
