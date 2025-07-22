import { List, Box } from '@mantine/core';

import VacanciesListItem from '../VacanciesListItem';

const VacanciesList = ({ data }) => {
  const vacanciesItems = data.map((item) => {
    return <VacanciesListItem item={item} key={item.id} />;
  });

  return (
    <Box w="65%">
      <List listStyleType="none" w="100%">
        {vacanciesItems}
      </List>
    </Box>
  );
};

export default VacanciesList;
