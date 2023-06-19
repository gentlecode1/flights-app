module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      comment: { type: String, required: true },
      userId: { type: Number, required: true },
      flightId: { type: Number, required: true },
      tags: [String],
      date: { type: Date, default: Date.now },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Comment = mongoose.model("comment", schema);
  return Comment;
};
