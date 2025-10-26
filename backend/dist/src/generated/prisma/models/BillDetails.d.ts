import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BillDetails
 *
 */
export type BillDetailsModel = runtime.Types.Result.DefaultSelection<Prisma.$BillDetailsPayload>;
export type AggregateBillDetails = {
    _count: BillDetailsCountAggregateOutputType | null;
    _avg: BillDetailsAvgAggregateOutputType | null;
    _sum: BillDetailsSumAggregateOutputType | null;
    _min: BillDetailsMinAggregateOutputType | null;
    _max: BillDetailsMaxAggregateOutputType | null;
};
export type BillDetailsAvgAggregateOutputType = {
    totalAmount: number | null;
};
export type BillDetailsSumAggregateOutputType = {
    totalAmount: number | null;
};
export type BillDetailsMinAggregateOutputType = {
    id: string | null;
    paymentType: $Enums.PaymentType | null;
    type: $Enums.BillType | null;
    date: Date | null;
    organisationId: string | null;
    totalAmount: number | null;
    supplierId: string | null;
    customerId: string | null;
};
export type BillDetailsMaxAggregateOutputType = {
    id: string | null;
    paymentType: $Enums.PaymentType | null;
    type: $Enums.BillType | null;
    date: Date | null;
    organisationId: string | null;
    totalAmount: number | null;
    supplierId: string | null;
    customerId: string | null;
};
export type BillDetailsCountAggregateOutputType = {
    id: number;
    paymentType: number;
    type: number;
    date: number;
    organisationId: number;
    totalAmount: number;
    supplierId: number;
    customerId: number;
    _all: number;
};
export type BillDetailsAvgAggregateInputType = {
    totalAmount?: true;
};
export type BillDetailsSumAggregateInputType = {
    totalAmount?: true;
};
export type BillDetailsMinAggregateInputType = {
    id?: true;
    paymentType?: true;
    type?: true;
    date?: true;
    organisationId?: true;
    totalAmount?: true;
    supplierId?: true;
    customerId?: true;
};
export type BillDetailsMaxAggregateInputType = {
    id?: true;
    paymentType?: true;
    type?: true;
    date?: true;
    organisationId?: true;
    totalAmount?: true;
    supplierId?: true;
    customerId?: true;
};
export type BillDetailsCountAggregateInputType = {
    id?: true;
    paymentType?: true;
    type?: true;
    date?: true;
    organisationId?: true;
    totalAmount?: true;
    supplierId?: true;
    customerId?: true;
    _all?: true;
};
export type BillDetailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BillDetails to aggregate.
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillDetails to fetch.
     */
    orderBy?: Prisma.BillDetailsOrderByWithRelationInput | Prisma.BillDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BillDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BillDetails
    **/
    _count?: true | BillDetailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BillDetailsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BillDetailsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BillDetailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BillDetailsMaxAggregateInputType;
};
export type GetBillDetailsAggregateType<T extends BillDetailsAggregateArgs> = {
    [P in keyof T & keyof AggregateBillDetails]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBillDetails[P]> : Prisma.GetScalarType<T[P], AggregateBillDetails[P]>;
};
export type BillDetailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillDetailsWhereInput;
    orderBy?: Prisma.BillDetailsOrderByWithAggregationInput | Prisma.BillDetailsOrderByWithAggregationInput[];
    by: Prisma.BillDetailsScalarFieldEnum[] | Prisma.BillDetailsScalarFieldEnum;
    having?: Prisma.BillDetailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BillDetailsCountAggregateInputType | true;
    _avg?: BillDetailsAvgAggregateInputType;
    _sum?: BillDetailsSumAggregateInputType;
    _min?: BillDetailsMinAggregateInputType;
    _max?: BillDetailsMaxAggregateInputType;
};
export type BillDetailsGroupByOutputType = {
    id: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date: Date;
    organisationId: string;
    totalAmount: number;
    supplierId: string | null;
    customerId: string | null;
    _count: BillDetailsCountAggregateOutputType | null;
    _avg: BillDetailsAvgAggregateOutputType | null;
    _sum: BillDetailsSumAggregateOutputType | null;
    _min: BillDetailsMinAggregateOutputType | null;
    _max: BillDetailsMaxAggregateOutputType | null;
};
type GetBillDetailsGroupByPayload<T extends BillDetailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BillDetailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BillDetailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BillDetailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BillDetailsGroupByOutputType[P]>;
}>>;
export type BillDetailsWhereInput = {
    AND?: Prisma.BillDetailsWhereInput | Prisma.BillDetailsWhereInput[];
    OR?: Prisma.BillDetailsWhereInput[];
    NOT?: Prisma.BillDetailsWhereInput | Prisma.BillDetailsWhereInput[];
    id?: Prisma.StringFilter<"BillDetails"> | string;
    paymentType?: Prisma.EnumPaymentTypeFilter<"BillDetails"> | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFilter<"BillDetails"> | $Enums.BillType;
    date?: Prisma.DateTimeFilter<"BillDetails"> | Date | string;
    organisationId?: Prisma.StringFilter<"BillDetails"> | string;
    totalAmount?: Prisma.IntFilter<"BillDetails"> | number;
    supplierId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
    customerId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    items?: Prisma.BillItemListRelationFilter;
    cardDetails?: Prisma.XOR<Prisma.CardDetailNullableScalarRelationFilter, Prisma.CardDetailWhereInput> | null;
    upiDetails?: Prisma.XOR<Prisma.UPIdetailNullableScalarRelationFilter, Prisma.UPIdetailWhereInput> | null;
};
export type BillDetailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentType?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    items?: Prisma.BillItemOrderByRelationAggregateInput;
    cardDetails?: Prisma.CardDetailOrderByWithRelationInput;
    upiDetails?: Prisma.UPIdetailOrderByWithRelationInput;
};
export type BillDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BillDetailsWhereInput | Prisma.BillDetailsWhereInput[];
    OR?: Prisma.BillDetailsWhereInput[];
    NOT?: Prisma.BillDetailsWhereInput | Prisma.BillDetailsWhereInput[];
    paymentType?: Prisma.EnumPaymentTypeFilter<"BillDetails"> | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFilter<"BillDetails"> | $Enums.BillType;
    date?: Prisma.DateTimeFilter<"BillDetails"> | Date | string;
    organisationId?: Prisma.StringFilter<"BillDetails"> | string;
    totalAmount?: Prisma.IntFilter<"BillDetails"> | number;
    supplierId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
    customerId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    items?: Prisma.BillItemListRelationFilter;
    cardDetails?: Prisma.XOR<Prisma.CardDetailNullableScalarRelationFilter, Prisma.CardDetailWhereInput> | null;
    upiDetails?: Prisma.XOR<Prisma.UPIdetailNullableScalarRelationFilter, Prisma.UPIdetailWhereInput> | null;
}, "id" | "id">;
export type BillDetailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentType?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BillDetailsCountOrderByAggregateInput;
    _avg?: Prisma.BillDetailsAvgOrderByAggregateInput;
    _max?: Prisma.BillDetailsMaxOrderByAggregateInput;
    _min?: Prisma.BillDetailsMinOrderByAggregateInput;
    _sum?: Prisma.BillDetailsSumOrderByAggregateInput;
};
export type BillDetailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.BillDetailsScalarWhereWithAggregatesInput | Prisma.BillDetailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.BillDetailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BillDetailsScalarWhereWithAggregatesInput | Prisma.BillDetailsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BillDetails"> | string;
    paymentType?: Prisma.EnumPaymentTypeWithAggregatesFilter<"BillDetails"> | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeWithAggregatesFilter<"BillDetails"> | $Enums.BillType;
    date?: Prisma.DateTimeWithAggregatesFilter<"BillDetails"> | Date | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"BillDetails"> | string;
    totalAmount?: Prisma.IntWithAggregatesFilter<"BillDetails"> | number;
    supplierId?: Prisma.StringNullableWithAggregatesFilter<"BillDetails"> | string | null;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"BillDetails"> | string | null;
};
export type BillDetailsCreateInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsCreateManyInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
};
export type BillDetailsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BillDetailsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BillDetailsListRelationFilter = {
    every?: Prisma.BillDetailsWhereInput;
    some?: Prisma.BillDetailsWhereInput;
    none?: Prisma.BillDetailsWhereInput;
};
export type BillDetailsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BillDetailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentType?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
};
export type BillDetailsAvgOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type BillDetailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentType?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
};
export type BillDetailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentType?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
};
export type BillDetailsSumOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type BillDetailsNullableScalarRelationFilter = {
    is?: Prisma.BillDetailsWhereInput | null;
    isNot?: Prisma.BillDetailsWhereInput | null;
};
export type BillDetailsScalarRelationFilter = {
    is?: Prisma.BillDetailsWhereInput;
    isNot?: Prisma.BillDetailsWhereInput;
};
export type BillDetailsCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput> | Prisma.BillDetailsCreateWithoutOrganisationInput[] | Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput | Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.BillDetailsCreateManyOrganisationInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput> | Prisma.BillDetailsCreateWithoutOrganisationInput[] | Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput | Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.BillDetailsCreateManyOrganisationInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput> | Prisma.BillDetailsCreateWithoutOrganisationInput[] | Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput | Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.BillDetailsCreateManyOrganisationInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutOrganisationInput | Prisma.BillDetailsUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type BillDetailsUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput> | Prisma.BillDetailsCreateWithoutOrganisationInput[] | Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput | Prisma.BillDetailsCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.BillDetailsCreateManyOrganisationInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutOrganisationInput | Prisma.BillDetailsUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType;
};
export type EnumBillTypeFieldUpdateOperationsInput = {
    set?: $Enums.BillType;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BillDetailsCreateNestedOneWithoutCardDetailsInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutCardDetailsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCardDetailsInput;
    connect?: Prisma.BillDetailsWhereUniqueInput;
};
export type BillDetailsUpdateOneWithoutCardDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutCardDetailsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCardDetailsInput;
    upsert?: Prisma.BillDetailsUpsertWithoutCardDetailsInput;
    disconnect?: Prisma.BillDetailsWhereInput | boolean;
    delete?: Prisma.BillDetailsWhereInput | boolean;
    connect?: Prisma.BillDetailsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BillDetailsUpdateToOneWithWhereWithoutCardDetailsInput, Prisma.BillDetailsUpdateWithoutCardDetailsInput>, Prisma.BillDetailsUncheckedUpdateWithoutCardDetailsInput>;
};
export type BillDetailsCreateNestedOneWithoutUpiDetailsInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutUpiDetailsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutUpiDetailsInput;
    connect?: Prisma.BillDetailsWhereUniqueInput;
};
export type BillDetailsUpdateOneWithoutUpiDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutUpiDetailsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutUpiDetailsInput;
    upsert?: Prisma.BillDetailsUpsertWithoutUpiDetailsInput;
    disconnect?: Prisma.BillDetailsWhereInput | boolean;
    delete?: Prisma.BillDetailsWhereInput | boolean;
    connect?: Prisma.BillDetailsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BillDetailsUpdateToOneWithWhereWithoutUpiDetailsInput, Prisma.BillDetailsUpdateWithoutUpiDetailsInput>, Prisma.BillDetailsUncheckedUpdateWithoutUpiDetailsInput>;
};
export type BillDetailsCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutItemsInput, Prisma.BillDetailsUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutItemsInput;
    connect?: Prisma.BillDetailsWhereUniqueInput;
};
export type BillDetailsUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutItemsInput, Prisma.BillDetailsUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.BillDetailsUpsertWithoutItemsInput;
    connect?: Prisma.BillDetailsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BillDetailsUpdateToOneWithWhereWithoutItemsInput, Prisma.BillDetailsUpdateWithoutItemsInput>, Prisma.BillDetailsUncheckedUpdateWithoutItemsInput>;
};
export type BillDetailsCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput> | Prisma.BillDetailsCreateWithoutCustomerInput[] | Prisma.BillDetailsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCustomerInput | Prisma.BillDetailsCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.BillDetailsCreateManyCustomerInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput> | Prisma.BillDetailsCreateWithoutCustomerInput[] | Prisma.BillDetailsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCustomerInput | Prisma.BillDetailsCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.BillDetailsCreateManyCustomerInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput> | Prisma.BillDetailsCreateWithoutCustomerInput[] | Prisma.BillDetailsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCustomerInput | Prisma.BillDetailsCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutCustomerInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.BillDetailsCreateManyCustomerInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutCustomerInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutCustomerInput | Prisma.BillDetailsUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type BillDetailsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput> | Prisma.BillDetailsCreateWithoutCustomerInput[] | Prisma.BillDetailsUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutCustomerInput | Prisma.BillDetailsCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutCustomerInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.BillDetailsCreateManyCustomerInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutCustomerInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutCustomerInput | Prisma.BillDetailsUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type BillDetailsCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput> | Prisma.BillDetailsCreateWithoutSupplierInput[] | Prisma.BillDetailsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutSupplierInput | Prisma.BillDetailsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.BillDetailsCreateManySupplierInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput> | Prisma.BillDetailsCreateWithoutSupplierInput[] | Prisma.BillDetailsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutSupplierInput | Prisma.BillDetailsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.BillDetailsCreateManySupplierInputEnvelope;
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
};
export type BillDetailsUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput> | Prisma.BillDetailsCreateWithoutSupplierInput[] | Prisma.BillDetailsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutSupplierInput | Prisma.BillDetailsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.BillDetailsCreateManySupplierInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutSupplierInput | Prisma.BillDetailsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type BillDetailsUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput> | Prisma.BillDetailsCreateWithoutSupplierInput[] | Prisma.BillDetailsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.BillDetailsCreateOrConnectWithoutSupplierInput | Prisma.BillDetailsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.BillDetailsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.BillDetailsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.BillDetailsCreateManySupplierInputEnvelope;
    set?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    disconnect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    delete?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    connect?: Prisma.BillDetailsWhereUniqueInput | Prisma.BillDetailsWhereUniqueInput[];
    update?: Prisma.BillDetailsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.BillDetailsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.BillDetailsUpdateManyWithWhereWithoutSupplierInput | Prisma.BillDetailsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
};
export type BillDetailsCreateWithoutOrganisationInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput>;
};
export type BillDetailsCreateManyOrganisationInputEnvelope = {
    data: Prisma.BillDetailsCreateManyOrganisationInput | Prisma.BillDetailsCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type BillDetailsUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutOrganisationInput, Prisma.BillDetailsUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutOrganisationInput, Prisma.BillDetailsUncheckedCreateWithoutOrganisationInput>;
};
export type BillDetailsUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutOrganisationInput, Prisma.BillDetailsUncheckedUpdateWithoutOrganisationInput>;
};
export type BillDetailsUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.BillDetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateManyMutationInput, Prisma.BillDetailsUncheckedUpdateManyWithoutOrganisationInput>;
};
export type BillDetailsScalarWhereInput = {
    AND?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
    OR?: Prisma.BillDetailsScalarWhereInput[];
    NOT?: Prisma.BillDetailsScalarWhereInput | Prisma.BillDetailsScalarWhereInput[];
    id?: Prisma.StringFilter<"BillDetails"> | string;
    paymentType?: Prisma.EnumPaymentTypeFilter<"BillDetails"> | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFilter<"BillDetails"> | $Enums.BillType;
    date?: Prisma.DateTimeFilter<"BillDetails"> | Date | string;
    organisationId?: Prisma.StringFilter<"BillDetails"> | string;
    totalAmount?: Prisma.IntFilter<"BillDetails"> | number;
    supplierId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
    customerId?: Prisma.StringNullableFilter<"BillDetails"> | string | null;
};
export type BillDetailsCreateWithoutCardDetailsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutCardDetailsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutCardDetailsInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutCardDetailsInput>;
};
export type BillDetailsUpsertWithoutCardDetailsInput = {
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedUpdateWithoutCardDetailsInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutCardDetailsInput>;
    where?: Prisma.BillDetailsWhereInput;
};
export type BillDetailsUpdateToOneWithWhereWithoutCardDetailsInput = {
    where?: Prisma.BillDetailsWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutCardDetailsInput, Prisma.BillDetailsUncheckedUpdateWithoutCardDetailsInput>;
};
export type BillDetailsUpdateWithoutCardDetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutCardDetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsCreateWithoutUpiDetailsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutUpiDetailsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutUpiDetailsInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutUpiDetailsInput>;
};
export type BillDetailsUpsertWithoutUpiDetailsInput = {
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedUpdateWithoutUpiDetailsInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedCreateWithoutUpiDetailsInput>;
    where?: Prisma.BillDetailsWhereInput;
};
export type BillDetailsUpdateToOneWithWhereWithoutUpiDetailsInput = {
    where?: Prisma.BillDetailsWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutUpiDetailsInput, Prisma.BillDetailsUncheckedUpdateWithoutUpiDetailsInput>;
};
export type BillDetailsUpdateWithoutUpiDetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutUpiDetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsCreateWithoutItemsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutItemsInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutItemsInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutItemsInput, Prisma.BillDetailsUncheckedCreateWithoutItemsInput>;
};
export type BillDetailsUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutItemsInput, Prisma.BillDetailsUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutItemsInput, Prisma.BillDetailsUncheckedCreateWithoutItemsInput>;
    where?: Prisma.BillDetailsWhereInput;
};
export type BillDetailsUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.BillDetailsWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutItemsInput, Prisma.BillDetailsUncheckedUpdateWithoutItemsInput>;
};
export type BillDetailsUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsCreateWithoutCustomerInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutCustomerInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutCustomerInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput>;
};
export type BillDetailsCreateManyCustomerInputEnvelope = {
    data: Prisma.BillDetailsCreateManyCustomerInput | Prisma.BillDetailsCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type BillDetailsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutCustomerInput, Prisma.BillDetailsUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutCustomerInput, Prisma.BillDetailsUncheckedCreateWithoutCustomerInput>;
};
export type BillDetailsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutCustomerInput, Prisma.BillDetailsUncheckedUpdateWithoutCustomerInput>;
};
export type BillDetailsUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.BillDetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateManyMutationInput, Prisma.BillDetailsUncheckedUpdateManyWithoutCustomerInput>;
};
export type BillDetailsCreateWithoutSupplierInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    organisation: Prisma.OrganisationCreateNestedOneWithoutBillsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutBillsInput;
    items?: Prisma.BillItemCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailCreateNestedOneWithoutBillInput;
};
export type BillDetailsUncheckedCreateWithoutSupplierInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    customerId?: string | null;
    items?: Prisma.BillItemUncheckedCreateNestedManyWithoutBillInput;
    cardDetails?: Prisma.CardDetailUncheckedCreateNestedOneWithoutBillInput;
    upiDetails?: Prisma.UPIdetailUncheckedCreateNestedOneWithoutBillInput;
};
export type BillDetailsCreateOrConnectWithoutSupplierInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput>;
};
export type BillDetailsCreateManySupplierInputEnvelope = {
    data: Prisma.BillDetailsCreateManySupplierInput | Prisma.BillDetailsCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type BillDetailsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillDetailsUpdateWithoutSupplierInput, Prisma.BillDetailsUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.BillDetailsCreateWithoutSupplierInput, Prisma.BillDetailsUncheckedCreateWithoutSupplierInput>;
};
export type BillDetailsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.BillDetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateWithoutSupplierInput, Prisma.BillDetailsUncheckedUpdateWithoutSupplierInput>;
};
export type BillDetailsUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.BillDetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.BillDetailsUpdateManyMutationInput, Prisma.BillDetailsUncheckedUpdateManyWithoutSupplierInput>;
};
export type BillDetailsCreateManyOrganisationInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    totalAmount: number;
    supplierId?: string | null;
    customerId?: string | null;
};
export type BillDetailsUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BillDetailsCreateManyCustomerInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    supplierId?: string | null;
};
export type BillDetailsUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BillDetailsCreateManySupplierInput = {
    id?: string;
    paymentType: $Enums.PaymentType;
    type: $Enums.BillType;
    date?: Date | string;
    organisationId: string;
    totalAmount: number;
    customerId?: string | null;
};
export type BillDetailsUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutBillsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutBillsNestedInput;
    items?: Prisma.BillItemUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.BillItemUncheckedUpdateManyWithoutBillNestedInput;
    cardDetails?: Prisma.CardDetailUncheckedUpdateOneWithoutBillNestedInput;
    upiDetails?: Prisma.UPIdetailUncheckedUpdateOneWithoutBillNestedInput;
};
export type BillDetailsUncheckedUpdateManyWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentType?: Prisma.EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType;
    type?: Prisma.EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type BillDetailsCountOutputType
 */
