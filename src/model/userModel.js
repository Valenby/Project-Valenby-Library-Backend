const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin',"user"]
    }
});

//hacemos hash para el password
userSchema.pre('save', async function(next) {
    try {
        if(!this.isModified('password')){
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, `${salt}${process.env.SECRETSTRING}`);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

// comparar password del usuario con el hash
userSchema.statics.login = async function(email,password){
    try {
        const User = this
        const userToCompare = await User.findOne({ email })
        let res = await bcrypt.compare(password, userToCompare.password);
        if (res) return userToCompare;
        return 
        

    } catch (error) {
        throw new Error(error);
    }
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;