import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import {Good} from '../good';


@Component({
  selector: 'app-goods-comp',
  templateUrl: './goods-comp.component.html',
  styleUrls: ['./goods-comp.component.css'],
  providers:[HttpService]
})
export class GoodsCompComponent implements OnInit {

   goods:Good[]=[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData().subscribe((i:any)=>this.goods=i["goodList"] );  
  }

}
