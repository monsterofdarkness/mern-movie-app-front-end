const router = require("express").Router();
const MyMovieList = require("../models/my_movie_list");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMyMovieList = new MyMovieList(req.body);
    try {
      const savedMyMovieList = await newMyMovieList.save();
      res.status(201).json(savedMyMovieList);
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
      const updatedMyMovieList = await MyMovieList.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMyMovieList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

router.put("/finduid/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMyMovieList = await MyMovieList.findOneAndUpdate(
        {'user_id':req.params.id},
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMyMovieList);
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
      await MyMovieList.findByIdAndDelete(req.params.id);
      res.status(200).json("The My Movie List has been deleted...");
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
    const myMovieList = await MyMovieList.findById(req.params.id);
    res.status(200).json(myMovieList);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/finduid/:id", verify, async (req, res) => {
    try {
      const myMovieList = await MyMovieList.findOne({'user_id':req.params.id});
      res.status(200).json(myMovieList);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const myMoviesList = await MyMovieList.find();
      res.status(200).json(myMoviesList.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
