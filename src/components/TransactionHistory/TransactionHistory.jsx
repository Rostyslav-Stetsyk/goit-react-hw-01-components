import PropTypes from 'prop-types';
import {
  HeadTr,
  TableBody,
  TransactionHistoryTable,
  TransactionTableHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable>
      <TransactionTableHead>
        <HeadTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeadTr>
      </TransactionTableHead>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
