import { ReactElement } from 'react'
import { SearchInput } from './SearchInput'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'

interface SearchBoxProps {
  onSelectAddress: (address: string, latitude: number | null, longitude: number | null) => void
  defaultValue: string
}

const libraries: Libraries = ['places']

export const SearchBox = ({ onSelectAddress, defaultValue }: SearchBoxProps): ReactElement => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? '',
    libraries,
  })

  if (!isLoaded) {
    return null
  }

  if (loadError) {
    console.error('There was an error loading google maps')
  }
  return <SearchInput onSelectAddress={onSelectAddress} defaultValue={defaultValue} />
}
