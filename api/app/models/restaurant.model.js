module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    restName: String,
    price: String,
    cat: String,
    number: String,
    menu: Array,
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Rest = mongoose.model("rest", schema);
  return Rest;
};
