import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMachineComponent } from './quote-machine.component';

describe('QuoteMachineComponent', () => {
  let component: QuoteMachineComponent;
  let fixture: ComponentFixture<QuoteMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
