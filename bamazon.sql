DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE product (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
); 

INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Dining Table', 'Furniture', 100, 30);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Floor Lamp', 'Furniture', 20, 50);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('TV', 'Electronics', 300, 40);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Sofa', 'Furniture', 150, 70);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Playstation 3', 'Electronics', 180, 100);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Piano', 'Musical Instrument', 3000, 10);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Guitar', 'Musical Instrument', 1000, 30);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Speaker', 'Electronics', 120, 200);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Violin', 'Musical Instrument', 1000, 50);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ('Mirror', 'Furniture', 50, 80);