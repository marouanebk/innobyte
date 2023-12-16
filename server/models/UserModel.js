const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Veuillez ajouter un nom"],
    },
    email: {
      type: String,
      required: [true, "Veuillez ajouter un nom d'utilisateur"],
    },
    password: {
      type: String,
      required: [true, "Veuillez ajouter un mot de passe"],
    },

    fcm_token: { type: String, default: " " },
  },
  {
    timestamps: true,
  }
);
// static signup method
userSchema.statics.signup = async function (fullName, email, password) {
  const exist = await this.findOne({ email: email });

  if (exist) {
    throw Error("Nom d'utilisateur déjà utilisé, veuillez choisir un autre");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ fullName, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password, fcm_token) {
  if (!email || !password) {
    throw Error("Tous les champs doivent être remplis");
  }
  const user = await this.findOneAndUpdate(
    { email },
    { $set: { fcm_token: fcm_token } },
    { new: true }
  );
  if (!user) {
    throw Error("Nom d'utilisateur incorrect");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Mot de passe incorrect");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
