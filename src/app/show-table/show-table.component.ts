import { Component, OnInit } from '@angular/core';
import {LIFE} from '../life-table';
@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  lives = LIFE;
  
  constructor() { }

  ngOnInit() {
  }

}
