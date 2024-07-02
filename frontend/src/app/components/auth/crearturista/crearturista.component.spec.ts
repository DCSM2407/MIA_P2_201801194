import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearturistaComponent } from './crearturista.component';

describe('CrearturistaComponent', () => {
  let component: CrearturistaComponent;
  let fixture: ComponentFixture<CrearturistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearturistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearturistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
