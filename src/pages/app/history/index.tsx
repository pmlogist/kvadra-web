import {
  Box,
  Center,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useQuery } from "react-query";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { API } from "@/lib/api";
import { withAuthServerSideProps } from "@/middlewares";

const HistoryPage = () => {
  const { data, isLoading } = useQuery("getHistories", API.HISTORIES.ALL);

  return (
    <Page title="History">
      <Heading m={4}>History</Heading>
      {isLoading ? (
        <Center h="full">
          <Spinner h={200} w={200} />
        </Center>
      ) : (
        <Box maxW="3xl" mx="auto">
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>Game</Th>
                  <Th>Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((game) => (
                  <Tr key={game.id}>
                    <Td>{game.title}</Td>
                    <Td>{`${game.score} / ${
                      Object.keys(game.results).length
                    }`}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Page>
  );
};
HistoryPage.getLayout = AppLayout;
export default HistoryPage;

export const getServerSideProps = withAuthServerSideProps();
