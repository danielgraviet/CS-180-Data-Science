-- #### SECTION 1: Special Operators ####

-- Q1) Find the names of all juice items (menu table).

-- Write your query here:
SELECT menu_name FROM menu
WHERE menu_name LIKE '%juice%'
LIMIT 5;

-- Paste your resulting table here:
┌──────────────┐
│  menu_name   │
├──────────────┤
│ Mango Juice  │
│ Orange Juice │
└──────────────┘

-- Q2) Find all orders (order table) between August 1 and 9, 2022
SELECT * FROM orders
WHERE orderdate BETWEEN '2022-08-01' AND '2022-08-09';

┌─────────┬────────────┬─────────┬──────────┬─────────────┬───────────────────┬────────┐
│ orderid │ orderdate  │ menu_id │ quantity │ customer_id │ delivery_platform │ emp_id │
├─────────┼────────────┼─────────┼──────────┼─────────────┼───────────────────┼────────┤
│ 1       │ 2022-08-01 │ 1       │ 1        │ 4           │ Grabfood          │ 1      │
│ 2       │ 2022-08-01 │ 6       │ 2        │ 1           │ Lineman           │ 1      │
│ 3       │ 2022-08-02 │ 2       │ 2        │ 2           │ Robinhood         │ 2      │
│ 4       │ 2022-08-03 │ 3       │ 1        │ 5           │ Grabfood          │ 3      │
│ 5       │ 2022-08-04 │ 1       │ 1        │ 2           │ Robinhood         │ 2      │
│ 6       │ 2022-08-05 │ 6       │ 1        │ 4           │ Grabfood          │ 1      │
│ 7       │ 2022-08-05 │ 10      │ 1        │ 3           │ Grabfood          │ 3      │
│ 8       │ 2022-08-09 │ 3       │ 2        │ 4           │ Grabfood          │ 1      │
└─────────┴────────────┴─────────┴──────────┴─────────────┴───────────────────┴────────┘

-- Q3) Find the orders (order table) where the delivery platform contains the substring 'ood'
SELECT * FROM orders
WHERE delivery_platform LIKE '%ood%';

┌─────────┬────────────┬─────────┬──────────┬─────────────┬───────────────────┬────────┐
│ orderid │ orderdate  │ menu_id │ quantity │ customer_id │ delivery_platform │ emp_id │
├─────────┼────────────┼─────────┼──────────┼─────────────┼───────────────────┼────────┤
│ 1       │ 2022-08-01 │ 1       │ 1        │ 4           │ Grabfood          │ 1      │
│ 3       │ 2022-08-02 │ 2       │ 2        │ 2           │ Robinhood         │ 2      │
│ 4       │ 2022-08-03 │ 3       │ 1        │ 5           │ Grabfood          │ 3      │
│ 5       │ 2022-08-04 │ 1       │ 1        │ 2           │ Robinhood         │ 2      │
│ 6       │ 2022-08-05 │ 6       │ 1        │ 4           │ Grabfood          │ 1      │
│ 7       │ 2022-08-05 │ 10      │ 1        │ 3           │ Grabfood          │ 3      │
│ 8       │ 2022-08-09 │ 3       │ 2        │ 4           │ Grabfood          │ 1      │
│ 10      │ 2022-08-13 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
│ 12      │ 2022-08-14 │ 4       │ 1        │ 5           │ Grabfood          │ 3      │
│ 13      │ 2022-08-15 │ 5       │ 2        │ 3           │ Grabfood          │ 3      │
│ 14      │ 2022-08-15 │ 10      │ 1        │ 2           │ Robinhood         │ 2      │
│ 16      │ 2022-08-20 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
│ 18      │ 2022-08-25 │ 5       │ 1        │ 5           │ Grabfood          │ 3      │
│ 19      │ 2022-08-26 │ 5       │ 3        │ 3           │ Grabfood          │ 3      │
│ 20      │ 2022-08-29 │ 6       │ 2        │ 4           │ Grabfood          │ 1      │
│ 21      │ 2021-08-29 │ 6       │ 2        │ 4           │ Grabfood          │ 1      │
│ 22      │ 2021-08-29 │ 3       │ 1        │ 4           │ Grabfood          │ 1      │
│ 23      │ 2022-09-01 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
└─────────┴────────────┴─────────┴──────────┴─────────────┴───────────────────┴────────┘

