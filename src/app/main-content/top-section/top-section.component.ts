import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent {
  cards: any;
  topCardsArray: any;

  constructor(
    public apiService: ApiService,
    public http: HttpClient
  ) {

  }
  ngOnInit() {
    this.apiService.get().subscribe((res) => {
      this.cards = res;
      console.log(this.cards);
      this.topCards();
    },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  icons_array = [
    {
      "icon1": '<i class="fa-solid fa-music" style="color: #ededed;"></i>',
      "icon2": '<i class="fa-solid fa-chart-pie" style="color: #ededed;"></i>',
      "icon3": '<i class="fa-solid fa-download" style="color: #ededed;"></i>',
      "icon4": '<i class="fa-solid fa-rotate" style="color: #ededed;"></i>'
    },
  ]

  topCards() {
    this.topCardsArray = this.cards['top_cards'];
    // this.topCardsArray = this.cards['top_cards'] + this.icons_array;
    // console.log(this.topCardsArray)
  }
}
