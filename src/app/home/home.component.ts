import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  inTrend: 'day' | 'week' = 'day';
  inPopular: 'streaming' | 'on-tv' | 'for-rent' | 'in-theatres' = 'streaming';

  trends: any[] = [];
  populars: any[] = [];
  onTvs: any[] = [];

  template : boolean = true;

  movieID: number[] = [];



  constructor(private movieService: MoviesService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTrending();
    this.getPopular();
    this.getTv();
  }

  getTrending() {
    this.movieService.getTrending(this.inTrend)
      .subscribe(res => {
        this.trends = res.results;
        this.movieID = res.results.id;
        console.log(this.trends, this.movieID)

      })
  }
  getPopular () {
    this.movieService.getPopular()
      .subscribe(res => {
        this.populars = res.results;
        console.log(this.populars)
      })
  }
  getTv () {
    this.movieService.getTv().
    subscribe(res => {
      this.onTvs = res.results;
      console.log(res)
    })
  }
  changeTrend(type: 'day' | 'week') {
    this.inTrend = type;
    this.getTrending();
  }
  changePopular(type: 'streaming' | 'on-tv' | 'for-rent' | 'in-theatres' = 'streaming') {
    this.inPopular = type;
    if (this.inPopular === "streaming"){
      this.getPopular();
    }else if (this.inPopular === "on-tv"){
      this.getTv();
    }
    this.template=!this.template;
  }

}