export type BillDetailsCountOutputType = {
    items: number;
};
export type BillDetailsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | BillDetailsCountOutputTypeCountItemsArgs;
};
/**
 * BillDetailsCountOutputType without action
 */
export type BillDetailsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetailsCountOutputType
     */
    select?: Prisma.BillDetailsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BillDetailsCountOutputType without action
 */
export type BillDetailsCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillItemWhereInput;
};
export type BillDetailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentType?: boolean;
    type?: boolean;
    date?: boolean;
    organisationId?: boolean;
    totalAmount?: boolean;
    supplierId?: boolean;
    customerId?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
    items?: boolean | Prisma.BillDetails$itemsArgs<ExtArgs>;
    cardDetails?: boolean | Prisma.BillDetails$cardDetailsArgs<ExtArgs>;
    upiDetails?: boolean | Prisma.BillDetails$upiDetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.BillDetailsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billDetails"]>;
export type BillDetailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentType?: boolean;
    type?: boolean;
    date?: boolean;
    organisationId?: boolean;
    totalAmount?: boolean;
    supplierId?: boolean;
    customerId?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
}, ExtArgs["result"]["billDetails"]>;
export type BillDetailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentType?: boolean;
    type?: boolean;
    date?: boolean;
    organisationId?: boolean;
    totalAmount?: boolean;
    supplierId?: boolean;
    customerId?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
}, ExtArgs["result"]["billDetails"]>;
export type BillDetailsSelectScalar = {
    id?: boolean;
    paymentType?: boolean;
    type?: boolean;
    date?: boolean;
    organisationId?: boolean;
    totalAmount?: boolean;
    supplierId?: boolean;
    customerId?: boolean;
};
export type BillDetailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentType" | "type" | "date" | "organisationId" | "totalAmount" | "supplierId" | "customerId", ExtArgs["result"]["billDetails"]>;
export type BillDetailsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
    items?: boolean | Prisma.BillDetails$itemsArgs<ExtArgs>;
    cardDetails?: boolean | Prisma.BillDetails$cardDetailsArgs<ExtArgs>;
    upiDetails?: boolean | Prisma.BillDetails$upiDetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.BillDetailsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BillDetailsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
};
export type BillDetailsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.BillDetails$supplierArgs<ExtArgs>;
    customer?: boolean | Prisma.BillDetails$customerArgs<ExtArgs>;
};
export type $BillDetailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BillDetails";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        supplier: Prisma.$SupplierPayload<ExtArgs> | null;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        items: Prisma.$BillItemPayload<ExtArgs>[];
        cardDetails: Prisma.$CardDetailPayload<ExtArgs> | null;
        upiDetails: Prisma.$UPIdetailPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentType: $Enums.PaymentType;
        type: $Enums.BillType;
        date: Date;
        organisationId: string;
        totalAmount: number;
        supplierId: string | null;
        customerId: string | null;
    }, ExtArgs["result"]["billDetails"]>;
    composites: {};
};
export type BillDetailsGetPayload<S extends boolean | null | undefined | BillDetailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload, S>;
export type BillDetailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BillDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BillDetailsCountAggregateInputType | true;
};
export interface BillDetailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BillDetails'];
        meta: {
            name: 'BillDetails';
        };
    };
    /**
     * Find zero or one BillDetails that matches the filter.
     * @param {BillDetailsFindUniqueArgs} args - Arguments to find a BillDetails
     * @example
     * // Get one BillDetails
     * const billDetails = await prisma.billDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillDetailsFindUniqueArgs>(args: Prisma.SelectSubset<T, BillDetailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BillDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillDetailsFindUniqueOrThrowArgs} args - Arguments to find a BillDetails
     * @example
     * // Get one BillDetails
     * const billDetails = await prisma.billDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillDetailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BillDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BillDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsFindFirstArgs} args - Arguments to find a BillDetails
     * @example
     * // Get one BillDetails
     * const billDetails = await prisma.billDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillDetailsFindFirstArgs>(args?: Prisma.SelectSubset<T, BillDetailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BillDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsFindFirstOrThrowArgs} args - Arguments to find a BillDetails
     * @example
     * // Get one BillDetails
     * const billDetails = await prisma.billDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillDetailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BillDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BillDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillDetails
     * const billDetails = await prisma.billDetails.findMany()
     *
     * // Get first 10 BillDetails
     * const billDetails = await prisma.billDetails.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const billDetailsWithIdOnly = await prisma.billDetails.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BillDetailsFindManyArgs>(args?: Prisma.SelectSubset<T, BillDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BillDetails.
     * @param {BillDetailsCreateArgs} args - Arguments to create a BillDetails.
     * @example
     * // Create one BillDetails
     * const BillDetails = await prisma.billDetails.create({
     *   data: {
     *     // ... data to create a BillDetails
     *   }
     * })
     *
     */
    create<T extends BillDetailsCreateArgs>(args: Prisma.SelectSubset<T, BillDetailsCreateArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BillDetails.
     * @param {BillDetailsCreateManyArgs} args - Arguments to create many BillDetails.
     * @example
     * // Create many BillDetails
     * const billDetails = await prisma.billDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BillDetailsCreateManyArgs>(args?: Prisma.SelectSubset<T, BillDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BillDetails and returns the data saved in the database.
     * @param {BillDetailsCreateManyAndReturnArgs} args - Arguments to create many BillDetails.
     * @example
     * // Create many BillDetails
     * const billDetails = await prisma.billDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BillDetails and only return the `id`
     * const billDetailsWithIdOnly = await prisma.billDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BillDetailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BillDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BillDetails.
     * @param {BillDetailsDeleteArgs} args - Arguments to delete one BillDetails.
     * @example
     * // Delete one BillDetails
     * const BillDetails = await prisma.billDetails.delete({
     *   where: {
     *     // ... filter to delete one BillDetails
     *   }
     * })
     *
     */
    delete<T extends BillDetailsDeleteArgs>(args: Prisma.SelectSubset<T, BillDetailsDeleteArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BillDetails.
     * @param {BillDetailsUpdateArgs} args - Arguments to update one BillDetails.
     * @example
     * // Update one BillDetails
     * const billDetails = await prisma.billDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BillDetailsUpdateArgs>(args: Prisma.SelectSubset<T, BillDetailsUpdateArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BillDetails.
     * @param {BillDetailsDeleteManyArgs} args - Arguments to filter BillDetails to delete.
     * @example
     * // Delete a few BillDetails
     * const { count } = await prisma.billDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BillDetailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, BillDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BillDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillDetails
     * const billDetails = await prisma.billDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BillDetailsUpdateManyArgs>(args: Prisma.SelectSubset<T, BillDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BillDetails and returns the data updated in the database.
     * @param {BillDetailsUpdateManyAndReturnArgs} args - Arguments to update many BillDetails.
     * @example
     * // Update many BillDetails
     * const billDetails = await prisma.billDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BillDetails and only return the `id`
     * const billDetailsWithIdOnly = await prisma.billDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BillDetailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BillDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BillDetails.
     * @param {BillDetailsUpsertArgs} args - Arguments to update or create a BillDetails.
     * @example
     * // Update or create a BillDetails
     * const billDetails = await prisma.billDetails.upsert({
     *   create: {
     *     // ... data to create a BillDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillDetails we want to update
     *   }
     * })
     */
    upsert<T extends BillDetailsUpsertArgs>(args: Prisma.SelectSubset<T, BillDetailsUpsertArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BillDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsCountArgs} args - Arguments to filter BillDetails to count.
     * @example
     * // Count the number of BillDetails
     * const count = await prisma.billDetails.count({
     *   where: {
     *     // ... the filter for the BillDetails we want to count
     *   }
     * })
    **/
    count<T extends BillDetailsCountArgs>(args?: Prisma.Subset<T, BillDetailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BillDetailsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BillDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillDetailsAggregateArgs>(args: Prisma.Subset<T, BillDetailsAggregateArgs>): Prisma.PrismaPromise<GetBillDetailsAggregateType<T>>;
    /**
     * Group by BillDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BillDetailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BillDetailsGroupByArgs['orderBy'];
    } : {
        orderBy?: BillDetailsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BillDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BillDetails model
     */
    readonly fields: BillDetailsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BillDetails.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BillDetailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.BillDetails$supplierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetails$supplierArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.BillDetails$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetails$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.BillDetails$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetails$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cardDetails<T extends Prisma.BillDetails$cardDetailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetails$cardDetailsArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    upiDetails<T extends Prisma.BillDetails$upiDetailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetails$upiDetailsArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the BillDetails model
 */
export interface BillDetailsFieldRefs {
    readonly id: Prisma.FieldRef<"BillDetails", 'String'>;
    readonly paymentType: Prisma.FieldRef<"BillDetails", 'PaymentType'>;
    readonly type: Prisma.FieldRef<"BillDetails", 'BillType'>;
    readonly date: Prisma.FieldRef<"BillDetails", 'DateTime'>;
    readonly organisationId: Prisma.FieldRef<"BillDetails", 'String'>;
    readonly totalAmount: Prisma.FieldRef<"BillDetails", 'Int'>;
    readonly supplierId: Prisma.FieldRef<"BillDetails", 'String'>;
    readonly customerId: Prisma.FieldRef<"BillDetails", 'String'>;
}
/**
 * BillDetails findUnique
 */
export type BillDetailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter, which BillDetails to fetch.
     */
    where: Prisma.BillDetailsWhereUniqueInput;
};
/**
 * BillDetails findUniqueOrThrow
 */
export type BillDetailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter, which BillDetails to fetch.
     */
    where: Prisma.BillDetailsWhereUniqueInput;
};
/**
 * BillDetails findFirst
 */
export type BillDetailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter, which BillDetails to fetch.
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillDetails to fetch.
     */
    orderBy?: Prisma.BillDetailsOrderByWithRelationInput | Prisma.BillDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BillDetails.
     */
    cursor?: Prisma.BillDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BillDetails.
     */
    distinct?: Prisma.BillDetailsScalarFieldEnum | Prisma.BillDetailsScalarFieldEnum[];
};
/**
 * BillDetails findFirstOrThrow
 */
export type BillDetailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter, which BillDetails to fetch.
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillDetails to fetch.
     */
    orderBy?: Prisma.BillDetailsOrderByWithRelationInput | Prisma.BillDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BillDetails.
     */
    cursor?: Prisma.BillDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BillDetails.
     */
    distinct?: Prisma.BillDetailsScalarFieldEnum | Prisma.BillDetailsScalarFieldEnum[];
};
/**
 * BillDetails findMany
 */
export type BillDetailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter, which BillDetails to fetch.
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillDetails to fetch.
     */
    orderBy?: Prisma.BillDetailsOrderByWithRelationInput | Prisma.BillDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BillDetails.
     */
    cursor?: Prisma.BillDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillDetails.
     */
    skip?: number;
    distinct?: Prisma.BillDetailsScalarFieldEnum | Prisma.BillDetailsScalarFieldEnum[];
};
/**
 * BillDetails create
 */
export type BillDetailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * The data needed to create a BillDetails.
     */
    data: Prisma.XOR<Prisma.BillDetailsCreateInput, Prisma.BillDetailsUncheckedCreateInput>;
};
/**
 * BillDetails createMany
 */
