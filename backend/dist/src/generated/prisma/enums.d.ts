export declare const BillType: {
    readonly Sale: "Sale";
    readonly Purchase: "Purchase";
};
export type BillType = (typeof BillType)[keyof typeof BillType];
export declare const PaymentType: {
    readonly Cash: "Cash";
    readonly UPI: "UPI";
    readonly Card: "Card";
};
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];
export declare const CardType: {
    readonly Debit: "Debit";
    readonly Credit: "Credit";
};
export type CardType = (typeof CardType)[keyof typeof CardType];
//# sourceMappingURL=enums.d.ts.map