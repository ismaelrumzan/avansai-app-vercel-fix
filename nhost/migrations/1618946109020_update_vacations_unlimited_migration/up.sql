update work_vacation_durations
set value = 'UNLIMITED'
where value = 'FULL_TIME_OR_CONTRACT';
