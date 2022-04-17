CREATE SCHEMA `online_coffee`;

use `online_coffee`;

CREATE TABLE `products`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(255) NOT NULL ,
  `price` 		  INT(10) NOT NULL ,
  `quantity`      INT NULL ,
  `description`   TEXT NULL ,
  `comments`      TEXT NULL ,
  `rating`        INT(3) NULL ,
  `imageURL`      VARCHAR(255) NULL ,
  `imageCredits`  TEXT NULL,
  `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`name`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE `users`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `firstName`     VARCHAR(255) NULL ,
  `lastName` 	  VARCHAR(255) NULL ,
  `email`      	  VARCHAR(255) NOT NULL ,
  `password`      VARCHAR(255) NOT NULL ,
  `role`		  VARCHAR(255) NULL ,
  `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_email_unique` (`email`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO users (firstName, lastName, email, password, role)
values
('Alin', 'Ion', 'alin.ion@admin.com', 'pmWkWSBCL51Bfkhn79xPuKBKHz//H6B+mY6G9/eieuM=', 'admin'),
('Alin', 'Andrei', 'alin.andrei@gmail.com', 'pmWkWSBCL51Bfkhn79xPuKBKHz//H6B+mY6G9/eieuM=', 'user');

INSERT INTO products (name, price, rating, quantity, description, comments, imageURL, imageCredits)
values
('Espresso', 7, 4, 5, 'Espresso is the name of a highly concentrated, bittersweet coffee originating in Italy in the early 20th century.', 'Very good.\nI drink this every morning.', 'https://img.freepik.com/free-photo/closeup-classic-fresh-espresso-served-dark-surface_1220-5375.jpg?t=st=1649424194~exp=1649424794~hmac=a923997fdd6cacd505ed5dd4f863beb6b087200b6b49ce771f62733723b2455c&w=740', 'Espresso coffee photo created by valeria_aksakova'),
('Macchiato', 5, 2, 5, '', '', 'https://img.freepik.com/free-photo/hot-caramel-macchiato_1339-7011.jpg?w=740&t=st=1650143878~exp=1650144478~hmac=ea8e898882b43fd8297e57483bcf6cc046831d66417407855278c947a4ae27a6', 'Macchiato photo created by topntp26'),
('Iced Coffee', 6, 3, 5, '', '', 'https://img.freepik.com/free-photo/glass-foamy-cold-coffee-with-whipped-cream-chocolate-wooden-plate_114579-90914.jpg?w=740&t=st=1650143813~exp=1650144413~hmac=14a0f9fd94e5b74384c8a2ce1b42b5d44d09c9fe01186c76e3f047a589866c30', 'Cold coffee photo created by azerbaijan_stockers'),
('Cappuccino', 5, 5, 5, '', '', 'https://img.freepik.com/free-photo/wooden-table-with-cup-coffee_1203-1631.jpg?w=740&t=st=1650143851~exp=1650144451~hmac=bbbe42591bef655806395266d5103291608834b9a5466da53a44713cb0712580', 'Latte art photo created by mrsiraphol'),
('Affogato', 8, 1, 5, '', '', 'https://img.freepik.com/free-photo/affogato-coffee-with-ice-cream-served-glass_93675-135264.jpg?t=st=1650143900~exp=1650144500~hmac=d185350a00f36972442c270c4469ffed30b875508b5d455a2714758ac3841c3d&w=740', 'Ice coffee photo created by fabrikasimf'),
('Mocha', 3, 2, 5, '', '', 'https://img.freepik.com/free-photo/hot-mocha-coffee_1339-2386.jpg?t=st=1650143943~exp=1650144543~hmac=1f1c499ac965228e773ebca764aa0c4d8f61219d82eb8608ebe0cad9a9814dd1&w=740', 'Coffee latte photo created by topntp26');