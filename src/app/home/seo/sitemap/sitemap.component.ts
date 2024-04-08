import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { UserService } from 'src/app/admin/vertical/dashboard/user.service';
@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent {

  getPostUrl ="http://balindra.com/post/read.php"
  allPostArray:any =[];
  postItems:{postTitle:any ,postStroies:any[]}[]=[];
  constructor(private userService: UserService, private http:HttpClient){
  this.http.get(this.getPostUrl, {responseType:'json'}).subscribe((data:any)=>{
   this.allPostArray = data;
   console.log(this.allPostArray);
   
    this.postItems=this.createSiteMapStructure(this.allPostArray)
 })


  }




createSiteMapStructure(postArray:any[]){
 let x:{postTitle:any ,postStroies:any[]}[]=[];
  postArray.forEach((post:any)=>{
   let isExists=x.some(isE=>isE.postTitle===post.post_cat);
   if(!isExists){
     let y=postArray.filter((p)=>p.post_cat===post.post_cat);
     x.push({postTitle:post.post_cat,postStroies:y})
   }
 })
 console.log(x);
 
return x


}
}