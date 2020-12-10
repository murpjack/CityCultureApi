import userModel from "../models/user";
import { 
  // notValid,
  notReturned, 
  notFound, 
  // notUpdated, 
  // idAlreadyExists
 } from "./setupControllers";
 
export const getAllUsers = async (req: any, res: any) => {
await userModel.find({}, (error: any, data: any) => {
    if (error || !data.length) { return notFound(error) }

    return res.status(200).json({ success: true, data });

  }).catch(notReturned);

  // await userModel
  //   .find({}, (error: any, users: any) => {
  //     if (error) { return res.status(400).json({ success: false, error }) }
      
  //     if (!users.length) {
  //       return res
  //         .status(404)
  //         .json({ success: false, error: `Sorry, no users found.` });
  //     }

  //     return res.status(200).json({ success: true, data: users });
  //   })
  //   .catch((error: any) => res.status(400).json({ error, message: "Users not returned!" }));
};


export const createUser = async (req: any, res: any) => {
  const body = req.body;

  if (typeof body !== "object") {
    return res.status(400).json({
      success: false,
      message: "The user details you have submitted are invalid.",
    });
  }

  const user = new userModel(body);
  if (!user) {
    // TODO: handle Error response
    return res.status(400).json({ success: false, message: "err" });
  }

  const query = {
    "_id": body._id,
    "userId": body.userId,
    "name": body.name,
    "favouriteColour": body.favouriteColour,
    "age": body.age,
  } 

  // Don't add any items with a duplicate id
  const duplicatedUsers = await userModel
    .find(query, (error: any, users: userType[]) => {
      if (error) { return res.status(400).json({ success: false, error }) }

      if (users.length !== 0) {
        return res
          .status(409)
          .json({ error: `User ${body._id} already exists.` });
      } 

    })
    .catch((error: any) => res.status(400).json({ error, message: "User not created!" }));

  if (duplicatedUsers.length === 0) {
    user
      .save()
      .then(() => 
        res.status(201).json({
          success: true,
          id: user._id,
          message: "User created!",
        })
      )
      .catch((error: any) => res.status(400).json({ error, message: "User not created!" }));
  }
};

export const updateUser = async (req: any, res: any) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "The user details you have submitted are invalid.",
    });
  }

  await userModel.findOne({ "_id": body._id }, (error: any, user: any) => {
    if (error) { 
      return res.status(404).json({ error, message: "User not found!" }) 
    }

    user._id = body._id;
    user.name = body.name;
    user.favouriteColour = body.favouriteColour;
    user.age = body.age;

    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: `Great; ${user.name}'s profile has been updated successfully!`,
        });
      })
      .catch((error: any) => res.status(404).json({ error, message: "User was not updated!" }));
  });
};

export const deleteUser = async (req: any, res: any) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "The user details you have submitted are invalid.",
    });
  }

  await userModel.findOneAndDelete({ _id: body._id }, (error: any, user: any) => {
    if (error) { return res.status(400).json({ success: false, error }) }

    if (!user) { return res.status(404).json({ success: false, error: `User not found.` }) }

    return res.status(200).json({ 
        success: true, 
        id: user._id,
        message: `${user.name}'s profile has been deleted!`,
      });
  }).catch((error: any) => res.status(404).json({ error, message: "User was not deleted!" }));
};


interface userType {
  _id: string;
  age: number;
  name: string;
  favouriteColour: string;
}
export const createMockUser = async (user: userType) => {
  if (!user) throw new Error("Missing user");
  await userModel.create(user);

};
export default { getAllUsers, createUser, createMockUser, updateUser, deleteUser };
