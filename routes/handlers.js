const express = require("express");
const router = express.Router();


// Routing
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    style: "home.css",
    students: [
      {
        student: "Colin",
        age: 20,
        programme: "Software Development",
        modules: [
          { name: "Programming", grade: 61 },
          { name: "Application Architectures", grade: 42 },
          { name: "Software Engineering", grade: 35 },
        ],
        _id: "7fbxcNUjTzWDsC3j",
      },
      {
        student: "Ali",
        age: 23,
        programme: "Software Development",
        modules: [
          { name: "Programming", grade: 36 },
          { name: "Application Architectures", grade: 36 },
          { name: "Software Engineering", grade: 26 },
        ],
        _id: "9tbmFazl0j5jRfiB",
      },
      {
        student: "Ed",
        age: 20,
        programme: "Software Development",
        modules: [
          { name: "Programming", grade: 40 },
          { name: "Web Development", grade: 54 },
          { name: "Software Engineering", grade: 63 },
        ],
        _id: "Jr0F3W4pHAbp3U7O",
      },
      {
        student: "Fred",
        age: 20,
        programme: "Software Development",
        modules: [
          { name: "Programming", grade: 78 },
          { name: "Application Architectures", grade: 67 },
          { name: "Software Engineering", grade: 69 },
        ],
        _id: "bDmd3I3W6QObNMcu",
      },
      {
        student: "Ross",
        age: 20,
        programme: "Software Development",
        modules: [
          { name: "Programming", grade: 62 },
          { name: "Web Development", grade: 27 },
          { name: "Software Engineering", grade: 73 },
        ],
        _id: "m1VN1gwEOUbnCwi7",
      },
      {
        student: "Ann",
        age: 20,
        programme: "Computing",
        modules: [
          { name: "Programming", grade: 57 },
          { name: "Web Development", grade: 70 },
          { name: "Software Engineering", grade: 59 },
        ],
        _id: "xLiSvR5yKk41epOZ",
      },
    ],
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    style: "about.css",
    description:
      "Additional text being passed to the template when it is rendered.",
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    isListEnabled: true,
    style: "dashboard.css",
    author: {
      firstName: "John",
      lastName: "Doe",
      project: {
        name: "Build a Hello World app",
      },
    },
  });
});

router.get("/each/helper", (req, res) => {
  res.render("contact", {
        lists: [
      {
        items: ["Mango", "Banana", "Apple"],
      },

      {
        items: ["Potato", "Carrot", "Avocado"],
      },
    ],
  });
});

router.get("/look", (req, res) => {
  res.render("lookup", {
    people: ["James", "Peter", "Sadrack", "Morissa"],
  });
});

module.exports = router;
