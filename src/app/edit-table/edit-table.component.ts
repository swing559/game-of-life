import { Component, OnInit } from '@angular/core';
import { LIFE } from '../life-table';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {

  lives = LIFE;
  onClick(x:number, y: number):void {
	  console.log(x);
	  console.log(y);
	  this.lives[x][y]=!this.lives[x][y];
  }
  
  constructor() { }

  ngOnInit() {
  }

}