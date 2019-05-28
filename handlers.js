const knex = require("./knexFile");

//users handlers
function getUser(req,res){
    knex
    .select()
    .table('users')
    .then((data)=>{
        res.send(data)
        res.end()
    })
}

function addUser(req,res){
    var values = {
        userFname: req.query.userFname,
        userLname: req.query.userLname,
        username: req.query.username,
        password: req.query.password
    };
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
        res.send(data)
        res.end()
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
    var id = req.query.id;
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
        itemName: req.query.itemName,
        itemPrice: req.query.itemPrice,
        itemImageName: req.query.itemImageName,
        itemDescription: req.query.itemDescription
    },
    id = req.query.id;

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
    addUser : addUser,
    getItems : getItems,
    addItem : addItem,
    deleteItem : deleteItem,
    updateItem : updateItem
};