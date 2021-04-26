delete from work_status_types where value = 'CONTRACT';
delete from work_status_types where value = 'FULL_TIME';
delete from work_status_types where value = 'FULL_TIME_OR_CONTRACT';

INSERT INTO work_status_types("value", "order")
VALUES ('CONTRACT', '0'),
       ('FULL_TIME', '1'),
       ('FULL_TIME_OR_CONTRACT', '2');
