var mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("sucessfull.............!!!!!!!!!!!");
  })
  .catch((err) => {
    console.log(err);
  });
const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const Register = new mongoose.model("Register", loginSchema);
module.exports = Register;
