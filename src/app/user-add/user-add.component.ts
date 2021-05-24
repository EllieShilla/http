import { Component, OnInit } from '@angular/core';
import { HttpService} from '../httpService.service';
import {ReadFromFile} from '../readFromFile.service';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';

// import { SomeClass } from '../textJsTs';
// import  {FromFile} from 'd:/gitProject/http/src/app/text.js';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers:[HttpService]
})
export class UserAddComponent implements OnInit {

  users:User[]=[];
  constructor(private httpService: HttpService, private httpClient:HttpClient){}
  
  ngOnInit(): void {
    this.httpService.read().subscribe((i:any)=>this.users=i["userList"] );  
}

onSubmit(data:any){
  this.httpService.read().subscribe((i:any)=>this.users=i["userList"] );  
  if(this.users.find(el => el.login==data.login)==undefined) 
  {
  this.httpClient.post('http://localhost:3000/userList', data)
  .subscribe((result)=>{})
  alert("Регистрация прошла успешно!");
}
else
alert("Выбранный логин занят!");
}

}


