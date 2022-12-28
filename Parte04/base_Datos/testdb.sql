CREATE SEQUENCE users_id_seq START WITH 1;
CREATE TABLE users(
	id integer not null default nextval('users_id_seq'),
	username  VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	createdAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	updatedAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	PRIMARY KEY(id)
);
--
CREATE TABLE roles(
	id integer not null,
	username  VARCHAR(255),
	createdAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	updatedAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	PRIMARY KEY(id)
);
--
CREATE TABLE user_roles(
	createdAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	updatedAt timestamp with time zone not null DEFAULT ('now'::text)::timestamp,
	roleId integer REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
	userId integer REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY(roleId)
);
--
select * from roles;
select * from users;
select * from user_roles;
