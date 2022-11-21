const router = require("express").Router();
const Cast = require("../models/Cast");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newCast = new Cast(req.body);
    try {
      const savedCast = await newCast.save();
      res.status(201).json(savedCast);
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
      const updatedCast = await Cast.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCast);
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
      await Cast.findByIdAndDelete(req.params.id);
      res.status(200).json("The cast has been deleted...");
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
    const cast = await Cast.findById(req.params.id);
    res.status(200).json(cast);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/findrole/:id", verify, async (req, res) => {
//   try {
//     const cast = await Cast.({'_id':req.params.id});
//     res.status(200).json(cast);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const casts = await Cast.find();
      res.status(200).json(casts.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
