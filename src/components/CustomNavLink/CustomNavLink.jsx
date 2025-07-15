import { NavLink, ThemeIcon } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';

const CustomNavLink = ({ label, isActive }) => {
  return (
    <NavLink
      label={label}
      rightSection={isActive ? <ThemeIcon size={6} radius="xl" color="blue" /> : null}
      leftSection={label === 'Обо мне' ? <IconUserCircle size={18} /> : null}
      styles={{
        label: {
          whiteSpace: 'nowrap',
          color: isActive ? 'black' : '#0F0F1080',
          fontWeight: 700,
        },
      }}
      px="sm"
      py={4}
    />
  );
};

export default CustomNavLink;
