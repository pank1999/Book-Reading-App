import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNTOUCHABLEComponent } from './untouchable.component';

describe('UNTOUCHABLEComponent', () => {
  let component: UNTOUCHABLEComponent;
  let fixture: ComponentFixture<UNTOUCHABLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNTOUCHABLEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNTOUCHABLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
