import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Please provide a subject"],
    unique: false,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: false,
  },
  explanation: {
    type: String,
    required: [true, "Please provide an explanation"],
    unique: false,
  },
  extraFile: {
    type: String, // use String to store the file URL or ID
    required: false,
    validate: {
      validator: (value) => {
        // add validation logic here
        return true;
      },
      message: "Please provide a valid file",
    },
  },
});

const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;
