import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmStatComponent } from './crm-stat.component';

describe('CrmStatComponent', () => {
  let component: CrmStatComponent;
  let fixture: ComponentFixture<CrmStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
