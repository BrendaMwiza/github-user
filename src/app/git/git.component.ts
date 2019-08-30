import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  infos: GitUser[];
  constructor() { }

  ngOnInit() {
  }

}
