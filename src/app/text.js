

//  function FromFile()
// {
    const fs = require("fs");
 

 
let  fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
// return fileContent.toString();



// module.exports.SomeClass = SomeClass;
// export default SomeClass;
// module.exports=FromFile;