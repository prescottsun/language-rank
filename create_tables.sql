CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ranking_scale_id INTEGER REFERENCES ranking_scale (id)
);

CREATE TABLE ranking_scale (
    id SERIAL PRIMARY KEY,
    rank_name TEXT NOT NULL,
    points INTEGER CHECK (points >= 0 AND points <= 5)
);

INSERT INTO topics (name)
    VALUES ('HTML'),
    ('CSS'),
    ('Javascript'),
    ('PostgreSQL'),
    ('Node'),
    ('Express')
;

INSERT INTO ranking_scale (rank_name, points)
    VALUES ('Awesome', 5),
    ('Great', 4),
    ('Good', 3),
    ('Okay', 2),
    ('Poor', 1),
    ('Unranked', 0)
;

UPDATE topics
    SET ranking_scale_id = 6
    ;
