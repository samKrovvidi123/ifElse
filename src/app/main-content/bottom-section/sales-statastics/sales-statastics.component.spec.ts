import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatasticsComponent } from './sales-statastics.component';

describe('SalesStatasticsComponent', () => {
  let component: SalesStatasticsComponent;
  let fixture: ComponentFixture<SalesStatasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesStatasticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesStatasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
