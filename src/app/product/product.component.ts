import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // imagePath:string='assets/images/tiger.jpg';
 products:any[]=[
   {pid:101,pname:'Gaming Laptop',pprice:56000.90,ppic:'assets/images/laptop.png',pmfd:'07/27/2021'},
   {pid:102,pname:'Speakers',pprice:7999.99,ppic:'assets/images/speakers.jpg',pmfd:'12/12/2020'},
   {pid:110,pname:'Monitor',pprice:35499.59,ppic:'assets/images/monitor.jpg',pmfd:'06/30/2021'},
   {pid:105,pname:'Keyboard',pprice:4500.50,ppic:'assets/images/keyboard.jpg',pmfd:'01/02/2021'},
   {pid:119,pname:'Mouse',pprice:2999.99,ppic:'assets/images/mouse.jpg',pmfd:'08/18/2021'},
   {pid:103,pname:'Camera',pprice:42400.51,ppic:'assets/images/camera.jpg',pmfd:'07/23/2021'}
 ];
}
