import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacancyComponent } from './list-vacancy.component';

describe('ListVacancyComponent', () => {
  let component: ListVacancyComponent;
  let fixture: ComponentFixture<ListVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
