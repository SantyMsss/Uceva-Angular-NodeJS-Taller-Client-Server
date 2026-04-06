import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';

/**
 * Servicio encargado de la gestión de categorías.
 *
 * Proporciona métodos CRUD para interactuar con la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private httpClient = inject(HttpClient);

  /**
   * Obtiene un listado de categorías.
   * @returns Observable que emite un array de categorías.
   */
  public getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`api/categories`);
  }

  /**
   * Obtiene una categoría por su ID.
   * @param id Identificador de la categoría.
   * @returns Observable que emite una categoría.
   */
  public getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`api/categories/${id}`);
  }

  /**
   * Crea una nueva categoría.
   * @param data Objeto con la información de la categoría.
   * @returns Observable que emite la categoría creada.
   */
  public createCategory(data: Partial<Category>): Observable<Category> {
    return this.httpClient.post<Category>(`api/categories`, data);
  }

  /**
   * Actualiza una categoría existente.
   * @param id Identificador de la categoría.
   * @param data Nuevos datos para la categoría.
   * @returns Observable que emite la categoría actualizada.
   */
  public updateCategory(id: string, data: Partial<Category>): Observable<Category> {
    return this.httpClient.put<Category>(`api/categories/${id}`, data);
  }

  /**
   * Elimina una categoría por su ID.
   * @param id Identificador de la categoría.
   * @returns Observable que avisa la eliminación.
   */
  public deleteCategory(id: string): Observable<void> {
    return this.httpClient.delete<void>(`api/categories/${id}`);
  }
}
