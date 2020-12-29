import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service' ;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
//a5t nos5a mn l service (dependency injection)
  constructor( public _BookserviceService:BookserviceService) {

    _BookserviceService.getAllBooks();
  }

  ngOnInit() {
  }

}
