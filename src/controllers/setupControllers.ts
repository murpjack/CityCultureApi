 export const notValid = 
  (res: any) => res.status(400).json({ success: false, message: "You must provide a valid document, or document fields." });

export const notUpdated = 
  (error: any) => (res: any) => res.status(400).json({ success: false, error, message: "The selected document, or collection could not be updated, or deleted." });

export const notReturned = 
  (error: any) => (res: any) => res.status(400).json({ success: false, error, message: "The selected document, or collection could not be returned or created!" })

export const notFound = 
  (error: any) => (res: any) => res.status(404).json({ 
      success: false, 
      error, 
      message: "The selected document, or collection could not be found." 
    });

export const idAlreadyExists = 
  (res: any) => res.status(409).json({ success: false, message: "A document with the same id already exists and can't be added." });

export default {
  notValid,
  notUpdated,
  notReturned,
  notFound,
  idAlreadyExists,
};
