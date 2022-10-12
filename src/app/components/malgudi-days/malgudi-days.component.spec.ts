import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MALGUDIDAYSComponent } from './malgudi-days.component';

describe('MALGUDIDAYSComponent', () => {
  let component: MALGUDIDAYSComponent;
  let fixture: ComponentFixture<MALGUDIDAYSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MALGUDIDAYSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MALGUDIDAYSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
