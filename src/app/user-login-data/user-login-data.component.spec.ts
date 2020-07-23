import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginDataComponent } from './user-login-data.component';

describe('UserLoginDataComponent', () => {
  let component: UserLoginDataComponent;
  let fixture: ComponentFixture<UserLoginDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
