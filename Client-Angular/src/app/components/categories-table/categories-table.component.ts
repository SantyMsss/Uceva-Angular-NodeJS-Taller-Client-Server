import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías.
 *
 * Muestra el listado completo de categorías en forma de tabla.
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [CommonModule],
})
export class CategoriesTableComponent {
  /**
   * Arreglo de categorías a renderizar.
   */
  @Input() categories!: Category[];
}
