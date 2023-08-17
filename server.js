const express = require('express');
const path = require("path");
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 5000;
const dbEnabled = false;
const sequelize = new Sequelize('net4flix', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

const User = sequelize.define('users', {
  // assuming your users table has these fields
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: false
});


app.use(express.static(path.join(__dirname, "public")));

app.get("/schedule", (req, res) => {
  res.sendFile(path.join(__dirname, "public/source/html/pages/schedule/schedule.html"));
});
if (dbEnabled) {
  sequelize.sync()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
}
else {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
