const router = require("express").Router();
const CastofMovie = require("../models/CastofMovie");
const verify = require("../verifyToken");

//CREATE


router.post("/", verify, async (req, res) => {


  if (req.user) {
    const newCastofMovie = new CastofMovie(req.body);
    try {
      const savedCastofMovie = await newCastofMovie.save();
      res.status(201).json(savedCastofMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedCastofMovie = await CastofMovie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCastofMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await CastofMovie.findByIdAndDelete(req.params.id);
      res.status(200).json("The CastofMovie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/find/:id", verify, async (req, res) => {
  try {
    const castofMovie = await CastofMovie.findById(req.params.id);
    res.status(200).json(castofMovie);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/findmid/:id", verify, async (req, res) => {
  try {
    const castofMoviea = await CastofMovie.find({'movie_id':req.params.id});
    res.status(200).json(castofMoviea);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const castsofMovie = await CastofMovie.find();
      res.status(200).json(castsofMovie.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
