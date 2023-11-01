
create TABLE players(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    point INTEGER
);

-- create TABLE points(
--     point INTEGER,
--     user_id INTEGER,
--     FOREIGN KEY (user_id) REFERENCES person (id)
-- );