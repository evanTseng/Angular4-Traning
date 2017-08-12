import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title='Hello'
  title_link = 'http://blog.miniasp.com/'
  title_pic = '/assets/images/logo.png'
  title_twww = 'The Will Will Web'


  counter = 0;


  constructor() { }

  ngOnInit() {
    // setTimeout(()=> {
    //   this.title = 'The Will Will Web'
    // }, 2000);
  }

  changeTitle($event: MouseEvent){
    console.log($event);
    if($event.ctrlKey){
      this.title = 'The Will Will Web'
    }
    this.counter++;
  }

  isHighlight(){
    return this.counter % 2;
  }


}
