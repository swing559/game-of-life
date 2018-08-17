import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenerationComponent } from './next-generation.component';

describe('NextGenerationComponent', () => {
  let component: NextGenerationComponent;
  let fixture: ComponentFixture<NextGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /*this scenario should test all the rules in the game of life
	 1. Any live cell with fewer than two live neighbors dies, as if caused by under
	population.
	2. Any live cell with more than three live neighbors dies, as if by overcrowding.
	3. Any live cell with two or three live neighbors lives on to the next generation.
	4. Any dead cell with exactly three live neighbors becomes a live cell.
	5. A cell’s neighbors are those cells which are horizontally, vertically or
		diagonally adjacent. Most cells will have eight neighbors. Cells placed on the
		edge of the grid will have fewer.
  */
  it('should properly go on to the next generation', () => {
	  const next = new NextGenerationComponent;
	  
	  next.lives[0]=[true, true, true, true, false, false, false, false];
	  next.lives[1]=[true, false, false, false, false, false, false, false];
	  
	  next.nextGeneration();
	  
	  //all tests are testing rule 5
	  
	  //tests rule 3
	  expect(next.lives[0][0]).toBe(true, '0,0 should be true');
	  expect(next.lives[0][1]).toBe(true, '0,1 should be true');
	  expect(next.lives[0][2]).toBe(true, '0,2 should be true');
	  expect(next.lives[1][0]).toBe(true, '1,0 should be true');
	  
	  //tests rule 1
	  expect(next.lives[0][3]).toBe(false, '0,3 should be false');
	  
	  //test rule 2
	  expect(next.lives[1][1]).toBe(false, '1,1 should be false');
	  
	  //tests rule 4
	  expect(next.lives[1][2]).toBe(true, '1,2 should be true');
  });
});
