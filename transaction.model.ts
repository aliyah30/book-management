export interface Transaction {
    transaction_id: number;
    book_id: number;
    user_id: number;
    borrow_date: string;
    return_date: string | null;
    status: string;
    late_fee: number;
  }
  