-- Q4) Find the unique delivery order companies from the order table. Get only the name, no other data.
SELECT DISTINCT delivery_platform
FROM orders;

┌───────────────────┐
│ delivery_platform │
├───────────────────┤
│ Grabfood          │
│ Lineman           │
│ Robinhood         │
└───────────────────┘

-- Q5) Sort the orders table by quantity, largest to smallest
SELECT * FROM orders
ORDER BY quantity DESC;

┌─────────┬────────────┬─────────┬──────────┬─────────────┬───────────────────┬────────┐
│ orderid │ orderdate  │ menu_id │ quantity │ customer_id │ delivery_platform │ emp_id │
├─────────┼────────────┼─────────┼──────────┼─────────────┼───────────────────┼────────┤
│ 9       │ 2022-08-13 │ 5       │ 3        │ 1           │ Lineman           │ 1      │
│ 19      │ 2022-08-26 │ 5       │ 3        │ 3           │ Grabfood          │ 3      │
│ 2       │ 2022-08-01 │ 6       │ 2        │ 1           │ Lineman           │ 1      │
│ 3       │ 2022-08-02 │ 2       │ 2        │ 2           │ Robinhood         │ 2      │
│ 8       │ 2022-08-09 │ 3       │ 2        │ 4           │ Grabfood          │ 1      │
│ 13      │ 2022-08-15 │ 5       │ 2        │ 3           │ Grabfood          │ 3      │
│ 15      │ 2022-08-18 │ 5       │ 2        │ 1           │ Lineman           │ 1      │
│ 17      │ 2022-08-21 │ 4       │ 2        │ 1           │ Lineman           │ 1      │
│ 20      │ 2022-08-29 │ 6       │ 2        │ 4           │ Grabfood          │ 1      │
│ 21      │ 2021-08-29 │ 6       │ 2        │ 4           │ Grabfood          │ 1      │
│ 1       │ 2022-08-01 │ 1       │ 1        │ 4           │ Grabfood          │ 1      │
│ 4       │ 2022-08-03 │ 3       │ 1        │ 5           │ Grabfood          │ 3      │
│ 5       │ 2022-08-04 │ 1       │ 1        │ 2           │ Robinhood         │ 2      │
│ 6       │ 2022-08-05 │ 6       │ 1        │ 4           │ Grabfood          │ 1      │
│ 7       │ 2022-08-05 │ 10      │ 1        │ 3           │ Grabfood          │ 3      │
│ 10      │ 2022-08-13 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
│ 11      │ 2022-08-13 │ 7       │ 1        │ 5           │ Lineman           │ 3      │
│ 12      │ 2022-08-14 │ 4       │ 1        │ 5           │ Grabfood          │ 3      │
│ 14      │ 2022-08-15 │ 10      │ 1        │ 2           │ Robinhood         │ 2      │
│ 16      │ 2022-08-20 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
│ 18      │ 2022-08-25 │ 5       │ 1        │ 5           │ Grabfood          │ 3      │
│ 22      │ 2021-08-29 │ 3       │ 1        │ 4           │ Grabfood          │ 1      │
│ 23      │ 2022-09-01 │ 6       │ 1        │ 2           │ Robinhood         │ 2      │
└─────────┴────────────┴─────────┴──────────┴─────────────┴───────────────────┴────────┘



-- #### SECTION 2: Functions ####

-- Q6) Find minimum, maximum, and average unit price from the menu table (run as a single query).
SELECT 
    MIN(unit_price) AS min_price,
    MAX(unit_price) AS max_price,
    AVG(unit_price) AS avg_price
FROM menu;

┌───────────┬───────────┬───────────┐
│ min_price │ max_price │ avg_price │
├───────────┼───────────┼───────────┤
│ 50.0      │ 60.0      │ 55.0      │
└───────────┴───────────┴───────────┘

-- Q7) Select order id, date, and delivery platform, but change any occurrence of the substring "Grab" to "Cougar";
SELECT 
    orderid,
    orderdate,
    REPLACE(delivery_platform, 'Grab', 'Cougar') AS delivery_platform
FROM orders;

