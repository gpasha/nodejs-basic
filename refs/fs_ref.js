const fs = require('fs')
const path = require('path')

// fs - File System

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err

//     console.log('The folder was created!')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynote.txt'),
//     'Hello world!',
//     err => {
//         if (err) throw err
//         console.log('The file was created!')

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynote.txt'),
//             ' ... additional text ...',
//             err2 => {
//                 if (err2) throw err2
//                 console.log('The file was changed!')

//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynote.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         // console.log(Buffer.from(data).toString());
//                         console.log(data);
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'mynote.txt'),
    path.join(__dirname, 'notes', 'note.txt'),
    err => {
        if (err) throw err
        console.log('The file was renamed!')
    }
)