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
	  console.log(alive);
	  console.log(LIFE);
	  
	   for (let lifeRow in LIFE){
		   for(let life in LIFE[lifeRow]){
			   if(LIFE[lifeRow][life]){
				   for(var i = Math.max(0, lifeRow-1); i<=+lifeRow+1; i++){
						for(var j = Math.max(0, life-1); j<=+life+1; j++){
							if( i != +lifeRow || j != +life){
								alive[i][j]++;
								
							}
						}
					}
			   }
		   }
	   }
	   
	   console.log(alive);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
