// file system module to perform file operations
import fs from 'fs';
 
// json data
const jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
// parse json
const jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
// stringify JSON Object
const jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
 
fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});