import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;
  const baseUrl = `api/categories`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService]
    });
    service = TestBed.inject(CategoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCategories() should return an array via GET', () => {
    const dummyCats = [{ id: 1, name: 'Electro', description: 'desc' }];
    service.getAllCategories().subscribe(cats => {
      expect(cats.length).toBe(1);
      expect(cats).toEqual(dummyCats);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCats);
  });

  it('getCategoryById() should return one item via GET', () => {
    const dummyCat = { id: 1, name: 'Electro', description: 'desc' };
    service.getCategoryById('1').subscribe(cat => {
      expect(cat).toEqual(dummyCat);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCat);
  });

  it('createCategory() should send POST request', () => {
    const dummyCat = { id: 1, name: 'Electro', description: 'desc' };
    service.createCategory({ name: 'Electro' }).subscribe(cat => {
      expect(cat.name).toBe('Electro');
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(dummyCat);
  });

  it('updateCategory() should send PUT request', () => {
    const dummyCat = { id: 1, name: 'Electro Mod', description: 'desc' };
    service.updateCategory('1', { name: 'Electro Mod' }).subscribe(cat => {
      expect(cat.name).toBe('Electro Mod');
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyCat);
  });

  it('deleteCategory() should send DELETE request', () => {
    service.deleteCategory('1').subscribe(res => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
