/**
 * Tipo que representa los estados validos de una orden.
 */
export type OrderStatus = 'pending' | 'completed' | 'cancelled';

/**
 * Interfaz que representa un pedido/orden en el sistema.
 * 
 * Contiene la información necesaria sobre un pedido.
 */
export interface Order {
  /** Identificador único de la orden. */
  id: number;
  /** Identificador del usuario que generó el pedido. */
  userId: number;
  /** Monto total facturado. */
  totalAmount: number;
  /** Estado en que se encuentra el pedido. */
  status: OrderStatus;
  /** Fecha en la que fue emitido el pedido. */
  orderDate: string;
}
