import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../interfaces/stores.interface';
import { environment } from '../../../environments/environment';

/**
 * Servicio encargado de la gestión de tiendas.
 *
 * Proporciona métodos CRUD para interactuar con la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class StoresService {

  private httpClient = inject(HttpClient);

  /**
   * Obtiene un listado de tiendas.
   * @returns Observable que emite un array de tiendas.
   */
  public getAllStores(): Observable<Store[]> {
    return this.httpClient.get<Store[]>(`${environment.baseUrl}/stores`);
  }

  /**
   * Obtiene una tienda por su ID.
   * @param id Identificador de la tienda.
   * @returns Observable que emite una tienda.
   */
  public getStoreById(id: string): Observable<Store> {
    return this.httpClient.get<Store>(`${environment.baseUrl}/stores/${id}`);
  }

  /**
   * Crea una nueva tienda.
   * @param data Objeto con la información de la tienda.
   * @returns Observable que emite la tienda creada.
   */
  public createStore(data: Partial<Store>): Observable<Store> {
    return this.httpClient.post<Store>(`${environment.baseUrl}/stores`, data);
  }

  /**
   * Actualiza una tienda existente.
   * @param id Identificador de la tienda.
   * @param data Nuevos datos para la tienda.
   * @returns Observable que emite la tienda actualizada.
   */
  public updateStore(id: string, data: Partial<Store>): Observable<Store> {
    return this.httpClient.put<Store>(`${environment.baseUrl}/stores/${id}`, data);
  }

  /**
   * Elimina una tienda por su ID.
   * @param id Identificador de la tienda.
   * @returns Observable que avisa la eliminación.
   */
  public deleteStore(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/stores/${id}`);
  }
}
