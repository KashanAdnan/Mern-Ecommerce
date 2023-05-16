const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conectDataBase = () => {
  mongoose
    .connect(
      "mongodb+srv://fullstackdevkashan:kashanadnan@cluster0.ox00ado.mongodb.net/",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then((data) => {
      console.log(`MongoDB Connected With Server ${data.connection.host}`);
    });
};

module.exports = conectDataBase;
