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
    ]).then(answer => {
        var stockNumber;
        var newStockNumber;
        var itemId;
        var productName;
        var price;
        var totalPrice;
        var query = "SELECT item_id, product_name, price, stock_quantity FROM product WHERE ?"
        connection.query(query, { item_id: answer.id }, function(error, response) {

            for (var i = 0; i < response.length; i++) {
                stockNumber = response[i].stock_quantity;
                itemId = response[i].item_id;
                productName = response[i].product_name;
                price = response[i].price;
                totalPrice = price * answer.count;
                // console.log("OG stock number " + stockNumber);
                // console.log("Item number " + itemId);
                if (stockNumber >= answer.count) {
                    newStockNumber = stockNumber - answer.count;
                    // console.log("new number " + newStockNumber);
                    var queryBuy = "UPDATE product SET ? WHERE ?";
                    connection.query(
                        queryBuy,
                        [
                            { 
                                stock_quantity: newStockNumber
                            },
                            {
                                item_id: itemId
                            }
                        ]
                    );
                    console.log("************************************\n" + "You've successfully purchased " + answer.count + " " + productName + " for $" + totalPrice + "\n" + "************************************\n");
                    displayItems();

            } else if (stockNumber < answer.count) {
                console.log("************************************\n" + "Insufficient quantity!" + "************************************\n");
                displayItems();
            };

            } 

        }
        )
    });

};





      

