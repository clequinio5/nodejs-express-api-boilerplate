import express from 'express'
import adherentRoute from './adherents.route'

const router = express.Router();

const defaultRoutes = [
    {
        path: '/adherents',
        route: adherentRoute,
    }
];

for (const route of defaultRoutes) {
    router.use(route.path, route.route);
}

export default router