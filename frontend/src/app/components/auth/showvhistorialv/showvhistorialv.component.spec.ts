import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvhistorialvComponent } from './showvhistorialv.component';

describe('ShowvhistorialvComponent', () => {
  let component: ShowvhistorialvComponent;
  let fixture: ComponentFixture<ShowvhistorialvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowvhistorialvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowvhistorialvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