export type BillDetailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillDetails.
     */
    data: Prisma.BillDetailsCreateManyInput | Prisma.BillDetailsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BillDetails createManyAndReturn
 */
export type BillDetailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * The data used to create many BillDetails.
     */
    data: Prisma.BillDetailsCreateManyInput | Prisma.BillDetailsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BillDetails update
 */
export type BillDetailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * The data needed to update a BillDetails.
     */
    data: Prisma.XOR<Prisma.BillDetailsUpdateInput, Prisma.BillDetailsUncheckedUpdateInput>;
    /**
     * Choose, which BillDetails to update.
     */
    where: Prisma.BillDetailsWhereUniqueInput;
};
/**
 * BillDetails updateMany
 */
export type BillDetailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BillDetails.
     */
    data: Prisma.XOR<Prisma.BillDetailsUpdateManyMutationInput, Prisma.BillDetailsUncheckedUpdateManyInput>;
    /**
     * Filter which BillDetails to update
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * Limit how many BillDetails to update.
     */
    limit?: number;
};
/**
 * BillDetails updateManyAndReturn
 */
export type BillDetailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * The data used to update BillDetails.
     */
    data: Prisma.XOR<Prisma.BillDetailsUpdateManyMutationInput, Prisma.BillDetailsUncheckedUpdateManyInput>;
    /**
     * Filter which BillDetails to update
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * Limit how many BillDetails to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BillDetails upsert
 */
