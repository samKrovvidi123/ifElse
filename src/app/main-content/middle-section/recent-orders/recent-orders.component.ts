import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  cards: any;
  tableDataArray: any;

  constructor(
    public apiService: ApiService,
    private datePipe: DatePipe
  ) {

  }
  ngOnInit() {
    this.apiService.get().subscribe((res) => {
      this.cards = res;
      console.log(this.cards);
      this.tableData();
    },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  tableData() {
    this.tableDataArray = this.cards['recent_orders'].map((i: any) => {
      let dateObject = new Date(i.delivery_date);
      i.delivery_date = this.datePipe.transform(dateObject, "dd MMM yyyy");
      return i;
    });
    // console.log(this.topCardsArray)
  }

}
