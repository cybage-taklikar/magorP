import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CustomBreakpointNames } from './service/breakpoint/breakpoint.service';
import { LayoutService } from './service/breakpoint/layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';
  isThemeChange: boolean = false;
  scrollTo: any = '';
  isprofileclicked: boolean = false;
  adminpage: boolean = sessionStorage.getItem('admin') ? true : false;
  constructor(
    private myElement: ElementRef,
    private layoutService: LayoutService
  ) {}
  ngOnInit(): void {
    this.layoutService
      .subscribeToLayoutChanges()
      .subscribe((observerResponse) => {
        // console.log('-------------' + observerResponse);
        // You will have all matched breakpoints in observerResponse
        if (
          this.layoutService.isBreakpointActive(
            CustomBreakpointNames.extraSmall
          )
        ) {
          // Do something here for extraSmall devices
          console.log('-------------xs');
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.small)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------s');
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.medium)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------md');
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.large)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------l');
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.extraLarge)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------xl');
        }
      });
  }
  updateTheme(e: any) {
    this.isThemeChange = e;
    console.log('app ' + this.isThemeChange);
  }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }

  updateScroll(e: any) {
    this.scrollTo = e;
    // var parser = new DOMParser();
    // var doc = parser.parseFromString(this.scrollTo, 'text/html');
    //  doc.body;
    // this.scroll(doc.body);
    // var x : HTMLElement;
    // x = this.scrollTo as HTMLElement;
    // this.scroll(x);
    this.gotoComponent(this.scrollTo);
    console.log(this.scrollTo);
  }

  gotoComponent(id: string) {
    console.log(id);

    let el = this.myElement.nativeElement.querySelector('#' + id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
  changeview(e: any) {
    this.isprofileclicked = e;
  }
  adminview(e: any) {
    this.adminpage = e;
  }
}
