export interface Payment {
    payment_id: number;
    transaction_id: number;
    payment_date: string;
    amount: number;
    method: string;
}