import { Component, OnInit } from '@angular/core';
import { LIFE } from '../life-table';

@Component({
  selector: 'app-next-generation',
  templateUrl: './next-generation.component.html',
  styleUrls: ['./next-generation.component.css']
})
export class NextGenerationComponent implements OnInit {

  lives = LIFE;
  
  nextGeneration(){
	  const alive: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	  
	  /*checks each cell to see if it is alive
		If it is it adds increments the  alive array 
		for each of its neighbors*/
	   for (var lifeRow =0; lifeRow<this.lives.length; lifeRow++){
		   for(var lifeColumn=0; lifeColumn<this.lives[0].length; lifeColumn++){
			   //checks if the cell is true
			   if(this.lives[lifeRow][lifeColumn]){
				   /*Increments the neighbors around the alive cell
				     The Math.max() and Math.min() functions keep it from 
					 going out of bounds of the array*/
				   for(var i = Math.max(0, lifeRow-1); i<=Math.min(lifeRow+1, this.lives.length-1); i++){
						for(var j = Math.max(0, lifeColumn-1); j<=Math.min(+lifeColumn+1, this.lives[lifeRow].length-1); j++){
							if( i != +lifeRow || j != +lifeColumn){
								alive[i][j]++;
								
							}
						}
					}
			   }
		   }
	   }
	   
	   /*Determines the next generation using the accumulated 
		 numbers in the alive array */
	   for (let row in this.lives){
		   for (let column in this.lives[row]){
			   //Alive cells that stay alive
			   if((alive[row][column]== 2 || alive[row][column] ==3) && this.lives[row][column] == true)
				   this.lives[row][column] = true;
			   //Dead cells that become alive
			   else if (alive[row][column] == 3 && this.lives[row][column] ==false)
				   this.lives[row][column] = true;
			   else
				   this.lives[row][column] = false;
		   }
	   }
	   
  }
  
  constructor() { }

  ngOnInit() {
  }

}
