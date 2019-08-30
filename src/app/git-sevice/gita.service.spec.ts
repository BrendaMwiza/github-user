import { TestBed } from '@angular/core/testing';

import { GitaService } from './gita.service';

describe('GitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitaService = TestBed.get(GitaService);
    expect(service).toBeTruthy();
  });
});
