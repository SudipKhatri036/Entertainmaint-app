const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

// const addToBookmark = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.json({ status: false });
//     } else {
//       const user = await User.findById(data.id);
//       if (user) {
//         user.bookmarks.push(req.body);
//         await user.save();
//         return res.json({
//           status: true,
//           message: "Bookmark added successfully",
//           userData: user,
//           bookId: req.body.id,
//         });
//       } else return res.json({ status: false });
//     }
//   });
// };

const addToBookmark = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  // Verify the JWT token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Token verification failed" });
    } else {
      // Find the user from the database
      const user = await User.findById(data.id);
      if (user) {
        // Check if the bookmark already exists in the user's bookmarks
        const existingBookmark = user.bookmarks.some(
          (bookmark) => bookmark.id === req.body.id
        );

        if (existingBookmark) {
          return res.json({ status: false, message: "Bookmark already added" });
        }

        // If it doesn't exist, add the bookmark
        user.bookmarks.push(req.body);
        await user.save();

        return res.json({
          status: true,
          message: "Bookmark added successfully",
          userData: user,
          bookId: req.body.id,
        });
      } else {
        return res.json({ status: false, message: "User not found" });
      }
    }
  });
};

// const getBookmark = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.json({ status: false });
//     } else {
//       const user = await User.findById(data.id);
//       if (user) {
//         return res.json({
//           status: true,
//           bookmarks: user,
//         });
//       } else return res.json({ status: false });
//     }
//   });
// };

const getBookmark = async (req, res) => {
  const token = req.cookies.token;

  // Check if token is present
  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Token verification failed" });
    } else {
      // Find the user using the ID from the token
      try {
        const user = await User.findById(data.id);

        // If the user is found, return the bookmarks
        if (user) {
          return res.json({
            status: true,
            bookmarks: user.bookmarks, // Assuming "bookmarks" is an attribute of the user
          });
        } else {
          return res.json({ status: false, message: "User not found" });
        }
      } catch (err) {
        return res.json({ status: false, message: "Error finding user" });
      }
    }
  });
};

module.exports = { addToBookmark, getBookmark };
