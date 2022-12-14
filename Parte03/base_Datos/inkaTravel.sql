CREATE TABLE clients(
	idClient INT,
	name VARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(100),
	type VARCHAR(15),
	urlImageAvatar TEXT,
	PRIMARY KEY(idClient)
);
CREATE TABLE tourists(
	idTourist INT,
	idClient INT,
	PRIMARY KEY(idTourist)
);
CREATE TABLE affiliates(
	idAffiliate INT,
	ruc VARCHAR(11),
	idClient INT,
	PRIMARY KEY (idAffiliate)
);
CREATE TABLE transports(
	idTransport INT,
	nameTransport VARCHAR(100),
	price INT,
	placeDeparture VARCHAR(100),
	placeArrival VARCHAR(100),
	numSeats INT,
	urlImageTransport TEXT,
	description TEXT,
	idAffiliate INT,
	PRIMARY KEY (idTransport)
);
CREATE TABLE accommodations(
	idAccommodation INT,
	nameAccommodation VARCHAR(100),
	price INT,
	ubication VARCHAR (100),
	capacity INT,
	urlImageAccommodation TEXT,
	description TEXT,
	idAffiliate INT,
	PRIMARY KEY (idAccommodation)
);
CREATE TABLE touristPlaces(
	idTouristPlace INT,
	nameTouristPlace VARCHAR(100),
	price INT,
	ubication VARCHAR(100),
	urlImageTouristPlace TEXT,
	description TEXT,
	idAffiliate INT,
	PRIMARY KEY (idTouristPlace)
);
CREATE TABLE buys(
	idBuy INT,
	dateBuy DATE,
	numPersons INT,
	price INT,
	dateStart DATE,
	dateEnd DATE,
	idTourist INT,
	idTravelPackage INT,
	PRIMARY KEY (idBuy)
);
CREATE TABLE travelPackages(
	idTravelPackage INT,
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
select * from clients
