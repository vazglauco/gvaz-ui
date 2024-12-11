import { TestBed } from '@angular/core/testing';

import { NgxGvazUiService } from './ngx-gvaz-ui.service';

describe('NgxGvazUiService', () => {
  let service: NgxGvazUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGvazUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