┌─────────┬────────────┬───────────────────┐
│ orderid │ orderdate  │ delivery_platform │
├─────────┼────────────┼───────────────────┤
│ 1       │ 2022-08-01 │ Cougarfood        │
│ 2       │ 2022-08-01 │ Lineman           │
│ 3       │ 2022-08-02 │ Robinhood         │
│ 4       │ 2022-08-03 │ Cougarfood        │
│ 5       │ 2022-08-04 │ Robinhood         │
│ 6       │ 2022-08-05 │ Cougarfood        │
│ 7       │ 2022-08-05 │ Cougarfood        │
│ 8       │ 2022-08-09 │ Cougarfood        │
│ 9       │ 2022-08-13 │ Lineman           │
│ 10      │ 2022-08-13 │ Robinhood         │
│ 11      │ 2022-08-13 │ Lineman           │
│ 12      │ 2022-08-14 │ Cougarfood        │
│ 13      │ 2022-08-15 │ Cougarfood        │
│ 14      │ 2022-08-15 │ Robinhood         │
│ 15      │ 2022-08-18 │ Lineman           │
│ 16      │ 2022-08-20 │ Robinhood         │
│ 17      │ 2022-08-21 │ Lineman           │
│ 18      │ 2022-08-25 │ Cougarfood        │
│ 19      │ 2022-08-26 │ Cougarfood        │
│ 20      │ 2022-08-29 │ Cougarfood        │
│ 21      │ 2021-08-29 │ Cougarfood        │
│ 22      │ 2021-08-29 │ Cougarfood        │
│ 23      │ 2022-09-01 │ Robinhood         │
└─────────┴────────────┴───────────────────┘


-- HINT: Use the REPLACE function (https://app.datacamp.com/learn/tutorials/sql-replace)




-- #### SECTION 3: Group By ####

-- Q8) Find the average, min, max order quantity by delivery platform
SELECT
    delivery_platform,
    AVG(quantity) AS avg_quantity,
    MIN(quantity) AS min_quantity,
    MAX(quantity) AS max_quantity
FROM orders
GROUP BY delivery_platform;

┌───────────────────┬──────────────────┬──────────────┬──────────────┐
│ delivery_platform │   avg_quantity   │ min_quantity │ max_quantity │
├───────────────────┼──────────────────┼──────────────┼──────────────┤
│ Grabfood          │ 1.5              │ 1            │ 3            │
│ Lineman           │ 2.0              │ 1            │ 3            │
│ Robinhood         │ 1.16666666666667 │ 1            │ 2            │
└───────────────────┴──────────────────┴──────────────┴──────────────┘

-- Q9) Find the number of orders by delivery platform, but filter to the delivery platform(s) with a count greater than five
SELECT
    delivery_platform,
    COUNT(*) AS order_count
FROM orders
GROUP BY delivery_platform
HAVING COUNT(*) > 5;

┌───────────────────┬─────────────┐
│ delivery_platform │ order_count │
├───────────────────┼─────────────┤
│ Grabfood          │ 12          │
│ Robinhood         │ 6           │
└───────────────────┴─────────────┘

-- Q10) Find the total number of units sold by the delivery platform
SELECT
    delivery_platform,
    SUM(quantity) AS total_units
FROM orders
GROUP BY delivery_platform;

┌───────────────────┬─────────────┐
│ delivery_platform │ total_units │
├───────────────────┼─────────────┤
│ Grabfood          │ 18          │
│ Lineman           │ 10          │
│ Robinhood         │ 7           │
└───────────────────┴─────────────┘


-- #### SECTION 4: Joins ####

-- Q11) Get the order id, order quantity, customer id, customer first name, and customer last name for all orders
SELECT 
    orders.orderid,
    orders.quantity,
    orders.customer_id,
    customers.firstname,
    customers.lastname
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id;

