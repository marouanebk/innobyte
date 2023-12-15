const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const roles=["admin","pageAdmin","financier","logistics"]
const commandTypesEnum=["Détail vierge","Détail personnalisé","Gros vierge","Gros personnalisé","Vierge détail","Personnalisé détail","Gros personnalisé","Gros détail"]

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please , fill in ur full name '],
    },
    username: {
      type: String,
      required: [true, 'Please , fill in ur username '],
    },
    password: {
      type: String,
      required: [true, 'Please , fill in ur password '],
    },
    role: {
      type: String,
      enum: roles,
      required: [true, 'Please , fill in ur password'],
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
    throw Error('username already used.');
  }

  console.log("before getting salt ");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(hash)


  const user = await this.create({ fullName,username, password: hash,role, });
  console.log("user salt ");

  return user;
}



// static login method
userSchema.statics.login = async function(username,password,fcm_token) {
    if (!username || !password) {
        throw Error('Please fill in username and password.');
    }
    const user = await this.findOneAndUpdate(
      { username },
      { $set: { fcm_token: fcm_token } },
      { new: true }
    )
    if (!user) {
        throw Error('username incorrect');
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('password incorrect');
    }
  
    return user
  }

module.exports = mongoose.model('User', userSchema)