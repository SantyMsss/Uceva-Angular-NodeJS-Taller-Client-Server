import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from './orders.service';
import { environment } from '../../../environments/environment';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;
  const baseUrl = `${environment.baseUrl}/orders`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllOrders() should return an array via GET', () => {
    const dummyOrders = [{ id: 1, userId: 2, totalAmount: 100, status: 'pending', orderDate: '2023-11-20' }];
    service.getAllOrders().subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(dummyOrders);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOrders);
  });

  it('getOrderById() should return one item via GET', () => {
    const dummyOrder = { id: 1, userId: 2, totalAmount: 100, status: 'pending', orderDate: '2023-11-20' };
    service.getOrderById('1').subscribe(s => {
      expect(s).toEqual(dummyOrder);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOrder);
  });

  it('createOrder() should send POST request', () => {
    const dummyOrder = { id: 1, userId: 2, totalAmount: 100, status: 'pending', orderDate: '2023-11-20' };
    service.createOrder({ totalAmount: 100 }).subscribe(o => {
      expect(o.totalAmount).toBe(100);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(dummyOrder);
  });

  it('updateOrder() should send PUT request', () => {
    const dummyOrder = { id: 1, userId: 2, totalAmount: 500, status: 'pending', orderDate: '2023-11-20' };
    service.updateOrder('1', { totalAmount: 500 }).subscribe(o => {
      expect(o.totalAmount).toBe(500);
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyOrder);
  });

  it('deleteOrder() should send DELETE request', () => {
    service.deleteOrder('1').subscribe(res => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${baseUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
