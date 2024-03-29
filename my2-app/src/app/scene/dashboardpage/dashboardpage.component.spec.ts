import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpageComponent } from './dashboardpage.component';

describe('DashboardpageComponent', () => {
  let component: DashboardpageComponent;
  let fixture: ComponentFixture<DashboardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
