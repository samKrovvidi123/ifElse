import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cards: any;
  topCardsArray: any;

  @Input()
  header: string = '';

  @Input()
  value: string = '';

  @Input()
  subHeader: string = '';

  @Input()
  icon:string = ''
  constructor(
    public apiService: ApiService,
    public http: HttpClient
  ) {

  }
  // ngOnInit() {
  //   this.apiService.get().subscribe((res) => {
  //     this.cards = res;
  //     console.log(this.cards);
  //     this.topCards();
  //   },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }

  // topCards() {
  //   this.topCardsArray = this.cards['top_cards'];
  //   console.log(this.topCardsArray)
  // }
}
