import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss'],
})
export class UserSidenavComponent implements OnInit {
  public isMenuOpen: boolean = false;

  constructor(private _location: Location) {
    console.log('hiii');
  }
  ngOnInit(): void {}
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  backToHome() {
    this._location.back();
    // setTimeout(() => window.location.reload(), 10);
    window.location.reload();
  }
}
