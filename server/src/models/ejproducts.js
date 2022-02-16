const db = require('../util/database');

module.exports = class Product {
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    };

    save(){
        const sql = 'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)';
        const val = [this.title, this.price, this.imageUrl, this.description];
        console.log(val);
        return db.execute(sql, val);
    };

    static deleteById(id){
    };

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    };

    static findbyId(id){
    };
};