┌─────────┬──────────┬─────────────┬───────────┬──────────┐
│ orderid │ quantity │ customer_id │ firstname │ lastname │
├─────────┼──────────┼─────────────┼───────────┼──────────┤
│ 1       │ 1        │ 4           │ Jeno      │ Lee      │
│ 2       │ 2        │ 1           │ Mark      │ Lee      │
│ 3       │ 2        │ 2           │ Johnny    │ Suh      │
│ 4       │ 1        │ 5           │ Karina    │ Yoo      │
│ 5       │ 1        │ 2           │ Johnny    │ Suh      │
│ 6       │ 1        │ 4           │ Jeno      │ Lee      │
│ 7       │ 1        │ 3           │ Jennie    │ Kim      │
│ 8       │ 2        │ 4           │ Jeno      │ Lee      │
│ 9       │ 3        │ 1           │ Mark      │ Lee      │
│ 10      │ 1        │ 2           │ Johnny    │ Suh      │
│ 11      │ 1        │ 5           │ Karina    │ Yoo      │
│ 12      │ 1        │ 5           │ Karina    │ Yoo      │
│ 13      │ 2        │ 3           │ Jennie    │ Kim      │
│ 14      │ 1        │ 2           │ Johnny    │ Suh      │
│ 15      │ 2        │ 1           │ Mark      │ Lee      │
│ 16      │ 1        │ 2           │ Johnny    │ Suh      │
│ 17      │ 2        │ 1           │ Mark      │ Lee      │
│ 18      │ 1        │ 5           │ Karina    │ Yoo      │
│ 19      │ 3        │ 3           │ Jennie    │ Kim      │
│ 20      │ 2        │ 4           │ Jeno      │ Lee      │
│ 21      │ 2        │ 4           │ Jeno      │ Lee      │
│ 22      │ 1        │ 4           │ Jeno      │ Lee      │
│ 23      │ 1        │ 2           │ Johnny    │ Suh      │
└─────────┴──────────┴─────────────┴───────────┴──────────┘

-- Q12) Get the order id, order quantity, delivery platform, unit price and revenue (quantity * unit price) for all orders
SELECT 
    orders.orderid,
    orders.quantity,
    orders.delivery_platform,
    menu.unit_price,
    orders.quantity * menu.unit_price AS revenue
FROM orders
JOIN menu ON orders.menu_id = menu.menu_id;

┌─────────┬──────────┬───────────────────┬────────────┬─────────┐
│ orderid │ quantity │ delivery_platform │ unit_price │ revenue │
├─────────┼──────────┼───────────────────┼────────────┼─────────┤
│ 1       │ 1        │ Grabfood          │ 50.0       │ 50.0    │
│ 2       │ 2        │ Lineman           │ 55.0       │ 110.0   │
│ 3       │ 2        │ Robinhood         │ 50.0       │ 100.0   │
│ 4       │ 1        │ Grabfood          │ 50.0       │ 50.0    │
│ 5       │ 1        │ Robinhood         │ 50.0       │ 50.0    │
│ 6       │ 1        │ Grabfood          │ 55.0       │ 55.0    │
│ 7       │ 1        │ Grabfood          │ 60.0       │ 60.0    │
│ 8       │ 2        │ Grabfood          │ 50.0       │ 100.0   │
│ 9       │ 3        │ Lineman           │ 55.0       │ 165.0   │
│ 10      │ 1        │ Robinhood         │ 55.0       │ 55.0    │
│ 11      │ 1        │ Lineman           │ 55.0       │ 55.0    │
│ 12      │ 1        │ Grabfood          │ 55.0       │ 55.0    │
│ 13      │ 2        │ Grabfood          │ 55.0       │ 110.0   │
│ 14      │ 1        │ Robinhood         │ 60.0       │ 60.0    │
│ 15      │ 2        │ Lineman           │ 55.0       │ 110.0   │
│ 16      │ 1        │ Robinhood         │ 55.0       │ 55.0    │
│ 17      │ 2        │ Lineman           │ 55.0       │ 110.0   │
│ 18      │ 1        │ Grabfood          │ 55.0       │ 55.0    │
│ 19      │ 3        │ Grabfood          │ 55.0       │ 165.0   │
│ 20      │ 2        │ Grabfood          │ 55.0       │ 110.0   │
│ 21      │ 2        │ Grabfood          │ 55.0       │ 110.0   │
│ 22      │ 1        │ Grabfood          │ 50.0       │ 50.0    │
│ 23      │ 1        │ Robinhood         │ 55.0       │ 55.0    │
└─────────┴──────────┴───────────────────┴────────────┴─────────┘