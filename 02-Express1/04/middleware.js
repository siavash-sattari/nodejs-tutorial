const logger = (req, res, next) => {
  console.log(req.body);

  console.log(`Fullname : ${req.body.fullname}`);
  console.log(`Email : ${req.body.email}`);
  console.log(`Password : ${req.body.password}`);

  console.log(`Request with path : ${req.path}`);

  if (Math.random() > 0.5) {
    return res.status(403).send({
      status: false,
      message: 'شما دسترسی  ندارید'
    });
  }

  next();
};

module.exports = { logger };
