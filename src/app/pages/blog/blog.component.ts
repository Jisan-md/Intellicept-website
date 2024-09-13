import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  isLoading: boolean = true;
  ngOnInit():void{
    this.simulateLoading()
   }
 
   simulateLoading(){
     setTimeout(()=>{
       this.isLoading = false;
     },300);
   }
}
