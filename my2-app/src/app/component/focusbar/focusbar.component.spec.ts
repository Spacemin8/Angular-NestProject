import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusbarComponent } from './focusbar.component';

describe('FocusbarComponent', () => {
  let component: FocusbarComponent;
  let fixture: ComponentFixture<FocusbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocusbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
