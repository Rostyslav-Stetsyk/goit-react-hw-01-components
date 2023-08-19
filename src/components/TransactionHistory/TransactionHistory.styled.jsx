import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  box-shadow: 4px 4px 8px black;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
`;

export const TransactionTableHead = styled.thead`
  background-color: SteelBlue;
`;

export const HeadTr = styled.tr`
  color: white;

  th {
    padding: 12px;
  }

  th:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const TableBody = styled.tbody`
  td {
    text-align: center;
    padding: 8px;
  }
  tr:nth-of-type(even) {
    background-color: lightgray;
  }
  tr td:first-of-type {
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;
