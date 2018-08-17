import { Component, OnInit } from '@angular/core';
import { LIFE } from '../life-table';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {

  lives = LIFE;
  
  /*switches a cell determined by the row and column dropdown
    between alive and dead status*/
  onClick(x:number, y: number):void {
	  this.lives[x][y]=!this.lives[x][y];
  }
  
  constructor() { }

  ngOnInit() {
  }

}
