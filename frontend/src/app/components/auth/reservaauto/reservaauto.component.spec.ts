import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaautoComponent } from './reservaauto.component';

describe('ReservaautoComponent', () => {
  let component: ReservaautoComponent;
  let fixture: ComponentFixture<ReservaautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaautoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
