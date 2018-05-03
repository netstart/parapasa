import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardGithubComponent } from './issue-card-github.component';

describe('IssueCardGithubComponent', () => {
  let component: IssueCardGithubComponent;
  let fixture: ComponentFixture<IssueCardGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCardGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
