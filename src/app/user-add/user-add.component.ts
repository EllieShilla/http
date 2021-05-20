import { Component, OnInit } from '@angular/core';
import { HttpService} from '../httpService.service';
import {ReadFromFile} from '../readFromFile.service';
import { saveAs } from 'file-saver';
// import { SomeClass } from '../textJsTs';
// import  {FromFile} from 'd:/gitProject/http/src/app/text.js';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers:[HttpService]
})
export class UserAddComponent implements OnInit {

  num1: number=0;
  num2: number=0;
  sum: number=0;
  done: boolean = false;
  text:string="";
  z:any;
  constructor(private httpService: HttpService,private http:ReadFromFile){}

  submit(){
      this.httpService.getSum(this.num1, this.num2).subscribe((data:any) => {
          this.sum=data.result; 
          this.done=true;
      });

  }
  
  ngOnInit(): void {

    const str = <string>require('d:/gitProject/http/src/app/text.js');

    // var FileSaver = require('file-saver');
// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// saveAs(blob, "/assets/text.txt");
     
  
//     this.http.getText().subscribe((data:any) => {this.text = data;
//        });
// const fs = require('fs');

// const fs = (<any>window).require("fs");
//     const data =  fs.readFileSync("/assets/text.txt");
//     console.log(data.toString());
 
}



  }



  // "browser": { "fs": false, "path": false, "os": false}
