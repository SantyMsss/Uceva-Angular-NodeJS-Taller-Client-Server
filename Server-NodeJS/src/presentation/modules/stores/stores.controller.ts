import { Request, Response } from "express";
import { StoresService } from "./stores.service";

/**
 * Controlador de tiendas.
 */
export class StoresController {

  private readonly storesService = new StoresService();

  getAllStores = (req: Request, res: Response): void => {
    this.storesService
      .getAllStores()
      .then((data) => {
        res.status(200).json(data);
      });
  };

  getStoreById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.storesService
      .getStoreById(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  createStore = (req: Request, res: Response): void => {
    const body = req.body;
    this.storesService
      .createStore(body)
      .then((data) => {
        res.status(201).json(data);
      });
  };

  updateStore = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    const body = req.body;
    this.storesService
      .updateStore(id, body)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  deleteStore = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.storesService
      .deleteStore(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };
}