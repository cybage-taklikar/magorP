import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @ViewChild('canvas') public canvas: ElementRef;
  subscription: any;
  showLoader = true;
  score: number = 0;
  subs2: any;
  constructor(
    private appService: AppService,
    private gameService: GameService,
    private _location: Location
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.appService.createPlayGround(canvasEl);
    this.subscription = this.appService
      .getImageLoadEmitter()
      .subscribe((item) => {
        this.showLoader = false;
        this.gameService.startGameLoop();
      });

    this.subs2 = this.gameService.getCount().subscribe((res) => {
      this.score = res;
      console.log(res);
    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.appService.movePlayer(event, 'keydown');
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(
    event: KeyboardEvent
  ) {
    this.appService.movePlayer(event, 'keyup');
  }

  backToHome() {
    this._location.back();
    setTimeout(() => window.location.reload(), 500);
  }
}
