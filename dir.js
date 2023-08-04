const { log } = require('console');
const fs = require('fs');

// create directory 
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory Created');
  });
}

// remove directory 
if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed');
  });
}