export type BillDetailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * The filter to search for the BillDetails to update in case it exists.
     */
    where: Prisma.BillDetailsWhereUniqueInput;
    /**
     * In case the BillDetails found by the `where` argument doesn't exist, create a new BillDetails with this data.
     */
    create: Prisma.XOR<Prisma.BillDetailsCreateInput, Prisma.BillDetailsUncheckedCreateInput>;
    /**
     * In case the BillDetails was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BillDetailsUpdateInput, Prisma.BillDetailsUncheckedUpdateInput>;
};
/**
 * BillDetails delete
 */
export type BillDetailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
    /**
     * Filter which BillDetails to delete.
     */
    where: Prisma.BillDetailsWhereUniqueInput;
};
/**
 * BillDetails deleteMany
 */
export type BillDetailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BillDetails to delete
     */
    where?: Prisma.BillDetailsWhereInput;
    /**
     * Limit how many BillDetails to delete.
     */
    limit?: number;
};
/**
 * BillDetails.supplier
 */
export type BillDetails$supplierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    where?: Prisma.SupplierWhereInput;
};
/**
 * BillDetails.customer
 */
export type BillDetails$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
/**
 * BillDetails.items
 */
export type BillDetails$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: Prisma.BillItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillItem
     */
    omit?: Prisma.BillItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillItemInclude<ExtArgs> | null;
    where?: Prisma.BillItemWhereInput;
    orderBy?: Prisma.BillItemOrderByWithRelationInput | Prisma.BillItemOrderByWithRelationInput[];
    cursor?: Prisma.BillItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BillItemScalarFieldEnum | Prisma.BillItemScalarFieldEnum[];
};
/**
 * BillDetails.cardDetails
 */
export type BillDetails$cardDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDetail
     */
    select?: Prisma.CardDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CardDetail
     */
    omit?: Prisma.CardDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardDetailInclude<ExtArgs> | null;
    where?: Prisma.CardDetailWhereInput;
};
/**
 * BillDetails.upiDetails
 */
export type BillDetails$upiDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UPIdetail
     */
    select?: Prisma.UPIdetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UPIdetail
     */
    omit?: Prisma.UPIdetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UPIdetailInclude<ExtArgs> | null;
    where?: Prisma.UPIdetailWhereInput;
};
/**
 * BillDetails without action
 */
export type BillDetailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillDetails
     */
    select?: Prisma.BillDetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BillDetails
     */
    omit?: Prisma.BillDetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillDetailsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BillDetails.d.ts.map