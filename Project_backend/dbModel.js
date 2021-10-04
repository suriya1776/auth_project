import mongoose from 'mongoose'

const LoginSchema = mongoose.Schema({
  admin: {
    name: String,
    id: String,
    usertype: String,
  },
  manager: {
    name: String,
    id: String,
    usertype: String,
  },
  id: [String, String, String, String, String],
  developer: [
    {
      name: String,
      id: String,
      usertype: String,
    },
    {
      name: String,
      id: String,
      usertype: String,
    },
    {
      name: String,
      id: String,
      usertype: String,
    },
  ],
})
export default mongoose.model('loginData', LoginSchema)
