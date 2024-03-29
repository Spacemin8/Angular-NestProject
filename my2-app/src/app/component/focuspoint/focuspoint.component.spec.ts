import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocuspointComponent } from './focuspoint.component';

describe('FocuspointComponent', () => {
  let component: FocuspointComponent;
  let fixture: ComponentFixture<FocuspointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocuspointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocuspointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
