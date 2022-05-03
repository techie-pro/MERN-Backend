//@desc   GET bootcamps
//route   /api/vi/bootcamps;
//access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show bootcamps' });
};

//@desc   GET bootcamp
//@route   /api/vi/bootcamps/:id
//access  public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

//@desc   POST bootcamps
//@route   /api/vi/bootcamps
//access  private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create bootcamp' });
};

//@desc   Update bootcamp
//@route   /api/vi/bootcamps/:id
//access  private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

//@desc   Delete bootcamps
//@route   /api/vi/bootcamps/:id
//access  private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
