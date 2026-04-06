import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '../../interfaces/stores.interface';

/**
 * Componente de tabla de tiendas.
 *
 * Muestra el listado de tiendas disponibles en una tabla.
 */
@Component({
  selector: 'app-stores-table',
  templateUrl: './stores-table.component.html',
  imports: [CommonModule],
})
export class StoresTableComponent {
  /**
   * Arreglo de tiendas a renderizar.
   */
  @Input() stores!: Store[];
}
