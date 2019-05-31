const Knex = require("knex");
const knexOptions = require("./knexFile");
const knex = Knex(knexOptions);

//users handlers
function getUser(req,res){
    knex
    .select()
    .table('users')
    .then((data)=>{
        res.json(data)
    })
}

function getSingleUser(req,res){
    knex
    .select()
    .table('users')
    .where({ username: req.params.username })
    .then((data)=>{
        res.json(data)
        console.log(data);
    })
}

function addUser(req,res){
    var values = {
        userFname: req.body.userFname,
        userLname: req.body.userLname,
        username: req.body.username,
        password: req.body.password
    };
    console.log(req);
    knex('users')
    .insert(values)
    .then(
        ()=>{
            res.end("User registered!")
        }
    )
}
// end users handlers

//items handlers
function getItems(req,res){
    knex
    .select()
    .table('items')
    .then((data)=>{
        res.json(data)
    })
}

function addItem(req,res){

    const file = req.file
    const fileExtension = req.file.filename.split('.').pop().toString()
    if (!file) {
        res.end('Please upload a file')
        return;
    }

    if( fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'gif' && fileExtension !== 'jpeg' ){
        res.end('Only images allowed in itemImage!')
        return;
    }
    
    var values = {
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemImageName: req.file.filename,
        itemDescription: req.body.itemDescription
    };
    
    knex('items')
    .insert(values)
    .then(
        ()=>{
            res.json({
                status : "Item added",
                file : file
            });
        }
    )
}

function deleteItem(req,res){
    var id = req.body.id;
    knex('items')
    .where({ id: id })
    .del()
    .then(
        ()=>{
            res.end("Item deleted!")
        }
    )
}

function updateItem(req,res){
    var updateValues = {
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemImageName: req.body.itemImageName,
        itemDescription: req.body.itemDescription
    },
    id = req.body.id;

    knex('items')
    .where({ id: id })
    .update(updateValues)
    .then(
        ()=>{
            res.end("Item updated.")
        }
    )
}

//end item handlers

module.exports = {
    getUser : getUser,
    getSingleUser : getSingleUser,
    addUser : addUser,
    getItems : getItems,
    addItem : addItem,
    deleteItem : deleteItem,
    updateItem : updateItem
};