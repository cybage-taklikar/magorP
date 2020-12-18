import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { CheckloginComponent } from '../checklogin/checklogin.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomBreakpointNames } from 'src/app/service/breakpoint/breakpoint.service';
import { LayoutService } from 'src/app/service/breakpoint/layout.service';
@Component({
  selector: 'app-gamesection',
  templateUrl: './gamesection.component.html',
  styleUrls: ['./gamesection.component.scss'],
})
export class GamesectionComponent implements OnInit {
  isXSmall: boolean = false;
  isSmall: boolean = false;
  isMedium: boolean = false;
  isLarge: boolean = false;
  @Output() isgamestart = new EventEmitter<boolean>();
  gamestarted: boolean = false;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    public dialog: MatDialog,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
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

  ngOnDestroy() {
    // if (this.dataSource) {
    //   this.dataSource.disconnect();
    // }
  }
  startgame(path) {
    if (sessionStorage.getItem('user')) {
      this.gamestarted = true;
      this.isgamestart.emit(this.gamestarted);
      console.log(this.gamestarted);
      this.router.navigate([`${path}`]);
    } else {
      this.openLoginDialog();
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(CheckloginComponent, {
      //  panelClass:'login-dialog-container'
      width: '200px',
    });
  }
}
