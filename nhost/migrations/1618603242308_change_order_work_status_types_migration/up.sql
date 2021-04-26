update work_status_types
set "order" = '1.1'
where value = 'FULL_TIME';

update work_status_types
set "order" = '1'
where value = 'CONTRACT';

update work_status_types
set "order" = '0'
where value = 'FULL_TIME';
