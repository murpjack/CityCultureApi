import adviceModel from "../models/advice";
import { 
  // notValid,
  notReturned, 
  notFound, 
  // notUpdated, 
  // idAlreadyExists
 } from "./setupControllers";

// const createWisdom = (req, res) => {
//   const body = req.body;
//   console.log("res", res);

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a wisdom",
//     });
//   }

//   const wisdom = new Wisdom(body);
//   if (!wisdom) {
//     // TODO: handle error response
//     return res.status(400).json({ success: false, error: "err" });
//   }

//   wisdom
//     .save()
//     .then(() =>
//       res.status(201).json({
//         success: true,
//         id: wisdom._id,
//         message: "Wisdom created!",
//       })
//     )
//     .catch((error) =>
//       res.status(400).json({
//         error,
//         message: "Wisdom not created!",
//       })
//     );
// };

// const updateWisdom = async (req, res) => {
//   const body = req.body;

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a body to update",
//     });
//   }

//   Wisdom.findOne({ _id: req.params.id }, (err, wisdom) => {
//     if (err) {
//       return res.status(404).json({
//         err,
//         message: "Wisdom not found!",
//       });
//     }
//     wisdom._id = body._id;
//     wisdom.description = body.description;

//     wisdom
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: wisdom._id,
//           message: "Wisdom updated!",
//         });
//       })
//       .catch((error) => {
//         return res.status(404).json({
//           error,
//           message: "Wisdom not updated!",
//         });
//       });
//   });
// };

// const deleteWisdom = async (req, res) => {
//   await Wisdom.findOneAndDelete({ _id: req.params.id }, (err, wisdom) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!wisdom) {
//       return res
//         .status(404)
//         .json({ success: false, error: `Wisdom not found` });
//     }

//     return res.status(200).json({ success: true, data: wisdom });
//   }).catch((err) => console.log(err));
// };

export const getAdvice = async (req: any, res: any) => {
  await adviceModel.find({}, (error: any, data: any) => {
    if (error || !data.length) { return notFound(error) }

    return res.status(200).json({ success: true, data });

  }).catch(notReturned);
};

export default {
  // createAdvice,
  // updateAdvice,
  // deleteAdvice,
  getAdvice
}
