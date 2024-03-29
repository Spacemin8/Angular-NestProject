import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusComponent } from './focus.component';

describe('FocusComponent', () => {
  let component: FocusComponent;
  let fixture: ComponentFixture<FocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
