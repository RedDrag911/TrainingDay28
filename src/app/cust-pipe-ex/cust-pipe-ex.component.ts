import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-pipe-ex',
  templateUrl: './cust-pipe-ex.component.html',
  styleUrls: ['./cust-pipe-ex.component.css']
})
export class CustPipeExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // ournumbers:number[]=[12.12,34.34,55.5099];

  // firstfile=2048;
  // secondfile=4096;
  // thirdfile=1000;

  ourFiles:number[]=[2012.12,2034.34,6755.5099,2048,4096,1024];
}
