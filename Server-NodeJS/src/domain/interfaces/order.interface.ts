export type OrderStatus = 'pending' | 'completed' | 'cancelled';

/**
 * Interfaz que representa un pedido/orden.
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** ID del usuario que realizó el pedido */
  userId: number;

  /** Importe total del pedido */
  totalAmount: number;

  /** Estado actual del pedido */
  status: OrderStatus;

  /** Fecha de creación del pedido */
  orderDate: Date;
}
