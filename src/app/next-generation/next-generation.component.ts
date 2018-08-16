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
	  
	   for (let lifeRow in LIFE){
		   for(let life in LIFE[lifeRow]){
			   if(LIFE[lifeRow][life]){
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
	   
	   for (let row in LIFE){
		   for (let column in LIFE[row]){
			   if((alive[row][column]== 2 || alive[row][column] ==3) && LIFE[row][column] == true)
				   LIFE[row][column] = true;
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
