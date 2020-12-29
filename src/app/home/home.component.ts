import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   booksArray = [];
   currentVal:string = "" ;
  constructor(public _BookserviceService:BookserviceService) {
    _BookserviceService.getAllBooks().subscribe( (allBooks) => {
      this.booksArray =  allBooks.items;
    });
  }

  ngOnInit() {
  }

  getBook()
{
  if(this.currentVal != "")
  {
    this.booksArray = this.booksArray.filter(result=>{
      return result.volumeInfo.title.toLocaleLowerCase().match(this.currentVal.toLocaleLowerCase()) ; })
  }




}
}
