//crud products books

const { ObjectId } = require('mongodb');
const {bookProductModel} = require('../model');

// list book.
exports.getBook = async (_,res) => {
    console.log(' -> method viewAll');
    const result = await bookProductModel.find();
    res.json(result);
};

// list book id
exports.getBookId = async (req, res) => {
    console.log('-> method viewId');
    
    if (!ObjectId.isValid(req.params.id)){
        res.status(401).send('invalid id')
        return
    } 

    const book = await bookProductModel.findById({'_id': req.params.id})

    if (!book){
        res.status(404).send('book not found ')
        return
    }
    res.json(book);
} 

// create book
exports.createBook = async (req, res) => {
    console.log('-> method createBook');

    const newBook = {
        category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        pages: req.body.pages,
        stock: req.body.stock,
        price: req.body.price
    }

    if (req.body.tags){
        newBook.tags = req.body.tags
    }

    const result = await bookProductModel.create(newBook);

    res.json(result)
};

//update book
exports.updateBook = async (req, res) => {
    console.log('-> method updateBook');

    const {id} = req.params;
    const updateData = req.body;

    if (!ObjectId.isValid(req.params.id)){
        res.status(401).send('invalid id')
        return
    } 
    const result = await bookProductModel.findByIdAndUpdate({'_id':id}, updateData, {new: true}).exec()
    if (!result){
        res.status(404).send(`book whit id ${id} no fue encontrado.`)
        return
    }
    res.json(result)
};

// delete book 
exports.deleteBook = async (req, res) => {
    console.log('-> method delete');

    const {id} = req.params;
    
    if (!ObjectId.isValid(req.params.id)){
        res.status(401).send('invalid id')
        return
    } 

    const result = await bookProductModel.findByIdAndDelete({'_id': id});
    if(!result){
        res.status(404).send('could not delete')
        return
    }
    res.json({message:`Libro '${id}' fue eliminado correctamente`})
};


