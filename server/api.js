const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sickstDB", {useNewUrlParser: true});

const productSchema = {
    brand: String,
    model: String,
    type: String,
    price: Number,
    category: String
};

const Product = mongoose.model("Product", productSchema);

// get all products
app.route("/api/products")
    .get(function(req, res) {
        Product.find(function(err, products) {
            if (!err) {
                res.send(products);
            } else {
                res.send(err);
            }
        });
    });

// get male category
app.route("/api/products/male")
    .get(function(req, res) {
        const fetchProducts = Product.find({});

        fetchProducts
            .where("category")
            .in(["Male"])
            .then(mainProducts => {
                res.send(mainProducts);
            })
            .catch(err => {
                res.send(err);
            })
    });
// get female category
app.route("/api/products/female")
    .get(function(req, res) {
        const fetchProducts = Product.find({});

        fetchProducts
            .where("category")
            .in(["Female"])
            .then(mainProducts => {
                res.send(mainProducts);
            })
            .catch(err => {
                res.send(err);
            })
    });

// get a specific product
app.route("/api/products/:brand")
    .get(function(req, res){
        Product.findOne({brand: req.params.brand}, function(err, foundProduct){
            if(foundProduct) {
                res.send(foundProduct);
            } else {
                res.send("The specific product was not found.");
            }
        })
    }); 