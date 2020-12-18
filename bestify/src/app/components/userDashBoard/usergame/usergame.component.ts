import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/test/http.service';

@Component({
  selector: 'app-usergame',
  templateUrl: './usergame.component.html',
  styleUrls: ['./usergame.component.scss']
})
export class UsergameComponent implements OnInit {

  gamescore:any[]=[];
  constructor(private userServ: HttpService) {
    this.userServ.getGameScore().subscribe((data)=>{
      this.gamescore=data;
    })
   }

   

   displayedColumns: string[] = [ 'UserId','GameId', 'Score'];
  //  dataSource = this.gamescore;
  
  ngOnInit(): void {
  }

}
