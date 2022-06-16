// var fs = require("fs");
 var os = require("os");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
//  });

console.log( __filename );
console.log( __dirname );


// function printHello() {
//     console.log( "Hello, World!");
//  }
//  // Now call above function after 2 seconds
//  setInterval(printHello, 2000);


// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");
console.log("Program Ended");