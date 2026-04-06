import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';

/**
 * Servicio encargado de la gestión de pedidos.
 *
 * Proporciona métodos CRUD para interactuar con la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private httpClient = inject(HttpClient);

  /**
   * Obtiene un listado de pedidos.
   * @returns Observable que emite un array de pedidos.
   */
  public getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`api/orders`);
  }

  /**
   * Obtiene una orden por su ID.
   * @param id Identificador de la orden.
   * @returns Observable que emite una orden.
   */
  public getOrderById(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`api/orders/${id}`);
  }

  /**
   * Crea un nuevo pedido.
   * @param data Objeto con la información de la orden.
   * @returns Observable que emite la orden creada.
   */
  public createOrder(data: Partial<Order>): Observable<Order> {
    return this.httpClient.post<Order>(`api/orders`, data);
  }

  /**
   * Actualiza una orden existente.
   * @param id Identificador de la orden.
   * @param data Nuevos datos para la orden.
   * @returns Observable que emite la orden actualizada.
   */
  public updateOrder(id: string, data: Partial<Order>): Observable<Order> {
    return this.httpClient.put<Order>(`api/orders/${id}`, data);
  }

  /**
   * Elimina una orden por su ID.
   * @param id Identificador de la orden.
   * @returns Observable que avisa la eliminación.
   */
  public deleteOrder(id: string): Observable<void> {
    return this.httpClient.delete<void>(`api/orders/${id}`);
  }
}
