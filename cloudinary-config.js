// cloudinary-config.js
// Public config only — the unsigned preset is safe to expose client-side.
// It can only be used to upload into the folder/preset you defined; it
// cannot read, list, or delete anything on its own.
const CLOUDINARY_CLOUD_NAME = "tr7wgc7m";
const CLOUDINARY_UPLOAD_PRESET = "tr8bsty7";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
