import dinerModel from "../models/dining";
import { 
  // notValid,
  notReturned, 
  notFound, 
  // notUpdated, 
  // idAlreadyExists
 } from "./setupControllers";

// export const createDiner = async (req: any, res: any) => {
//   const body = req.body;

//   if (!body) { return notValid(res) }

//   const diner = new Diner(body);
//   if (!diner) { return notValid(res) }

//   // Don't add any items with a duplicate id
//   const duplicates = await userModel
//     .find(query, (error: any, data: any) => {
//       if (error) { return res.status(400).json({ success: false, error }) }

//       if (data.length !== 0) { return idAlreadyExists(res) } 

//     })
//     .catch(notReturned);

//   if (duplicates.length === 0) { 
//     diner
//       .then((d) => ({ ...d, ["approvalStatus"]: "NOT_APPROVED" }))
//       .save()
//       .then(() =>
//         res.status(201).json({
//           success: true,
//           id: diner._id,
//           message: "Diner created!",
//         })
//       )
//       .catch(notUpdated);
//   }
// };

// export const updateDiner = async (req: any, res: any) => {
//   const body = req.body;
//   if (!body) { return notValid(res) }

//   Diner.findOne({ _id: req.params.id }, (error: any, diner: any) => {
//     if (error) { return notFound(error) }

//     diner._id = body._id;
//     diner.approvalStatus = "NOT_APPROVED";
//     diner.name = body.name;
//     diner.description = body.description;
//     diner.telephone = body.telephone;
//     diner.priceRating = body.priceRating;
//     diner.coords = body.coords;
//     diner.theme = body.theme;
//     diner.foodMenuUrl = body.foodMenuUrl;
//     diner.hasGlutenFreeOptions = body.hasGlutenFreeOptions;
//     diner.hasVeganOptions = body.hasVeganOptions;
//     diner.hasWheelchairAccess = body.hasWheelchairAccess;
//     diner.hasBabyChangingFacilities = body.hasBabyChangingFacilities;

//     diner
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: diner._id,
//           message: "Diner updated!",
//         });
//       })
//       .catch(notUpdated);
//   });
// };

// export const deleteDiner = async (req: any, res: any) => {
//   await Diner.findOneAndDelete({ _id: req.params.id }, (error: any, data: any) => {
//     if (error || !data) { return notFound(error) }

//     return res.status(200).json({ success: true, data });

//   }).catch(notReturned);
// };

export const getDiners = async (req: any, res: any) => {
  await dinerModel.find({}, (error: any, data: any) => {
    if (error || !data.length) { 
      return notFound(error) 
    } else {  
      return res.status(200).json({ success: true, data });
    }

  }).catch(notReturned);
};

export default {
  // createDiner,
  // updateDiner,
  // deleteDiner,
  getDiners
};
