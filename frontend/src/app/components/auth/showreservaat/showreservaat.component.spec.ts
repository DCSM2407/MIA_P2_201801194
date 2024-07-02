import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreservaatComponent } from './showreservaat.component';

describe('ShowreservaatComponent', () => {
  let component: ShowreservaatComponent;
  let fixture: ComponentFixture<ShowreservaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowreservaatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowreservaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
