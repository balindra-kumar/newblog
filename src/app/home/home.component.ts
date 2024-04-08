import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(){
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });
  $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");    return false})});
  
  }
}

