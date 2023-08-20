const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true
    },
    refNumber : {
        type: String,
        required: true
    },
    senderName : {
        type: String,
        required: true
    },
    senderContact : {
        type: String,
        required: true
    },
    senderLocation : {
        type: String,
        required : true
    },
    receiverName: {
        type: String,
        required: true
    },
    receiverContact : {
        type: String,
        required: true
    },
    receiverLocation : {
        type: String,
        required : true
    },
    items : [
		{
			item : {
                    type: String,
                    required: true,
                    },
			description : {
                    type: String,
                    required : true
                    },
            quantity : {
                    type: Number,
                    required : true
                    },
            price : {
                    type:Number,
                     required: true
                    }
		}
	]
}, { timestamps: true })



const Invoices = mongoose.model("Invoices", userSchema);

module.exports = Invoices;