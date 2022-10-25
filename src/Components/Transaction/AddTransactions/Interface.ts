export interface ITransactionDetails {
  date: Date | null;
  description: string;
  type: string;
  tag: string;
  amount: string;
}

export interface IFormErrors {
  date: boolean;
  description: boolean;
  type: boolean;
  tag: boolean;
  amount: boolean;
}