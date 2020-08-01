import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

   //list = new Array(30);
 list =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
 even =[];
 i:any;
ngOnit(){
  debugger
  for( this.i=0;this.i<30;this.i++){
    if(this.i%2==0)
    {
    this.even.push(this.i);
    }
    } 
}

 p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("solve");
  }, 100);
}); 


}
