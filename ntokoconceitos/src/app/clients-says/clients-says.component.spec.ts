import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSaysComponent } from './clients-says.component';

describe('ClientsSaysComponent', () => {
  let component: ClientsSaysComponent;
  let fixture: ComponentFixture<ClientsSaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsSaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
