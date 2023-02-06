import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdukasiComponent } from './edukasi.component';

describe('EdukasiComponent', () => {
  let component: EdukasiComponent;
  let fixture: ComponentFixture<EdukasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdukasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdukasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
