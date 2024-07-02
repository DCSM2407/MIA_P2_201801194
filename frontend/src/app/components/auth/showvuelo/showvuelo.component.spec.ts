import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvueloComponent } from './showvuelo.component';

describe('ShowvueloComponent', () => {
  let component: ShowvueloComponent;
  let fixture: ComponentFixture<ShowvueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowvueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowvueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
