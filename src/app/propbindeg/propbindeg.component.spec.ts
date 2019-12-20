import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropbindegComponent } from './propbindeg.component';

describe('PropbindegComponent', () => {
  let component: PropbindegComponent;
  let fixture: ComponentFixture<PropbindegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropbindegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropbindegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
