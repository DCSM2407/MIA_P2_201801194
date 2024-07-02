import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvhistorialcComponent } from './showvhistorialc.component';

describe('ShowvhistorialcComponent', () => {
  let component: ShowvhistorialcComponent;
  let fixture: ComponentFixture<ShowvhistorialcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowvhistorialcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowvhistorialcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
