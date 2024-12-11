import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGvazUiComponent } from './ngx-gvaz-ui.component';

describe('NgxGvazUiComponent', () => {
  let component: NgxGvazUiComponent;
  let fixture: ComponentFixture<NgxGvazUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGvazUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxGvazUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
