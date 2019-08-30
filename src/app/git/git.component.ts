import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitUser } from '../git-user';
import { GitService } from '../git-service/git.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  user:GitUser;



  // this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=77b86016a5dd86ee5452cfed26fce05c0df89333").subscribe(data=>{
  //     // Succesful API request
  //     this.user = new GitUser(data.id, data.Name, data.Bio, data.Repositories, data.Email, data.Location, data.Company, data.avatar_url)
  //   };
    // err=>{
    //     this.user = new GitUser()
    //     console.log("An error occurred");
    // })

  constructor(gitService:GitService, private http:HttpClient) {
   }

  ngOnInit() {
    interface ApiResponse{
      Name:string;
      Bio:string;
      Repositories:number;
      Email:string;
      Location:string;
      Company:string;
      avatar_url:string;
    }
  }

}
