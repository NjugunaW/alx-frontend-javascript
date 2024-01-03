import { uploadPhoto, createUser } from "utils.js";

export default async function asyncUploadUser() {
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (_) {
    return { photo: null, user: null };
  }
}
