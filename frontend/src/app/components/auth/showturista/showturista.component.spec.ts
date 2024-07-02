import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowturistaComponent } from './showturista.component';

describe('ShowturistaComponent', () => {
  let component: ShowturistaComponent;
  let fixture: ComponentFixture<ShowturistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowturistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowturistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
