import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-user-registerations',
  templateUrl: './new-user-registerations.component.html',
  styleUrls: ['./new-user-registerations.component.scss']
})
export class NewUserRegisterationsComponent {

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
    this.tableDataArray = this.cards['new_users'];
    // console.log(this.topCardsArray)
  }
}
