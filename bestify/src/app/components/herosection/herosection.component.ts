import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutService } from 'src/app/service/breakpoint/layout.service';
import { CustomBreakpointNames } from 'src/app/service/breakpoint/breakpoint.service';

declare var VanillaTilt;
@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss'],
})
export class HerosectionComponent implements OnInit {
  isXSmall: boolean = false;
  isSmall: boolean = false;
  isMedium: boolean = false;
  isLarge: boolean = false;
  @Output() myevent = new EventEmitter();
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });

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
          this.isXSmall = true;
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.small)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------s');
          this.isSmall = true;
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.medium)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------md');
          this.isMedium = true;
        }
        if (
          this.layoutService.isBreakpointActive(CustomBreakpointNames.large)
        ) {
          // Do something here for extraSmall devices
          console.log('-------------l');
          this.isLarge = true;
        }
      });
  }

  scrollToComponent(str: string) {
    console.log(str);
    this.myevent.emit(str);
  }
}
