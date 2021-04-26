import {
  Work_Location_Types,
  Work_Status_Types,
  Work_Vacation_Durations,
} from 'src/generated/graphql'

export interface WorkBasicsQuery {
  vacations: Work_Vacation_Durations[]
  workLocation: Work_Location_Types[]
  workStatus: Work_Status_Types[]
}
