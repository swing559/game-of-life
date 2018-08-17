import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableComponent } from './edit-table.component';

describe('EditTableComponent', () => {
  let component: EditTableComponent;
  let fixture: ComponentFixture<EditTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should change a cell from one boolean value to the other', () => {
		const edit = new EditTableComponent();
		expect(edit.lives[0][0]).toBe(false, 'dead at first');
		edit.onClick(0,0);
		expect(edit.lives[0][0]).toBe(true, 'Alive after click');
		edit.onClick(0,0);
		expect(edit.lives[0][0]).toBe(false, 'Dead after second click');
  });
});
