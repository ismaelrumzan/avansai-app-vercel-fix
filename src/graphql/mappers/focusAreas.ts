import { Focus_Areas } from 'src/generated/graphql'

export const moveOptionOtherToEnd = (focusAreas: Focus_Areas[]): Focus_Areas[] => {
  const otherOption = focusAreas.find(({ value }) => value === 'OTHER')
  const focusAreasWithoutOtherOption = focusAreas.filter(({ value }) => value !== 'OTHER')
  return [...focusAreasWithoutOtherOption, otherOption]
}
