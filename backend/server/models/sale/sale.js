const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({ 
  sale_id: {
    type: String,
    required: true,
  },
  sale_collection_index: {
    type: String,
    required: true,
  },
  cable_width: {type: String,
    default: null
  },
  cable_size: {type: String,
    default: null
  },
  cable_core: {type: String,
    default: null
  },
  cable_amp: {type: String,
  default: null
  },
  cable_type: {type: String,
        default: null
  },
  cable_dimension: {type: String,
      default: null
  },
  coil_length: {type: String,
      default: null
  },
  cable_color: {type: String,
      default: null
  },
  cable_status : {type: Boolean,
      default: true
  },
  cable_packing : {type: String,
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

module.exports = mongoose.model('sales', SaleSchema)