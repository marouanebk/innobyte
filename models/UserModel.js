const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const roles=["admin","pageAdmin","financier","logistics"]
const commandTypesEnum=["Détail vierge","Détail personnalisé","Gros vierge","Gros personnalisé","Vierge détail","Personnalisé détail","Gros personnalisé","Gros détail"]

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Veuillez ajouter un nom'],
    },
    username: {
      type: String,
      required: [true, 'Veuillez ajouter un nom d\'utilisateur'],
    },
    password: {
      type: String,
      required: [true, 'Veuillez ajouter un mot de passe'],
    },
    role: {
      type: String,
      enum: roles,
      required: [true, 'Veuillez ajouter un rôle'],
    },
    

      fcm_token:{type:String,
        default:' '}
  },
  {
    timestamps: true,
  }
)
// static signup method
userSchema.statics.signup = async function(fullName,username, password,role,) {

  const exist = await this.findOne({ username: username });

  if (exist) {
    throw Error('Nom d\'utilisateur déjà utilisé, veuillez choisir un autre');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ fullName,username, password: hash,role, });

  return user;
}



// static login method
userSchema.statics.login = async function(username,password,fcm_token) {
    if (!username || !password) {
        throw Error('Tous les champs doivent être remplis');
    }
    const user = await this.findOneAndUpdate(
      { username },
      { $set: { fcm_token: fcm_token } },
      { new: true }
    )
    if (!user) {
        throw Error('Nom d\'utilisateur incorrect');
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Mot de passe incorrect');
    }
  
    return user
  }

module.exports = mongoose.model('User', userSchema)