CREATE TABLE public.age_group (
    id integer NOT NULL,
    sort_order integer NOT NULL,
    label bpchar NOT NULL
);
COMMENT ON TABLE public.age_group IS 'Age group categories';
CREATE SEQUENCE public.age_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.age_group_id_seq OWNED BY public.age_group.id;
CREATE TABLE public.check_in_record (
    id bigint NOT NULL,
    member_id integer NOT NULL,
    type bpchar NOT NULL,
    parent_first_name bpchar NOT NULL,
    parent_last_name bpchar NOT NULL,
    street_address bpchar NOT NULL,
    city bpchar NOT NULL,
    state bpchar NOT NULL,
    zip_code bpchar NOT NULL,
    primary_phone bpchar NOT NULL,
    alternate_phone_1 bpchar NOT NULL,
    alternate_phone_2 bpchar NOT NULL,
    email bpchar NOT NULL,
    dob_month integer NOT NULL,
    dob_day integer NOT NULL,
    dob_year integer NOT NULL,
    group_name bpchar NOT NULL,
    contact_name bpchar NOT NULL,
    contact_relationship bpchar NOT NULL,
    contact_phone bpchar NOT NULL,
    gender_id integer NOT NULL,
    age_id integer NOT NULL,
    race_id integer NOT NULL,
    race_other bpchar NOT NULL,
    waiver_date date NOT NULL,
    waiver_agree boolean NOT NULL,
    check_in_date date NOT NULL,
    check_out_date date NOT NULL,
    auto_checkout boolean DEFAULT false NOT NULL,
    date_added date NOT NULL,
    added_by bpchar NOT NULL,
    date_updated date NOT NULL,
    updated_by bpchar NOT NULL
);
COMMENT ON TABLE public.check_in_record IS 'On-site front desk check-in records';
CREATE SEQUENCE public.check_in_record_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.check_in_record_id_seq OWNED BY public.check_in_record.id;
CREATE TABLE public.facility (
    id integer NOT NULL,
    name bpchar NOT NULL
);
CREATE SEQUENCE public.facility_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.facility_id_seq OWNED BY public.facility.id;
CREATE TABLE public.facility_zone (
    id integer NOT NULL,
    name bpchar NOT NULL,
    show_at_checkin boolean NOT NULL,
    added_by integer NOT NULL,
    dated_added date NOT NULL,
    updated_by integer NOT NULL,
    date_updated date NOT NULL,
    status_id integer NOT NULL,
    facility integer NOT NULL
);
CREATE SEQUENCE public.facility_zone_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.facility_zone_id_seq OWNED BY public.facility_zone.id;
CREATE TABLE public.gender (
    id integer NOT NULL,
    sort_order integer NOT NULL,
    label bpchar NOT NULL
);
CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;
CREATE TABLE public.member (
    id integer NOT NULL,
    auth0_user_id integer NOT NULL,
    first_name bpchar NOT NULL,
    last_name bpchar NOT NULL,
    organization bpchar NOT NULL,
    email bpchar NOT NULL,
    phone bpchar NOT NULL,
    group_participation bpchar NOT NULL,
    skills_interests bpchar NOT NULL,
    open_to_commissions boolean DEFAULT false NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    subscribed_to_emails boolean DEFAULT false NOT NULL,
    subscription_source bpchar NOT NULL,
    opted_in boolean DEFAULT false NOT NULL,
    event_announcements boolean DEFAULT false NOT NULL,
    newsletters boolean DEFAULT false NOT NULL,
    access_level integer NOT NULL,
    created_on date NOT NULL,
    last_updated date NOT NULL,
    last_login date,
    balance money DEFAULT 0 NOT NULL,
    total_donated money DEFAULT 0 NOT NULL,
    membership_enabled boolean NOT NULL,
    membership_level bpchar NOT NULL,
    membership_status bpchar NOT NULL,
    member_since date NOT NULL,
    renewal_date date NOT NULL,
    renewal_date_last_changed date NOT NULL,
    level_last_changed date NOT NULL,
    access_by_others boolean NOT NULL,
    details_to_show bpchar NOT NULL,
    photo_albums boolean DEFAULT false NOT NULL,
    bundle_or_email bpchar NOT NULL,
    member_role bpchar NOT NULL,
    notes bpchar NOT NULL,
    updated_by integer
);
COMMENT ON TABLE public.member IS 'Full list of all members, past and present';
CREATE SEQUENCE public.member_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.member_id_seq OWNED BY public.member.id;
CREATE TABLE public.race (
    id integer NOT NULL,
    sort_order integer NOT NULL,
    lable bpchar NOT NULL
);
CREATE SEQUENCE public.race_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.race_id_seq OWNED BY public.race.id;
ALTER TABLE ONLY public.age_group ALTER COLUMN id SET DEFAULT nextval('public.age_group_id_seq'::regclass);
ALTER TABLE ONLY public.check_in_record ALTER COLUMN id SET DEFAULT nextval('public.check_in_record_id_seq'::regclass);
ALTER TABLE ONLY public.facility ALTER COLUMN id SET DEFAULT nextval('public.facility_id_seq'::regclass);
ALTER TABLE ONLY public.facility_zone ALTER COLUMN id SET DEFAULT nextval('public.facility_zone_id_seq'::regclass);
ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);
ALTER TABLE ONLY public.member ALTER COLUMN id SET DEFAULT nextval('public.member_id_seq'::regclass);
ALTER TABLE ONLY public.race ALTER COLUMN id SET DEFAULT nextval('public.race_id_seq'::regclass);
ALTER TABLE ONLY public.age_group
    ADD CONSTRAINT age_group_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.check_in_record
    ADD CONSTRAINT check_in_record_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.facility
    ADD CONSTRAINT facility_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.facility_zone
    ADD CONSTRAINT facility_zone_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_user_id_key UNIQUE (auth0_user_id);
ALTER TABLE ONLY public.race
    ADD CONSTRAINT race_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.check_in_record
    ADD CONSTRAINT check_in_record_age_id_fkey FOREIGN KEY (age_id) REFERENCES public.age_group(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.check_in_record
    ADD CONSTRAINT check_in_record_gender_id_fkey FOREIGN KEY (gender_id) REFERENCES public.gender(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.check_in_record
    ADD CONSTRAINT check_in_record_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.member(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.check_in_record
    ADD CONSTRAINT check_in_record_race_id_fkey FOREIGN KEY (race_id) REFERENCES public.race(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.facility_zone
    ADD CONSTRAINT facility_zone_facility_fkey FOREIGN KEY (facility) REFERENCES public.facility(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.member(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
