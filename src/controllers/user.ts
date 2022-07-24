import { Request, Response, Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import IContoller from '../Types/IController';

export default class UserController implements IContoller {
  public readonly path = '/api/users';

  public readonly router = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, expressAsyncHandler(UserController.getUsers));
  }

  private static async getUsers(req: Request, res: Response) {
    res.status(200).send('OK');
  }
}
