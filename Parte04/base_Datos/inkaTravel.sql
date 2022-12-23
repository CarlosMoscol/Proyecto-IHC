--Creación de tablas para la base de datos relacional
CREATE TABLE clients(
	idClient SERIAL,
	name VARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(100),
	type VARCHAR(15),
	PRIMARY KEY(idClient)
);
CREATE TABLE tourists(
	idTourist SERIAL,
	idClient INT REFERENCES clients(idclient) ON DELETE CASCADE,
	PRIMARY KEY(idTourist)
);
CREATE TABLE affiliates(
	idAffiliate SERIAL,
	ruc VARCHAR(11),
	idClient INT REFERENCES clients(idclient) ON DELETE CASCADE,
	PRIMARY KEY (idAffiliate)
);
CREATE TABLE transports(
	idTransport SERIAL,
	nameTransport VARCHAR(100),
	price INT,
	placeDeparture VARCHAR(100),
	placeArrival VARCHAR(100),
	numSeats INT,
	urlImageTransport TEXT,
	description TEXT,
	idAffiliate INT REFERENCES affiliates(idAffiliate) ON DELETE CASCADE,
	PRIMARY KEY (idTransport)
);
CREATE TABLE accommodations(
	idAccommodation SERIAL,
	nameAccommodation VARCHAR(100),
	price INT,
	ubication VARCHAR (100),
	capacity INT,
	urlImageAccommodation TEXT,
	description TEXT,
	idAffiliate INT REFERENCES affiliates(idAffiliate) ON DELETE CASCADE,
	PRIMARY KEY (idAccommodation)
);
CREATE TABLE touristPlaces(
	idTouristPlace SERIAL,
	nameTouristPlace VARCHAR(100),
	price INT,
	ubication VARCHAR(100),
	urlImageTouristPlace TEXT,
	description TEXT,
	idAffiliate INT REFERENCES affiliates(idAffiliate) ON DELETE CASCADE,
	PRIMARY KEY (idTouristPlace)
);
CREATE TABLE travelPackages(
	idTravelPackage SERIAL,
	arrayTouristPlaces JSON,
	arrayAccommodations JSON,
	arrayTransports TEXT,
	belong VARCHAR(20),
	price INT,
	type VARCHAR(50),
	calification INT,
	description TEXT,
	PRIMARY KEY(idTravelPackage)
);
CREATE TABLE buys(
	idBuy SERIAL,
	dateBuy DATE,
	numPersons INT,
	price INT,
	dateStart DATE,
	dateEnd DATE,
	idTourist INT REFERENCES tourists(idTourist) ON DELETE CASCADE,
	idTravelPackage INT REFERENCES travelPackages(idTravelPackage) ON DELETE CASCADE,
	PRIMARY KEY (idBuy)
);

--mostrar tabla <nombre_tabla>:
select * from clients
select * from tourists
select * from affiliates
select * from transports
select * from accommodations
select * from touristPlaces
select * from buys
select * from travelPackages

--Ejemplo de query para insertar datos de una tabla a otra:
INSERT INTO tourists (idclient) SELECT idclient FROM clients WHERE type='turista' AND idclient NOT IN (SELECT idclient FROM tourists)

-- Ejemplo de actualización de cliente
UPDATE clients SET name = 'prueba previa', email ='ejm.prev@email.com', password='contra123' WHERE idclient=5

--Ejemplo de borrado de un cliente:
DELETE FROM clients WHERE idclient = 3;

-- Modificar clave foranea para poder hacer un borrado en cascada desde la tabla cliente
-----------------------------------
ALTER TABLE affiliates ADD FOREIGN KEY(idclient)
REFERENCES clients(idclient) ON DELETE CASCADE;
-----------------------------------

--Testeo previo:
--borrar tablas:
--drop table clients;
--DROP TABLE tourists;
--drop table affiliates;
--drop table transports;
--drop table accommodations;
--drop table touristPlaces;
--drop table buys;
--drop table travelPackages;