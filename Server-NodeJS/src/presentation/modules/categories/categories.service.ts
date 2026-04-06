import { faker } from '@faker-js/faker';
import { Category } from '../../../domain/interfaces/category.interface';

/**
 * Servicio encargado de la generación y gestión de categorías.
 */
export class CategoriesService {

  /**
   * Obtiene un listado de categorías generadas dinámicamente.
   */
  public async getAllCategories(): Promise<Category[]> {
    const count = faker.number.int({ min: 10, max: 20 });
    const categories: Category[] = [];
    for (let i = 0; i < count; i++) {
        categories.push(this.generateCategory(i + 1));
    }
    return categories;
  }

  /**
   * Obtiene una categoría por su ID.
   */
  public async getCategoryById(id: number): Promise<Category> {
    return this.generateCategory(id);
  }

  /**
   * Crea una nueva categoría (Simulación).
   */
  public async createCategory(data: Partial<Category>): Promise<Category> {
    const newCategory = this.generateCategory(faker.number.int({ min: 100, max: 999 }));
    return { ...newCategory, ...data };
  }

  /**
   * Actualiza una categoría existente (Simulación).
   */
  public async updateCategory(id: number, data: Partial<Category>): Promise<Category> {
    const category = this.generateCategory(id);
    return { ...category, ...data };
  }

  /**
   * Elimina una categoría por su ID (Simulación).
   */
  public async deleteCategory(id: number): Promise<{ message: string }> {
    return { message: `La categoría con ID ${id} fue eliminada exitosamente` };
  }

  /**
   * Helper para generar el mock de una categoría.
   */
  private generateCategory(id: number): Category {
    return {
      id,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
    };
  }
}