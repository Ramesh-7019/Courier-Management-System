CREATE DATABASE courierdb;
USE courierdb;
CREATE TABLE courier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_name VARCHAR(100) NOT NULL,
    receiver_name VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL
);
INSERT INTO courier (sender_name, receiver_name, destination)
VALUES
('Anita', 'Priya', 'Hubli');

SELECT * FROM courier;