import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearvueloComponent } from './crearvuelo.component';

describe('CrearvueloComponent', () => {
  let component: CrearvueloComponent;
  let fixture: ComponentFixture<CrearvueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearvueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearvueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
