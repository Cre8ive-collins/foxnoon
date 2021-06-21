import { Component, HostListener, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {

  sideBarOpen: boolean = false;

  constructor(private router : Router,
    ) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this.router.navigate(["login"]);
  }

  toggleSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    this.sideBarOpen = true;
  }

  removeSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    this.sideBarOpen = false;
  }

}
