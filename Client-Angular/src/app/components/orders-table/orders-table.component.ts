import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente de tabla de pedidos.
 *
 * Muestra la información de pedidos incluyendo montos y estados visuales.
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class OrdersTableComponent {
  /**
   * Arreglo de pedidos a renderizar.
   */
  @Input() orders!: Order[];

  /**
   * Mapeo de estados de orden a colores del badge.
   */
  statusMap: Record<string, BadgeType> = {
    pending: 'warning',
    completed: 'success',
    cancelled: 'danger',
  };
}
