module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      username: String,
      password: String,
      firstname: String,
      phonenumber: String,
      city: String,
      postalcode: String,
      lastname: String,
      email: String,
      state: String,
      country: String,
      active: Boolean,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const User = mongoose.model("user", schema);
  return User;
};
