import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/app/services/books-data.service';

@Component({
  selector: 'app-the-guide',
  templateUrl: './the-guide.component.html',
  styleUrls: ['../../app.component.css']
})
export class TheGUIDEComponent implements OnInit {

  constructor(private bookService:BooksDataService) { }
   
  pages!:string[];
  currentPage:number=0;
  ngOnInit(): void {
     this.pages=this.bookService.getBooksData("THE GUIDE");
     console.log(this.pages);
  }

  setCurrentPage(val:string){
         if(val==="pre" && this.currentPage>0 ){
            this.currentPage=this.currentPage-1;
         }
         else if(val==="next" && this.currentPage<this.pages.length){
          this.currentPage=this.currentPage+1;
         }
  }

}
