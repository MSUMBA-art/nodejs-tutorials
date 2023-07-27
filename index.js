const fs = require('fs');
const path = require('path')


fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);



// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),'Nice to meet you',
//   (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\n\nYour are welcome',
//       (err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(
//           path.join(__dirname, 'files', 'reply.txt'),
//           path.join(__dirname, 'files', 'newReply.txt'),
//           (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//           }
//         );
        
//       }
//     );
//   }
// );




// Event 'uncaughtException'
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});


