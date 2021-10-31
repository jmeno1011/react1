CREATE TABLE maintest.linechart
(
    _idLine INT PRIMARY KEY AUTO_INCREMENT,
    dogs int,
    cats int
);

insert into maintest.linechart (dogs, cats) values(0,0);
insert into maintest.linechart (dogs, cats) values(10,5);
insert into maintest.linechart (dogs, cats) values(23,15);
insert into maintest.linechart (dogs, cats) values(17,9);
insert into maintest.linechart (dogs, cats) values(18,10);
insert into maintest.linechart (dogs, cats) values(9,5);
insert into maintest.linechart (dogs, cats) values(11,3);
insert into maintest.linechart (dogs, cats) values(27,19);

CREATE TABLE maintest.barchart
(
    City varchar(100),
    Population2010 int,
    Population2000 int
);

insert into maintest.barchart (City, Population2010, Population2000) values( 'New York City, NY', 8175000, 8008000 );
insert into maintest.barchart (City, Population2010, Population2000) values( 'Los Angeles, CA', 3792000, 3694000 );
insert into maintest.barchart (City, Population2010, Population2000) values( 'Chicago, IL', 2695000, 2896000 );
insert into maintest.barchart (City, Population2010, Population2000) values( 'Houston, TX', 2099000, 1953000 );
insert into maintest.barchart (City, Population2010, Population2000) values( 'Philadelphia, PA', 1526000, 1517000 );