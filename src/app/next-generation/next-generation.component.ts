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
	  const alive: number[8][6] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	  
	  /*checks each cell to see if it is alive
		If it is it adds increments the  alive array 
		for each of its neighbors*/
	   for (let lifeRow in LIFE){
		   for(let life in LIFE[lifeRow]){
			   //checks if the cell is true
			   if(LIFE[lifeRow][life]){
				   /*Increments the neighbors around the alive cell
				     The Math.max() and Math.min() functions keep it from 
					 going out of bounds of the array*/
				   for(var i = Math.max(0, lifeRow-1); i<=Math.min(+lifeRow+1, LIFE.length-1); i++){
						for(var j = Math.max(0, life-1); j<=Math.min(+life+1, LIFE[lifeRow].length-1); j++){
							if( i != +lifeRow || j != +life){
								alive[i][j]++;
								
							}
						}
					}
			   }
		   }
	   }
	   
	   /*Determines the next generation using the accumulated 
		 numbers in the alive array */
	   for (let row in LIFE){
		   for (let column in LIFE[row]){
			   //Alive cells that stay alive
			   if((alive[row][column]== 2 || alive[row][column] ==3) && LIFE[row][column] == true)
				   LIFE[row][column] = true;
			   //Dead cells that become alive
			   else if (alive[row][column] == 3 && LIFE[row][column] ==false)
				   LIFE[row][column] = true;
			   else
				   LIFE[row][column] = false;
		   }
	   }
	   
  }
  
  constructor() { }

  ngOnInit() {
  }

}
