import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class HttpService{
    constructor(private http:HttpClient){}
    text:string="sd";

    getSum(num1:number,num2:number)
    {
        return this.http.get('http://localhost:3000/sum?num1='+num1+'&num2='+num2);
    }

    read(){
        
        // return this.http.get('/assets/text.txt').subscribe((data:any) => {
        //     data.text();
        // })

          this.http.get("/assets/text.txt").subscribe((data:any) => {
            this.text=data.text();
        })
        return this.text;
    }
}

// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {User} from './user';

// @Injectable()
// export class HttpService{
//     constructor(private http: HttpClient){ 
//     postData(user: User){         
//         const body = {name: user.name, age: user.age};
//         return this.http.post('http://localhost:3000/postuser', body); 
//     }
// }
