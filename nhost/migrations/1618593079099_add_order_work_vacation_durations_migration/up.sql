delete from work_vacation_durations where value = 'NO_PREFERENCE';
delete from work_vacation_durations where value = 'ONE_WEEK';
delete from work_vacation_durations where value = 'TWO_WEEKS';
delete from work_vacation_durations where value = 'THREE_WEEKS';
delete from work_vacation_durations where value = 'FOUR_WEEKS';
delete from work_vacation_durations where value = 'FIVE_WEEKS';
delete from work_vacation_durations where value = 'UNLIMITED';

INSERT INTO work_vacation_durations("value", "order")
VALUES ('NO_PREFERENCE', '0'),
       ('ONE_WEEK', '1'),
       ('TWO_WEEKS', '2'),
       ('THREE_WEEKS', '3'),
       ('FOUR_WEEKS', '4'),
       ('FIVE_WEEKS', '5'),
       ('FULL_TIME_OR_CONTRACT', '6');
