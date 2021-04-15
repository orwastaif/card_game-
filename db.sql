CREATE DATABASE IF NOT EXISTS sword;
CREATE USER IF NOT EXISTS 'ostaif'@'localhost' IDENTIFIED BY 'securepass';
ALTER  USER 'ostaif'@'localhost' IDENTIFIED with mysql_native_password BY 'securepass';
GRANT ALL ON sword.* TO 'ostaif'@'localhost';

use sword;
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    LOGIN VARCHAR(30) UNIQUE,
    password VARCHAR(100) ,
    full_name VARCHAR(30) UNIQUE ,
    email VARCHAR(50) UNIQUE,
    status VARCHAR(20) default('user') NOT NULL
);

CREATE TABLE IF NOT EXISTS decks (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    deck_name VARCHAR(30),
    cards_list TEXT
);

CREATE TABLE IF NOT EXISTS cards (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    mana INT,
    card_name VARCHAR(30) UNIQUE KEY,
    hp INT,
    damage INT
);

INSERT INTO decks (deck_name, cards_list)
VALUES ('test_deck', 
    'Altron,Antman,Black_Panther,Black_Widow,Captain_Marvel,Captain_Americag,dct_strange,Falcon,Hawkeye,Hela,Hulk,Ironman,Loki,Mysterio,Nick_Fury,Ronan,Spiderman,Thanos,Thor,Vulture'
);

