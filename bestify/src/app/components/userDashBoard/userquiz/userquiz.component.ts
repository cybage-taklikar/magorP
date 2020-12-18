import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/test/http.service';

@Component({
  selector: 'app-userquiz',
  templateUrl: './userquiz.component.html',
  styleUrls: ['./userquiz.component.scss']
})
export class UserquizComponent implements OnInit {

  quizscore:any[]=[];
  constructor(private userServ: HttpService) {
    this.userServ.getQuizScore().subscribe((data)=>{
      this.quizscore=data;
    })
   }

   

   displayedColumns: string[] = ['quizid', 'userid', 'score'];
  //  dataSource = this.quizscore;

  ngOnInit(): void {
  }

}
