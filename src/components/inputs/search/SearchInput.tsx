import { ReactElement, useRef } from 'react'
import { Box, Input, List, ListItem, Stack } from '@chakra-ui/react'
import { useCombobox, UseComboboxState } from 'downshift'

import usePlacesAutocomplete, { Suggestion, getLatLng, getGeocode } from 'use-places-autocomplete'

interface SearchInputProps {
  onSelectAddress: (address: string, latitude: number | null, longitude: number | null) => void
  defaultValue: string
}

export const SearchInput = ({ onSelectAddress, defaultValue }: SearchInputProps): ReactElement => {
  const inputRef = useRef(null)
  const menuRef = useRef(null)
  const itemRef = useRef(null)

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    defaultValue,
  })

  const handleSelectAddress = async (address: string): Promise<void> => {
    setValue(address)
    clearSuggestions()
    try {
      const results = await getGeocode({ address })
      const { lat, lng } = await getLatLng(results[0])
      onSelectAddress(address, lat, lng)
    } catch (e) {
      console.error('there was an error', e)
    }
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu,
    setHighlightedIndex,
  } = useCombobox({
    inputValue: value,
    selectedItem: undefined,
    items: data,
    onInputValueChange: ({ inputValue }) => {
      setValue(inputValue)
      if (inputValue.trim() === '') {
        onSelectAddress('', null, null)
      }
    },
    stateReducer: (state: UseComboboxState<Suggestion>, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setValue(changes.inputValue)
          return {
            ...changes,
            isOpen: true,
          }
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            isOpen: false,
          }
        case useCombobox.stateChangeTypes.InputKeyDownArrowDown: {
          setHighlightedIndex(changes.highlightedIndex)
          return {
            ...changes,
          }
        }
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          handleSelectAddress(changes.selectedItem.description)
          selectItem(changes.selectedItem)
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: changes.selectedItem.description,
            isOpen: false,
          }
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          return {
            ...changes,
            inputValue: changes.selectedItem.description,
          }
        default:
          return changes
      }
    },
  })

  const handleInputClick = (): void => {
    if (!isOpen && status === 'OK' && data.length) {
      openMenu()
    }
  }

  return (
    <Stack {...getComboboxProps()}>
      <Input
        {...getInputProps({
          ref: inputRef,
          placeholder: 'Your postal/zip code...',
          onClick: handleInputClick,
        })}
        disabled={!ready}
        value={value}
        id="searchInput"
        autoComplete="off"
        aria-autocomplete="list"
      />
      <Box>
        <List
          {...getMenuProps({
            ref: menuRef,
          })}
          aria-expanded={isOpen}
          bg="white"
          color="black"
          borderRadius="md"
          variant="search"
          display={status === 'OK' && isOpen ? 'block' : 'none'}
        >
          {isOpen &&
            status === 'OK' &&
            data.map(({ place_id, description }, index) => {
              return (
                <ListItem
                  variant="search"
                  value={value}
                  px={4}
                  py={2}
                  {...getItemProps({
                    item: description,
                    index,
                    ref: itemRef,
                  })}
                  aria-selected={highlightedIndex === index}
                  _selected={highlightedIndex === index && { background: 'gray.100' }}
                  key={place_id}
                >
                  {description}
                </ListItem>
              )
            })}
        </List>
      </Box>
    </Stack>
  )
}
