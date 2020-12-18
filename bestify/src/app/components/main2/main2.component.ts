import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
// import { MatPaginator } from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
})
export class Main2Component implements OnInit, OnDestroy {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // obs: Observable<any>;

  // @ViewChild(MatPaginator) paginator: any;
  // obs: any;
  // dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    // if (this.dataSource) {
    //   this.dataSource.disconnect();
    // }
  }
  startpong() {
    this.router.navigate(['/pong']);
  }
  startcar() {
    this.router.navigate(['/car']);
  }
  startrps() {
    this.router.navigate(['/rps']);
  }
}
