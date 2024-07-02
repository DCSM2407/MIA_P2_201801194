import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearadminComponent } from './crearadmin.component';

describe('CrearadminComponent', () => {
  let component: CrearadminComponent;
  let fixture: ComponentFixture<CrearadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
