import { ReactElement, useState, memo } from 'react'
import {
  useCombobox,
  useMultipleSelection,
  UseMultipleSelectionProps,
  UseComboboxState,
  UseComboboxStateChangeOptions,
} from 'downshift'
import { CheckCircle, ArrowDown } from '@components'
import { matchSorter } from 'match-sorter'
import {
  Stack,
  List,
  ListItem,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  HStack,
  Icon,
  IconButton,
  Flex,
} from '@chakra-ui/react'
import Highlighter from 'react-highlight-words'

export interface Item {
  label: string
  value: string
}

const defaultOptionsFilter = <T,>(items: T[], inputValue: string): T[] =>
  matchSorter(items, inputValue, { keys: ['value', 'label'] })

export interface MultiselectProps<T extends Item> extends UseMultipleSelectionProps<T> {
  items: T[]
  placeholder: string
  onSelectItem: (item: T) => void
  optionsFilter?: (items: T[], inputValue: string) => T[]
}

const itemRenderer = <T extends Item>(selectedItem: T): string => selectedItem.label

export const MultiSelect = memo(
  <T extends Item>({
    items,
    onSelectItem,
    placeholder,
    optionsFilter = defaultOptionsFilter,
    ...downshiftProps
  }: MultiselectProps<T>): ReactElement => {
    const [inputValue, setInputValue] = useState('')
    const [filteredItems, setFilteredItems] = useState<T[]>(optionsFilter(items, ''))

    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems,
    } = useMultipleSelection(downshiftProps)
    const selectedItemValues = selectedItems.map((i) => i.value)

    const handleItemClick = (item: T): void => {
      onSelectItem(item)
      if (selectedItemValues.includes(item.value)) {
        removeSelectedItem(item)
      } else {
        addSelectedItem(item)
      }
    }

    const stateReducer = (
      state: UseComboboxState<Item>,
      actionAndChanges: UseComboboxStateChangeOptions<Item>
    ): Partial<UseComboboxState<Item>> => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(changes.inputValue)
          setFilteredItems(optionsFilter(items, changes.inputValue))
          return {
            ...changes,
            inputValue: changes.inputValue,
          }
        case useCombobox.stateChangeTypes.ItemClick:
          handleItemClick(changes.selectedItem as T)
          return {
            ...changes,
            isOpen: true,
          }
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
          handleItemClick(changes.selectedItem as T)
          setInputValue('')
          setFilteredItems(optionsFilter(items, ''))
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            inputValue: '',
            isOpen: true,
          }
        default: {
          return changes
        }
      }
    }

    const {
      isOpen,
      getItemProps,
      getToggleButtonProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      openMenu,
    } = useCombobox({
      inputValue: inputValue,
      selectedItem: undefined,
      items: filteredItems,
      stateReducer,
    })

    const handleOpenMenu = (): void => {
      if (!isOpen) {
        openMenu()
      }
    }
    return (
      <Stack {...getComboboxProps()}>
        {selectedItems && (
          <Flex flexDir="row" wrap="wrap" gridGap={2}>
            {selectedItems.map((selectedItem, index) => (
              <Tag
                {...getSelectedItemProps({ selectedItem, index })}
                key={index}
                size="lg"
                borderRadius="full"
                variant="solid"
                bg="gray.200"
                color="black"
              >
                <TagLabel>{selectedItem.label}</TagLabel>
                <TagCloseButton onClick={() => removeSelectedItem(selectedItem)} />
              </Tag>
            ))}
          </Flex>
        )}
        <Stack>
          <Flex>
            <Input
              {...getInputProps(
                getDropdownProps({
                  placeholder,
                  onClick: handleOpenMenu,
                  onFocus: handleOpenMenu,
                })
              )}
              roundedEnd={0}
              id="searchInput"
              autoComplete="off"
            />
            <IconButton
              {...getToggleButtonProps({})}
              roundedStart={0}
              borderRadiusLeft="none"
              aria-label="toggle-menu"
              bg="white"
              color="black"
              icon={<ArrowDown strokeWidth={3} w={2} h={2} />}
            />
          </Flex>
          <List
            {...getMenuProps({})}
            aria-expanded={isOpen}
            fontSize="16px"
            bg="white"
            color="black"
            borderRadius="md"
            display={isOpen ? 'block' : 'none'}
          >
            {isOpen &&
              filteredItems.length &&
              filteredItems.map((item, index) => (
                <ListItem
                  {...getItemProps({
                    item,
                    index,
                  })}
                  px={4}
                  py={2}
                  key={`${item.value}${index}`}
                  _selected={highlightedIndex === index && { bg: 'gray.100' }}
                  _hover={{ bg: 'gray.100' }}
                >
                  <HStack>
                    {selectedItemValues.includes(item.value) && (
                      <Icon
                        as={CheckCircle}
                        strokeWidth={3}
                        color="green.500"
                        role="img"
                        display="inline"
                        aria-label="Selected"
                      />
                    )}
                    <Highlighter
                      autoEscape
                      searchWords={[inputValue || '']}
                      textToHighlight={itemRenderer(item)}
                    />
                  </HStack>
                </ListItem>
              ))}
          </List>
        </Stack>
      </Stack>
    )
  }
)
