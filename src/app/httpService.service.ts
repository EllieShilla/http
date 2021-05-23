import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
    constructor(private http:HttpClient){}

        read(){
            return this.http.get('assets/userList.json');
        }
}
