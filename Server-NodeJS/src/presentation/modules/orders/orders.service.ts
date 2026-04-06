import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación y gestión de pedidos.
 */
export class OrdersService {

  /**
   * Obtiene un listado de pedidos generados dinámicamente.
   */
  public async getAllOrders(): Promise<Order[]> {
    const count = faker.number.int({ min: 10, max: 20 });
    const orders: Order[] = [];
    for (let i = 0; i < count; i++) {
        orders.push(this.generateOrder(i + 1));
    }
    return orders;
  }

  /**
   * Obtiene un pedido por su ID.
   */
  public async getOrderById(id: number): Promise<Order> {
    return this.generateOrder(id);
  }

  /**
   * Crea un nuevo pedido (Simulación).
   */
  public async createOrder(data: Partial<Order>): Promise<Order> {
    const newOrder = this.generateOrder(faker.number.int({ min: 100, max: 999 }));
    return { ...newOrder, ...data };
  }

  /**
   * Actualiza un pedido existente (Simulación).
   */
  public async updateOrder(id: number, data: Partial<Order>): Promise<Order> {
    const order = this.generateOrder(id);
    return { ...order, ...data };
  }

  /**
   * Elimina un pedido por su ID (Simulación).
   */
  public async deleteOrder(id: number): Promise<{ message: string }> {
    return { message: `El pedido con ID ${id} fue eliminado exitosamente` };
  }

  /**
   * Helper para generar el mock de un pedido.
   */
  private generateOrder(id: number): Order {
    const statuses: OrderStatus[] = ['pending', 'completed', 'cancelled'];
    return {
      id,
      userId: faker.number.int({ min: 1, max: 100 }),
      totalAmount: parseFloat(faker.commerce.price({ min: 5000, max: 200000 })),
      status: faker.helpers.arrayElement(statuses),
      orderDate: faker.date.recent(),
    };
  }
}