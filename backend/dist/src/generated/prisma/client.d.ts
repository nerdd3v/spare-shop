import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Organisation
 *
 */
export type Organisation = Prisma.OrganisationModel;
/**
 * Model Product
 *
 */
export type Product = Prisma.ProductModel;
/**
 * Model BillDetails
 *
 */
export type BillDetails = Prisma.BillDetailsModel;
/**
 * Model CardDetail
 *
 */
export type CardDetail = Prisma.CardDetailModel;
/**
 * Model UPIdetail
 *
 */
export type UPIdetail = Prisma.UPIdetailModel;
/**
 * Model BillItem
 *
 */
export type BillItem = Prisma.BillItemModel;
/**
 * Model Customer
 *
 */
export type Customer = Prisma.CustomerModel;
/**
 * Model Supplier
 *
 */
export type Supplier = Prisma.SupplierModel;
/**
 * Model paymentStatus
 *
 */
export type paymentStatus = Prisma.paymentStatusModel;
//# sourceMappingURL=client.d.ts.map