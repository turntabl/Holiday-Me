--- DATABASE FOR HOLIDAY ME ---

DROP TABLE IF EXISTS requests cascade;
DROP TABLE IF EXISTS request_status cascade;                          

--- REQUEST STATUS ---

CREATE TABLE request_status(
    request_status_id serial primary key NOT NULL,
    req_status varchar(10) 
);

--- REQUESTS TABLE ---

CREATE TABLE requests(
    request_id serial primary key NOT NULL,
    requester_id int references employee(employee_id) NOT NULL,
    requester_start_date date NOT NULL,
    requester_end_date date NOT NULL,
    requester_reason text NOT NULL,
    request_status_id int references request_status(request_status_id) NOT NULL default 1 
);

--- -------------------------------------------------------------------------------------------- ---
                        --- Dumping table for employees ---
--- -------------------------------------------------------------------------------------------- ---

INSERT INTO request_status(req_status) VALUES ('PENDING');
INSERT INTO request_status(req_status) VALUES ('DECLINED');
INSERT INTO request_status(req_status) VALUES ('APPROVED');

--- -------------------------------------------------------------------------------------------- ---
                        --- Dumping table for requests ---
--- -------------------------------------------------------------------------------------------- ---

INSERT INTO requests(requester_id, requester_start_date, requester_end_date, requester_reason, request_status_id) values(1,'2020-02-20', '2020-02-25', 'I need a break', 2);
INSERT INTO requests(requester_id, requester_start_date, requester_end_date, requester_reason, request_status_id) values(1,'2020-02-20', '2020-02-25', 'volunteering', 3);
INSERT INTO requests(requester_id, requester_start_date, requester_end_date, requester_reason, request_status_id) values(1,'2020-02-20', '2020-02-25','need a rest', 1);
