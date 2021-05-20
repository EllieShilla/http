// export class ReadFromFile{

//     read(){
//         this.http.get('/assets/text.txt').subscribe(data => {
//             return(data.text());
//         })


// var fs = require("fs");
// let fileContent = fs.readFileSync("/assets/text.txt", "utf8");
// return fileContent;
//     }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
//Read  text file

@Injectable({
  providedIn: 'root'
})
export class ReadFromFile {
    constructor(private http:HttpClient){}

  urlEncoded = "/assets/text.txt";
  getText(){
    return this.http.get(this.urlEncoded, {responseType: 'text'});
  }

  setText(){

  }
}