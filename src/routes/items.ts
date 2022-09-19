import { Router } from 'express';

// controllers
import { getItems } from '../controllers/items';

// Inicio constantes
const router: Router = Router();

/*
 * Items routes
 */

/*
 * Ruta obtener items
 */
router.get('/', getItems);

export default router;
