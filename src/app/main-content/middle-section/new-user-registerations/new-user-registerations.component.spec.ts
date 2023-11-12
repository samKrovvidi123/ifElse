import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegisterationsComponent } from './new-user-registerations.component';

describe('NewUserRegisterationsComponent', () => {
  let component: NewUserRegisterationsComponent;
  let fixture: ComponentFixture<NewUserRegisterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserRegisterationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserRegisterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
