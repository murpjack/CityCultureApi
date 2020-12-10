import activityModel from "../models/activities";
import { 
  // notValid,
  notReturned, 
  notFound, 
  // notUpdated, 
  // idAlreadyExists
 } from "./setupControllers";

// const createActivity = (req, res) => {
//   const body = req.body;
//   console.log("res", res);

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a activity",
//     });
//   }

//   const activity = new activityModel(body);
//   if (!activity) {
//     // TODO: handle error response
//     return res.status(400).json({ success: false, error: "err" });
//   }

//   activity
//     .save()
//     .then(() =>
//       res.status(201).json({
//         success: true,
//         id: activity._id,
//         message: "Activity created!",
//       })
//     )
//     .catch((error) =>
//       res.status(400).json({
//         error,
//         message: "Activity not created!",
//       })
//     );
// };

// const updateActivity = async (req, res) => {
//   const body = req.body;

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a body to update",
//     });
//   }

//   Activity.findOne({ _id: req.params.id }, (err, activity) => {
//     if (err) {
//       return res.status(404).json({
//         err,
//         message: "Activity not found!",
//       });
//     }
//     activity._id = body._id;
//     activity.name = body.name;
//     activity.description = body.description;
//     activity.telephone = body.telephone;
//     activity.priceRating = body.priceRating;
//     activity.coords = body.coords;

//     activity
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: activity._id,
//           message: "Activity updated!",
//         });
//       })
//       .catch((error) => {
//         return res.status(404).json({
//           error,
//           message: "Activity not updated!",
//         });
//       });
//   });
// };

// const deleteActivity = async (req, res) => {
//   await activityModel.findOneAndDelete({ _id: req.params.id }, (err, activity) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!activity) {
//       return res
//         .status(404)
//         .json({ success: false, error: `Activity not found` });
//     }

//     return res.status(200).json({ success: true, data: activity });
//   }).catch((err) => console.log(err));
// };

export const getActivities = async (req: any, res: any) => {
  await activityModel.find({}, (error: any, data: any) => {
    if (error || !data.length) { return notFound(error) }

    return res.status(200).json({ success: true, data });

  }).catch(notReturned);
};

export default {
  // createActivity,
  // updateActivity,
  // deleteActivity,
  getActivities
};
