const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const validator = require('validator')



const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: [false , 'FirstName is required']
	},
	username : {
		type : String,
		required: [true, 'Username is required'],
		unique : true,
	},
	password: {
		type: String,
		required: [true, 'Provide a password'],
		minlength: 4,
		select: false
	},
	passwordConfirm : {
		type: String,
		required: [true, 'Provide password confirmation'],
		validate : {
			validator: function(el){
				return el === this.password;
			},
			message: 'Password mismatch'
		}
	},
	contact : {
		type : String,
		required: [false, 'Contact is required'],
	},
	isAdmin : {
		type: Boolean,
		default: false
	},
	dateOfBirth : Number,
}, { timestamps: true })


userSchema.pre('save', async function(next){
	// checks if password is not modified
	if(!this.isModified('password')) return next();

	// encrypts password
	this.password = await bcrypt.hash(this.password, 12);

	this.passwordConfirm = undefined
	next()
})



userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
	return await bcrypt.compare(candidatePassword, userPassword)
}


const Users = mongoose.model("Users", userSchema);

module.exports = Users;