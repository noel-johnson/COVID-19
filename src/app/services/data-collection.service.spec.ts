import { TestBed } from '@angular/core/testing';

import { DataCollectionService } from './data-collection.service';

describe('DataCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCollectionService = TestBed.get(DataCollectionService);
    expect(service).toBeTruthy();
  });
});
