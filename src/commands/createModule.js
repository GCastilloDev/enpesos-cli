const { mkdirSync, writeFileSync } = require('fs');
const ora = require('ora');
const path = require('path');

const moduleTemplate = require('../templates/module');

const createModule = async (name = '') => {
  if (name === '') {
    console.log('El nombre del modulo es requerido!!');
    return;
  }

  const createModule = ora(`Creando el modulo ${name}\n`);
  createModule.start();

  const createFolders = ora();
  createFolders.text = 'Creando estructura de carpetas\n';

  const folderAPI = path.resolve(process.env.PWD, `./src/modules/${name}`);
  mkdirSync(folderAPI, { recursive: true });
  createFolders.succeed('Estructura de carpetas creadas con éxito!\n');

  const createFiles = ora();
  createFiles.text = 'Creando archivos';
  createFiles.start();

  console.log('\n');
  for (const property in moduleTemplate) {
    const createFile = ora();
    createFile.text = `Creando archivo ${property}.js\n`;
    createFile.start();
    console.log();
    writeFileSync(`${folderAPI}/${property}.js`, moduleTemplate[property]);
    createFile.succeed(`Archivo ${property}.js creado con éxito!\n`);
  }

  createFiles.succeed('Archivos creados con éxito!\n');
  createModule.succeed('Módulo creado con éxito!!!');
};

module.exports = createModule;
