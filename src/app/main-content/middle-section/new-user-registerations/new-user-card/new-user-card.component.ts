import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-user-card',
  templateUrl: './new-user-card.component.html',
  styleUrls: ['./new-user-card.component.scss']
})
export class NewUserCardComponent {

  @Input()
  imgSrc: string = ''
  @Input()
  userName: string = ''
  @Input()
  userCountry: string = ''
  @Input()
  statusCount: number = 0;
}
