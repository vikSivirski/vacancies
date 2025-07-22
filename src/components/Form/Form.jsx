import { TextInput, Button, Flex } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const Form = ({ type, label = '', placeholder, style }) => {
  const submitBtnName = (type) => {
    switch (type) {
      case 'search':
        return 'Найти';
      case 'add':
        return '+';
      default:
        break;
    }
  };

  return (
    <form>
      <Flex gap="sm">
        <TextInput
          label={label}
          size="md"
          placeholder={placeholder}
          leftSection={type === 'search' ? <IconSearch size={18} /> : null}
          style={style}
        />
        <Button size="md" type="submit" color="blue">
          {submitBtnName(type)}
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
