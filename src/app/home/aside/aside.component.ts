import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
 
  popularPostUrl = "http://balindra.com/post/popular-post.php";
  popularPostArray:any=[];

  jobPopularPostUrl = "http://balindra.com/post/popular-job.php";
  jobPopularPostArray:any=[];

  commentArray:any=[];
  commentArrayUrl="http://balindra.com/post/comment.php";

  constructor(private http:HttpClient){

  this.http.get(this.popularPostUrl,{responseType:'json'}).subscribe((data:any)=>{
    this.popularPostArray  = data;
    console.log(data);
  })

  //Getting Post Views 
     let viewpost= `http://balindra.com/post/post-view.php?post_url=${this.popularPostArray.post_url}`;
     this.http.get(viewpost,{responseType:'json'}).subscribe((data)=>{
       console.log(data)
     })

    //jobs latest Post 
   
     this.http.get(this.jobPopularPostUrl,{responseType:'json'}).subscribe((data1:any)=>{
      this.jobPopularPostArray = data1;
      console.table(data1);
    })

     //Latest Post Comment from the users
  
     this.http.get(this.commentArrayUrl,{responseType:'json'}).subscribe((data2:any)=>{
      this.commentArray = data2;
      console.table(data2);
    })
  

}

}
