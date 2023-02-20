const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    

  user_id: {
    type: String,
    required: true,
  },
  user_collection_index: {
    type: String,
    required: true,
  },
  first_name: {type: String,
    default: null
  },
  last_name: {type: String,
    default: null
  },
  email: {type: String,
    default: null
  },
  phone_number: {type: String,
  default: null
  },
  password: {type: String,
        default: null
  },
  dob: {type: String,
      default: null
  },
  user_status : {type: Boolean,
      default: true
  },
  gender : {type: String,
        default: null
  },
  role : {type: String,
          default: null
  },
  created_at:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at:{
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('users', UserSchema)