import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="學習小幫手";
  show=true;
  ps:number;
  fib:Array<number>=[];
  result:string;
  constructor() {     
  }     
  ngOnInit() {      
    this.fib[1]=3;
    this.fib[2]=4;
    for(var i=3;i<=20;i++){
      this.fib[i]=this.fib[i-1]+this.fib[i-2];
    }       
  }
  ok(){
    alert(this.fib[12]+this.fib[18])
    if(this.ps==this.fib[12]+this.fib[18]){
      //this.show=false;
      this.result=''; 
      $('.text').slideDown(3000);     
    }else{     
      this.result='密碼錯誤';
    }
  } 
}
