import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusfooterComponent } from './focusfooter.component';

describe('FocusfooterComponent', () => {
  let component: FocusfooterComponent;
  let fixture: ComponentFixture<FocusfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocusfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
