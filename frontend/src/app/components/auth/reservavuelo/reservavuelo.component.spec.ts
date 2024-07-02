import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservavueloComponent } from './reservavuelo.component';

describe('ReservavueloComponent', () => {
  let component: ReservavueloComponent;
  let fixture: ComponentFixture<ReservavueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservavueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservavueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
