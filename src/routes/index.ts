import express from 'express';
import cors from "cors";
import { OK_ORIGINS } from "../variables";
export const router = express.Router();

import usersControllers from "../controllers/usersControllers";
import adviceControllers from "../controllers/adviceControllers";
import diningControllers from "../controllers/diningControllers";
import activitiesControllers from "../controllers/activitiesControllers";
import planControllers from "../controllers/itinerariesControllers";

/**
 * 
 * Whitelist is stored as a JSON string in env. 
 * 
 * Here we parse it into an object and add to our CORS exceptions. 
 * @todo comment this properly.
 */

const whitelist = (OK_ORIGINS !== false) && Object.keys(OK_ORIGINS)?.map((o:string) => OK_ORIGINS[o]);

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    // origin: '*',
    origin: (origin, callback) => {
        if (whitelist !== false && whitelist.indexOf(origin) > -1) {
            callback(null, true)        
        } else {
            callback(new Error('Not allowed by CORS'))
        }
      },
    preflightContinue: false,
  };

  router.use(cors(options));


// This is a test route!!
// router.get('/test', async (req, res) => {
//   res.json({message: 'pass!'})
// });

/**
 * Routes for product users.
 */
router.get("/user/getallusers", usersControllers.getAllUsers);
router.post("/user/addsingleuser", usersControllers.createUser);
router.put("/user/updatesingleuser", usersControllers.updateUser);
router.delete("/user/removesingleuser", usersControllers.deleteUser);

/**
 * Routes for advice.
 */
router.get("/advice/getalladvice", adviceControllers.getAdvice);
// router.post("/advice/addadvice", adviceControllers.createAdvice);
// router.put("/advice/updateadvice/:id", adviceControllers.updateAdvice);
// router.delete("/advice/removeadvice/:id", adviceControllers.deleteAdvice);

/**
 * Routes for dining.
 */
router.get("/dining/getallvenues", diningControllers.getDiners);
// router.post("/dining/addvenue", diningControllers.createDiner);
// router.put("/dining/updatevenuedetail/:id", diningControllers.updateDiner);
// router.delete("/dining/removevenue/:id", diningControllers.deleteDiner);

/**
 * Routes for activities.
 */
router.get("/activities/getallvenues", activitiesControllers.getActivities);
// router.post("/activities/addvenue", activitiesControllers.createActivity);
// router.put("/activities/updatevenuedetail/:id", activitiesControllers.updateActivity);
// router.delete("/activities/removevenue/:id", activitiesControllers.deleteActivity);

/**
 * Routes for itineraries.
 */
router.get("/plan/getallitineraries", planControllers.getPlans);
// router.post("/plan/additinerary", planControllers.createPlan);
// router.put("/plan/updatitinerary/:id", planControllers.updatePlan);
// router.delete("/plan/removeitinerary/:id", planControllers.deletePlan);


export default router;