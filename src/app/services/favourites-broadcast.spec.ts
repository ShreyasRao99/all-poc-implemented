import { TestBed } from '@angular/core/testing';
import { FavouritesBroadcast } from './favourites-broadcast';

describe('FavouritesBroadcast', () => {
  let service: FavouritesBroadcast;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesBroadcast);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
