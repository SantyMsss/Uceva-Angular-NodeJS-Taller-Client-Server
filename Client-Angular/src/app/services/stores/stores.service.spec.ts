import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoresService } from './stores.service';

describe('StoresService', () => {
  let service: StoresService;
  let httpMock: HttpTestingController;
  const baseUrl = `api/stores`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoresService]
    });
    service = TestBed.inject(StoresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllStores() should return an array via GET', () => {
    const dummyStores = [{ id: 1, name: 'Sede 1', address: 'A', city: 'B' }];
    service.getAllStores().subscribe(stores => {
      expect(stores.length).toBe(1);
      expect(stores).toEqual(dummyStores);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyStores);
  });

  it('getStoreById() should return one item via GET', () => {
    const dummyStore = { id: 1, name: 'Sede 1', address: 'A', city: 'B' };
    service.getStoreById('1').subscribe(store => {
      expect(store).toEqual(dummyStore);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyStore);
  });

  it('createStore() should send POST request', () => {
    const dummyStore = { id: 1, name: 'Sede 1', address: 'A', city: 'B' };
    service.createStore({ name: 'Sede 1' }).subscribe(s => {
      expect(s.name).toBe('Sede 1');
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(dummyStore);
  });

  it('updateStore() should send PUT request', () => {
    const dummyStore = { id: 1, name: 'Sede Mod', address: 'A', city: 'B' };
    service.updateStore('1', { name: 'Sede Mod' }).subscribe(s => {
      expect(s.name).toBe('Sede Mod');
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyStore);
  });

  it('deleteStore() should send DELETE request', () => {
    service.deleteStore('1').subscribe(res => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
