import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { NextGenerationComponent } from './next-generation/next-generation.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
		ShowTableComponent,
		EditTableComponent,
		NextGenerationComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Game Of Life'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Game Of Life');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Game Of Life!');
  }));
});
