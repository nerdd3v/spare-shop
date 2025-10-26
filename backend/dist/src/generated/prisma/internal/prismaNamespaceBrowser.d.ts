import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Organisation: "Organisation";
    readonly Product: "Product";
    readonly BillDetails: "BillDetails";
    readonly CardDetail: "CardDetail";
    readonly UPIdetail: "UPIdetail";
    readonly BillItem: "BillItem";
    readonly Customer: "Customer";
    readonly Supplier: "Supplier";
    readonly paymentStatus: "paymentStatus";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OrganisationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly ownerId: "ownerId";
};
export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly quantity: "quantity";
    readonly imgUrl: "imgUrl";
    readonly type: "type";
    readonly costPrice: "costPrice";
    readonly sellPrice: "sellPrice";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const BillDetailsScalarFieldEnum: {
    readonly id: "id";
    readonly paymentType: "paymentType";
    readonly type: "type";
    readonly date: "date";
    readonly organisationId: "organisationId";
    readonly totalAmount: "totalAmount";
    readonly supplierId: "supplierId";
    readonly customerId: "customerId";
};
export type BillDetailsScalarFieldEnum = (typeof BillDetailsScalarFieldEnum)[keyof typeof BillDetailsScalarFieldEnum];
export declare const CardDetailScalarFieldEnum: {
    readonly id: "id";
    readonly accountNumber: "accountNumber";
    readonly accountHolder: "accountHolder";
    readonly cardType: "cardType";
    readonly bank: "bank";
    readonly billId: "billId";
};
export type CardDetailScalarFieldEnum = (typeof CardDetailScalarFieldEnum)[keyof typeof CardDetailScalarFieldEnum];
export declare const UPIdetailScalarFieldEnum: {
    readonly id: "id";
    readonly upiId: "upiId";
    readonly application: "application";
    readonly billId: "billId";
};
export type UPIdetailScalarFieldEnum = (typeof UPIdetailScalarFieldEnum)[keyof typeof UPIdetailScalarFieldEnum];
export declare const BillItemScalarFieldEnum: {
    readonly id: "id";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly productId: "productId";
    readonly billId: "billId";
};
export type BillItemScalarFieldEnum = (typeof BillItemScalarFieldEnum)[keyof typeof BillItemScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly contact: "contact";
    readonly email: "email";
    readonly address: "address";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const SupplierScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly contact: "contact";
    readonly email: "email";
    readonly address: "address";
};
export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum];
export declare const PaymentStatusScalarFieldEnum: {
    readonly id: "id";
};
export type PaymentStatusScalarFieldEnum = (typeof PaymentStatusScalarFieldEnum)[keyof typeof PaymentStatusScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map