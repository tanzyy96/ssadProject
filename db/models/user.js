const mongoose = require("mongoose");
const Joi = require("joi");
const { boolean } = require("joi");

const validate = function (user) {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(12).alphanum().required(),
    fullName: Joi.string()
      .min(5)
      .pattern(/^[a-zA-Z ]+$/)
      .required(),
    password: Joi.string().alphanum().required(),
    repeatPassword: Joi.ref("password"),
    phoneNumber: Joi.number().max(8).min(8),
    isAdmin: Joi.bool().optional(),
    email: Joi.string()
      .email()
      .pattern(/.*(ntu\.edu\.sg).*/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "string.regex.base":
              err.message = "Please input a valid NTU email address.";
              break;
            default:
              err.message = "Please input a valid NTU email address.";
              break;
          }
        });
        return errors;
      }),
    isTeacher: Joi.bool().optional(),
  }).with("password", "repeatPassword");

  return schema.validate(user);
};

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 12,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: Number,
  isTeacher: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User, validate };
