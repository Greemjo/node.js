-- Table: public."Aerport"

-- DROP TABLE public."Aerport";

CREATE TABLE public."Aerport"
(
    id integer NOT NULL DEFAULT nextval('"Aerport_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    country text COLLATE pg_catalog."default" NOT NULL,
    region text COLLATE pg_catalog."default" NOT NULL,
    "img-url" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Aerport_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Aerport"
    OWNER to postgres;


-- Table: public."Flight"

-- DROP TABLE public."Flight";

CREATE TABLE public."Flight"
(
    id integer NOT NULL DEFAULT nextval('"Flight_id_seq"'::regclass),
    airport_from_id integer NOT NULL,
    airport_to_id integer NOT NULL,
    seat_count integer NOT NULL,
    start_date date NOT NULL,
    status text COLLATE pg_catalog."default" NOT NULL,
    airplane_name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Flight_pkey" PRIMARY KEY (id),
    CONSTRAINT fk_flight_from FOREIGN KEY (airport_from_id)
        REFERENCES public."Aerport" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_flight_to FOREIGN KEY (airport_to_id)
        REFERENCES public."Aerport" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Flight"
    OWNER to postgres;


-- Table: public."Ticket"

-- DROP TABLE public."Ticket";

CREATE TABLE public."Ticket"
(
    id integer NOT NULL DEFAULT nextval('"Ticket_id_seq"'::regclass),
    flight_id integer NOT NULL,
    passenger_name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Ticket_pkey" PRIMARY KEY (id),
    CONSTRAINT fk_ticket FOREIGN KEY (flight_id)
        REFERENCES public."Flight" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Ticket"
    OWNER to postgres;