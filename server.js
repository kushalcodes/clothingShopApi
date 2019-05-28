const Express = require("express")
const app = Express()
const multerInc = require("./multerFileUpload")
const handlers = require("./handlers")

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//user api
app.get("/api/users",handlers.getUser)
app.post("/api/users",handlers.addUser)

//item api
app.get("/api/items",handlers.getItems)
app.post("/api/items",multerInc.upload.single('itemImage'),handlers.addItem)
app.delete("/api/items",handlers.deleteItem)
app.put("/api/items",handlers.updateItem)

//start server
const port = 3000;
app.listen(port,()=>{
    console.log("Server listening on "+port);
})