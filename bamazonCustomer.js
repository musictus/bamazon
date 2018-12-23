var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config()

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASS,
        database: "bamazon"
    }
);

connection.connect(function(error) {
    if (error) {
        console.log('Error connecting: ' + error.stack);
        return;
    }
    console.log('connected as ID: ' + connection.threadId + "\n");
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM product", function(error, response) {
        for (var i = 0; i < response.length; i++) {
            console.log("Product ID: " + response[i].item_id + " | Product: " + response[i].product_name + " | Price: $"+response[i].price);
        }
        console.log("-----------------------------------");
        buyItem()
    })
};


function buyItem() {
    inquirer
    .prompt([
        {
            name: "id",
            type: "input",
            message: "Enter your product ID",
            validate: value => { 
                if (isNaN(value) === false) {
                    return true;
                    }
                return false;
                }
        },
        {
            name: "count",
            type: "input",
            message: "How many would you like to buy?",
            validate: value => { 
                if (isNaN(value) === false) {
                    return true;
                    }
                return false;
                }
        }
    ])
    .then(answer => {
        if (answer.count >= )
        console.log("You've successfully purchased!")    
    });
};