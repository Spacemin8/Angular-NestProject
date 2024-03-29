import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppageComponent } from './signuppage.component';

describe('SignuppageComponent', () => {
  let component: SignuppageComponent;
  let fixture: ComponentFixture<SignuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignuppageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
