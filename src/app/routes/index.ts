import { UserRoutes } from "./../modules/student/user/user.route";
import { Router } from "express";
import { StudentRoutes } from "../modules/student/student/student.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
