const fs = require('fs');

fs.readFile(process.argv[2],'utf8',(err, data) =>{
  if (err){
    console.log("unable to read file");
  }
  else {
    console.log(data);
  }
});


