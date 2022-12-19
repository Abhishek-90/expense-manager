import { useState } from "react";
import AddTransaction from "./AddTransactions/AddTransaction";
import ShowTransaction from "./ShowTransaction/ShowTransaction";
import { Container } from "./Transaction.styled";
import UpdateModal from "./UpdateModal/UpdateModal";

interface ITransactionDetails {
  date: string | undefined;
  description: string;
  type: string;
  tag: string;
  amount: string;
  _id: string;
}

const Transaction = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatingTransaction, setUpdatingTransaction] =
    useState<ITransactionDetails>({
      date: "",
      description: "",
      type: "income",
      tag: "salary",
      amount: "",
      _id: "",
    });
  return (
    <>
      {isEditing && (
        <UpdateModal
          setIsEditing={setIsEditing}
          transaction={updatingTransaction}
        />
      )}
      <Container>
        <AddTransaction />
        <ShowTransaction
          setUpdatingTransaction={setUpdatingTransaction}
          setIsEditing={setIsEditing}
        />
      </Container>
    </>
  );
};

export default Transaction;
