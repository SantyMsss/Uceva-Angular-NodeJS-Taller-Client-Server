import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";

/**
 * Controlador de categorías.
 */
export class CategoriesController {

  private readonly categoriesService = new CategoriesService();

  getAllCategories = (req: Request, res: Response): void => {
    this.categoriesService
      .getAllCategories()
      .then((data) => {
        res.status(200).json(data);
      });
  };

  getCategoryById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.categoriesService
      .getCategoryById(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  createCategory = (req: Request, res: Response): void => {
    const body = req.body;
    this.categoriesService
      .createCategory(body)
      .then((data) => {
        res.status(201).json(data);
      });
  };

  updateCategory = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    const body = req.body;
    this.categoriesService
      .updateCategory(id, body)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  deleteCategory = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.categoriesService
      .deleteCategory(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };
}