import { faker } from '@faker-js/faker';
import { Store } from '../../../domain/interfaces/store.interface';

/**
 * Servicio encargado de la generación y gestión de tiendas.
 */
export class StoresService {

  /**
   * Obtiene un listado de tiendas generadas dinámicamente.
   */
  public async getAllStores(): Promise<Store[]> {
    const count = faker.number.int({ min: 10, max: 20 });
    const stores: Store[] = [];
    for (let i = 0; i < count; i++) {
        stores.push(this.generateStore(i + 1));
    }
    return stores;
  }

  /**
   * Obtiene una tienda por su ID.
   */
  public async getStoreById(id: number): Promise<Store> {
    return this.generateStore(id);
  }

  /**
   * Crea una nueva tienda (Simulación).
   */
  public async createStore(data: Partial<Store>): Promise<Store> {
    const newStore = this.generateStore(faker.number.int({ min: 100, max: 999 }));
    return { ...newStore, ...data };
  }

  /**
   * Actualiza una tienda existente (Simulación).
   */
  public async updateStore(id: number, data: Partial<Store>): Promise<Store> {
    const store = this.generateStore(id);
    return { ...store, ...data };
  }

  /**
   * Elimina una tienda por su ID (Simulación).
   */
  public async deleteStore(id: number): Promise<{ message: string }> {
    return { message: `La tienda con ID ${id} fue eliminada exitosamente` };
  }

  /**
   * Helper para generar el mock de una tienda.
   */
  private generateStore(id: number): Store {
    return {
      id,
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
    };
  }
}