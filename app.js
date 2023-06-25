const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api/v1/tasks", tasks);

//app.get("/api/v1/tasks") - get all the tasks
//app.post("/api/v1/tasks") - create a new tasks
//app.get("/api/v1/tasks/:id") - get single
//app.patch("/api/v1/tasks/:id") - update tasks
//app.delete("/api/v1/tasks") - delete tasks

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
