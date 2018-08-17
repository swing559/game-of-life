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
  
  onReset() {
	for(var i = 0; i<this.lives.length; i++){
		for (var j=0; j<this.lives[i].length; j++){
			this.lives[i][j]=false;
		}
	}
  }
  
  constructor() { }

  ngOnInit() {
  }

}
