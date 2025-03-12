create table gamma.people
(
    uid        uuid        default gen_random_uuid() not null
        primary key,
    full_name  varchar(255)                          not null
        unique,
    email      varchar(255)                          not null
        unique,
    password   text,
    rfid       text
        unique,
    role       varchar(20) default 'non-member'::character varying
        constraint people_role_check
            check ((role)::text = ANY
                   ((ARRAY ['member'::character varying, 'non-member'::character varying, 'admin'::character varying, 'super-admin'::character varying])::text[])),
    created_at timestamp   default CURRENT_TIMESTAMP
);

alter table gamma.people
    owner to postgres;

create index idx_people_email
    on gamma.people (role);

create index idx_people_rfid
    on gamma.people (full_name);

create table gamma.doors
(
    uid       uuid default gen_random_uuid() not null
        primary key,
    door_name varchar(100)                   not null
        unique,
    location  text
);

alter table gamma.doors
    owner to postgres;

create index idx_doors_door_name
    on gamma.doors (door_name);

create table gamma.events
(
    uid          uuid default gen_random_uuid() not null
        primary key,
    name         varchar(100)                   not null
        unique,
    start_date   date                           not null,
    end_date     date                           not null,
    days_of_week integer[],
    start_time   time,
    end_time     time
);

alter table gamma.events
    owner to postgres;

create table gamma.access_logs
(
    uid            uuid      default gen_random_uuid() not null
        primary key,
    person_uid     uuid
        references gamma.people
            on delete cascade,
    door_uid       uuid
        references gamma.doors
            on delete cascade,
    event_uid      uuid
                                                       references gamma.events
                                                           on delete set null,
    access_granted boolean                             not null,
    created_at     timestamp default CURRENT_TIMESTAMP
);

alter table gamma.access_logs
    owner to postgres;

create table gamma.permissions
(
    uid        uuid default gen_random_uuid() not null
        primary key,
    person_uid uuid                           not null
        references gamma.people
            on delete cascade,
    door_uid   uuid                           not null
        references gamma.doors
            on delete cascade,
    event_id   uuid[]
);

alter table gamma.permissions
    owner to postgres;

create table gamma.admin_log
(
    uid          uuid      default gen_random_uuid() not null
        primary key,
    admin_uid    uuid                                not null
        references gamma.people
            on delete cascade,
    type         varchar(50)                         not null
        constraint admin_log_type_check
            check ((type)::text = ANY
                   ((ARRAY ['create'::character varying, 'update'::character varying, 'delete'::character varying, 'select'::character varying])::text[])),
    table_action varchar(50)                         not null
        constraint admin_log_table_action_check
            check (check_table_exists((table_action)::text)),
    specific     varchar(255)                        not null,
    created_at   timestamp default CURRENT_TIMESTAMP
);

alter table gamma.admin_log
    owner to postgres;

