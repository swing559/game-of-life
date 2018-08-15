import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTableComponent,
    EditTableComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
