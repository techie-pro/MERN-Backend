const ObjectSchema = require("../models/Object");

//@desc   GET bootcamps
//route   /api/vi/bootcamps;
//access  public
exports.getBootcamps = async (req, res, next) => {
  try {
    const result = await ObjectSchema.find();
    res.status(200).json({ success: true, count: result.length, data: result });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
};

//@desc   GET bootcamp
//@route   /api/vi/bootcamps/:id
//access  public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await ObjectSchema.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
  const bootcamp = await ObjectSchema.findById(req.params.id);
};

//@desc   POST bootcamps
//@route   /api/vi/bootcamps
//access  private
exports.createBootcamps = async (req, res, next) => {
  try {
    const result = await ObjectSchema.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc   Update bootcamp
//@route   /api/vi/bootcamps/:id
//access  private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const result = await ObjectSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc   Delete bootcamps
//@route   /api/vi/bootcamps/:id
//access  private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const result = await ObjectSchema.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
