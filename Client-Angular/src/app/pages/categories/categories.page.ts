import { Component, inject, OnInit } from '@angular/core';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente página para listado de categorías.
 *
 * Muestra el listado consultando el servicio CategoriesService.
 */
@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent]
})
export class CategoriesPage implements OnInit {
  /** 
   * Array que almacena las categorías cargadas desde la API.
   */
  categories: Category[] = [];
  
  /** 
   * Estado de la petición HTTP ('init', 'loading', 'success', 'error').
   */
  state: State = 'init';

  /** 
   * Servicio inyectado para gestionar la data de categorías.
   */
  private categoriesService = inject(CategoriesService);

  /**
   * Método del ciclo de vida de Angular.
   * Se encarga de solicitar todas las categorías al inicializar la página.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
        this.state = 'success';
      },
      error: (err) => {
        console.error(err);
        this.state = 'error';
      }
    });
  }
}
