import { Router } from "express";
import { CategoriesController } from "./categories.controller";

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController();

    /**
     * @openapi
     * /api/categories:
     *   get:
     *     summary: Obtener todas las categorías
     *     description: Retorna una lista generada dinámicamente de entre 10 y 20 categorías
     *     tags:
     *       - Categories
     *     responses:
     *       200:
     *         description: Lista de categorías
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     *   post:
     *     summary: Crear una categoría
     *     description: Simula la creación de una nueva categoría
     *     tags:
     *       - Categories
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Category'
     *     responses:
     *       201:
     *         description: Categoría creada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Category'
     */
    router.get("/", controller.getAllCategories);
    router.post("/", controller.createCategory);

    /**
     * @openapi
     * /api/categories/{id}:
     *   get:
     *     summary: Obtener categoría por ID
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID de la categoría
     *     responses:
     *       200:
     *         description: Detalles de la categoría
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Category'
     *   put:
     *     summary: Actualizar una categoría
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Category'
     *     responses:
     *       200:
     *         description: Categoría actualizada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Category'
     *   delete:
     *     summary: Eliminar una categoría
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Mensaje de confirmación
     */
    router.get("/:id", controller.getCategoryById);
    router.put("/:id", controller.updateCategory);
    router.delete("/:id", controller.deleteCategory);

    return router;
  }
}