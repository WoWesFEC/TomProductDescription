DROP DATABASE IF EXISTS FECdata;

CREATE DATABASE FECdata;

USE FECdata;

CREATE TABLE items (
  id int,
  name text,
  image text,
  description text,
  specs text,
  rating decimal(2,1),
  price decimal(6,2),
  extra_url1 text,
  extra_url2 text,
  extra_url3 text,
  extra_url4 text,
  extra_url5 text,
  category text
);
