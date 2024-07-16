import { Router } from "express";
import { checkForTestUser } from "../middleware/authMiddleware.js";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route("/").get(getAllJobs).post(checkForTestUser, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(getJob)
  .patch(checkForTestUser, updateJob)
  .delete(checkForTestUser, deleteJob);

export default router;
