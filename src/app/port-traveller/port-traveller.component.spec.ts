import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortTravellerComponent } from './port-traveller.component';

describe('PortTravellerComponent', () => {
  let component: PortTravellerComponent;
  let fixture: ComponentFixture<PortTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
