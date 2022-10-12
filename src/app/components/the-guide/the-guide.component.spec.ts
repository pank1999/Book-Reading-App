import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGUIDEComponent } from './the-guide.component';

describe('TheGUIDEComponent', () => {
  let component: TheGUIDEComponent;
  let fixture: ComponentFixture<TheGUIDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGUIDEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheGUIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
