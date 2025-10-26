import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BillItem
 *
 */
export type BillItemModel = runtime.Types.Result.DefaultSelection<Prisma.$BillItemPayload>;
export type AggregateBillItem = {
    _count: BillItemCountAggregateOutputType | null;
    _avg: BillItemAvgAggregateOutputType | null;
    _sum: BillItemSumAggregateOutputType | null;
    _min: BillItemMinAggregateOutputType | null;
    _max: BillItemMaxAggregateOutputType | null;
};
export type BillItemAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type BillItemSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type BillItemMinAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    price: number | null;
    productId: string | null;
    billId: string | null;
};
export type BillItemMaxAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    price: number | null;
    productId: string | null;
    billId: string | null;
};
export type BillItemCountAggregateOutputType = {
    id: number;
    quantity: number;
    price: number;
    productId: number;
    billId: number;
    _all: number;
};
export type BillItemAvgAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type BillItemSumAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type BillItemMinAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    productId?: true;
    billId?: true;
};
export type BillItemMaxAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    productId?: true;
    billId?: true;
};
export type BillItemCountAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    productId?: true;
    billId?: true;
    _all?: true;
};
export type BillItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BillItem to aggregate.
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillItems to fetch.
     */
    orderBy?: Prisma.BillItemOrderByWithRelationInput | Prisma.BillItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BillItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BillItems
    **/
    _count?: true | BillItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BillItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BillItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BillItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BillItemMaxAggregateInputType;
};
export type GetBillItemAggregateType<T extends BillItemAggregateArgs> = {
    [P in keyof T & keyof AggregateBillItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBillItem[P]> : Prisma.GetScalarType<T[P], AggregateBillItem[P]>;
};
export type BillItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillItemWhereInput;
    orderBy?: Prisma.BillItemOrderByWithAggregationInput | Prisma.BillItemOrderByWithAggregationInput[];
    by: Prisma.BillItemScalarFieldEnum[] | Prisma.BillItemScalarFieldEnum;
    having?: Prisma.BillItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BillItemCountAggregateInputType | true;
    _avg?: BillItemAvgAggregateInputType;
    _sum?: BillItemSumAggregateInputType;
    _min?: BillItemMinAggregateInputType;
    _max?: BillItemMaxAggregateInputType;
};
export type BillItemGroupByOutputType = {
    id: string;
    quantity: number;
    price: number;
    productId: string;
    billId: string;
    _count: BillItemCountAggregateOutputType | null;
    _avg: BillItemAvgAggregateOutputType | null;
    _sum: BillItemSumAggregateOutputType | null;
    _min: BillItemMinAggregateOutputType | null;
    _max: BillItemMaxAggregateOutputType | null;
};
type GetBillItemGroupByPayload<T extends BillItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BillItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BillItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BillItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BillItemGroupByOutputType[P]>;
}>>;
export type BillItemWhereInput = {
    AND?: Prisma.BillItemWhereInput | Prisma.BillItemWhereInput[];
    OR?: Prisma.BillItemWhereInput[];
    NOT?: Prisma.BillItemWhereInput | Prisma.BillItemWhereInput[];
    id?: Prisma.StringFilter<"BillItem"> | string;
    quantity?: Prisma.IntFilter<"BillItem"> | number;
    price?: Prisma.IntFilter<"BillItem"> | number;
    productId?: Prisma.StringFilter<"BillItem"> | string;
    billId?: Prisma.StringFilter<"BillItem"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    bill?: Prisma.XOR<Prisma.BillDetailsScalarRelationFilter, Prisma.BillDetailsWhereInput>;
};
export type BillItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    bill?: Prisma.BillDetailsOrderByWithRelationInput;
};
export type BillItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BillItemWhereInput | Prisma.BillItemWhereInput[];
    OR?: Prisma.BillItemWhereInput[];
    NOT?: Prisma.BillItemWhereInput | Prisma.BillItemWhereInput[];
    quantity?: Prisma.IntFilter<"BillItem"> | number;
    price?: Prisma.IntFilter<"BillItem"> | number;
    productId?: Prisma.StringFilter<"BillItem"> | string;
    billId?: Prisma.StringFilter<"BillItem"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    bill?: Prisma.XOR<Prisma.BillDetailsScalarRelationFilter, Prisma.BillDetailsWhereInput>;
}, "id" | "id">;
export type BillItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    _count?: Prisma.BillItemCountOrderByAggregateInput;
    _avg?: Prisma.BillItemAvgOrderByAggregateInput;
    _max?: Prisma.BillItemMaxOrderByAggregateInput;
    _min?: Prisma.BillItemMinOrderByAggregateInput;
    _sum?: Prisma.BillItemSumOrderByAggregateInput;
};
export type BillItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.BillItemScalarWhereWithAggregatesInput | Prisma.BillItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.BillItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BillItemScalarWhereWithAggregatesInput | Prisma.BillItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BillItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"BillItem"> | number;
    price?: Prisma.IntWithAggregatesFilter<"BillItem"> | number;
    productId?: Prisma.StringWithAggregatesFilter<"BillItem"> | string;
    billId?: Prisma.StringWithAggregatesFilter<"BillItem"> | string;
};
export type BillItemCreateInput = {
    id?: string;
    quantity: number;
    price: number;
    product: Prisma.ProductCreateNestedOneWithoutBillItemsInput;
    bill: Prisma.BillDetailsCreateNestedOneWithoutItemsInput;
};
export type BillItemUncheckedCreateInput = {
    id?: string;
    quantity: number;
    price: number;
    productId: string;
    billId: string;
};
export type BillItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutBillItemsNestedInput;
    bill?: Prisma.BillDetailsUpdateOneRequiredWithoutItemsNestedInput;
};
export type BillItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemCreateManyInput = {
    id?: string;
    quantity: number;
    price: number;
    productId: string;
    billId: string;
};
export type BillItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BillItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemListRelationFilter = {
    every?: Prisma.BillItemWhereInput;
    some?: Prisma.BillItemWhereInput;
    none?: Prisma.BillItemWhereInput;
};
export type BillItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BillItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type BillItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type BillItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type BillItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type BillItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type BillItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput> | Prisma.BillItemCreateWithoutProductInput[] | Prisma.BillItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutProductInput | Prisma.BillItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.BillItemCreateManyProductInputEnvelope;
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
};
export type BillItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput> | Prisma.BillItemCreateWithoutProductInput[] | Prisma.BillItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutProductInput | Prisma.BillItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.BillItemCreateManyProductInputEnvelope;
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
};
export type BillItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput> | Prisma.BillItemCreateWithoutProductInput[] | Prisma.BillItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutProductInput | Prisma.BillItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.BillItemUpsertWithWhereUniqueWithoutProductInput | Prisma.BillItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.BillItemCreateManyProductInputEnvelope;
    set?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    disconnect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    delete?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    update?: Prisma.BillItemUpdateWithWhereUniqueWithoutProductInput | Prisma.BillItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.BillItemUpdateManyWithWhereWithoutProductInput | Prisma.BillItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
};
export type BillItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput> | Prisma.BillItemCreateWithoutProductInput[] | Prisma.BillItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutProductInput | Prisma.BillItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.BillItemUpsertWithWhereUniqueWithoutProductInput | Prisma.BillItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.BillItemCreateManyProductInputEnvelope;
    set?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    disconnect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    delete?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    update?: Prisma.BillItemUpdateWithWhereUniqueWithoutProductInput | Prisma.BillItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.BillItemUpdateManyWithWhereWithoutProductInput | Prisma.BillItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
};
export type BillItemCreateNestedManyWithoutBillInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput> | Prisma.BillItemCreateWithoutBillInput[] | Prisma.BillItemUncheckedCreateWithoutBillInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutBillInput | Prisma.BillItemCreateOrConnectWithoutBillInput[];
    createMany?: Prisma.BillItemCreateManyBillInputEnvelope;
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
};
export type BillItemUncheckedCreateNestedManyWithoutBillInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput> | Prisma.BillItemCreateWithoutBillInput[] | Prisma.BillItemUncheckedCreateWithoutBillInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutBillInput | Prisma.BillItemCreateOrConnectWithoutBillInput[];
    createMany?: Prisma.BillItemCreateManyBillInputEnvelope;
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
};
export type BillItemUpdateManyWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput> | Prisma.BillItemCreateWithoutBillInput[] | Prisma.BillItemUncheckedCreateWithoutBillInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutBillInput | Prisma.BillItemCreateOrConnectWithoutBillInput[];
    upsert?: Prisma.BillItemUpsertWithWhereUniqueWithoutBillInput | Prisma.BillItemUpsertWithWhereUniqueWithoutBillInput[];
    createMany?: Prisma.BillItemCreateManyBillInputEnvelope;
    set?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    disconnect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    delete?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    update?: Prisma.BillItemUpdateWithWhereUniqueWithoutBillInput | Prisma.BillItemUpdateWithWhereUniqueWithoutBillInput[];
    updateMany?: Prisma.BillItemUpdateManyWithWhereWithoutBillInput | Prisma.BillItemUpdateManyWithWhereWithoutBillInput[];
    deleteMany?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
};
export type BillItemUncheckedUpdateManyWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput> | Prisma.BillItemCreateWithoutBillInput[] | Prisma.BillItemUncheckedCreateWithoutBillInput[];
    connectOrCreate?: Prisma.BillItemCreateOrConnectWithoutBillInput | Prisma.BillItemCreateOrConnectWithoutBillInput[];
    upsert?: Prisma.BillItemUpsertWithWhereUniqueWithoutBillInput | Prisma.BillItemUpsertWithWhereUniqueWithoutBillInput[];
    createMany?: Prisma.BillItemCreateManyBillInputEnvelope;
    set?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    disconnect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    delete?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    connect?: Prisma.BillItemWhereUniqueInput | Prisma.BillItemWhereUniqueInput[];
    update?: Prisma.BillItemUpdateWithWhereUniqueWithoutBillInput | Prisma.BillItemUpdateWithWhereUniqueWithoutBillInput[];
    updateMany?: Prisma.BillItemUpdateManyWithWhereWithoutBillInput | Prisma.BillItemUpdateManyWithWhereWithoutBillInput[];
    deleteMany?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
};
export type BillItemCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    price: number;
    bill: Prisma.BillDetailsCreateNestedOneWithoutItemsInput;
};
export type BillItemUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    price: number;
    billId: string;
};
export type BillItemCreateOrConnectWithoutProductInput = {
    where: Prisma.BillItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput>;
};
export type BillItemCreateManyProductInputEnvelope = {
    data: Prisma.BillItemCreateManyProductInput | Prisma.BillItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type BillItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.BillItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillItemUpdateWithoutProductInput, Prisma.BillItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.BillItemCreateWithoutProductInput, Prisma.BillItemUncheckedCreateWithoutProductInput>;
};
export type BillItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.BillItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillItemUpdateWithoutProductInput, Prisma.BillItemUncheckedUpdateWithoutProductInput>;
};
export type BillItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.BillItemScalarWhereInput;
    data: Prisma.XOR<Prisma.BillItemUpdateManyMutationInput, Prisma.BillItemUncheckedUpdateManyWithoutProductInput>;
};
export type BillItemScalarWhereInput = {
    AND?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
    OR?: Prisma.BillItemScalarWhereInput[];
    NOT?: Prisma.BillItemScalarWhereInput | Prisma.BillItemScalarWhereInput[];
    id?: Prisma.StringFilter<"BillItem"> | string;
    quantity?: Prisma.IntFilter<"BillItem"> | number;
    price?: Prisma.IntFilter<"BillItem"> | number;
    productId?: Prisma.StringFilter<"BillItem"> | string;
    billId?: Prisma.StringFilter<"BillItem"> | string;
};
export type BillItemCreateWithoutBillInput = {
    id?: string;
    quantity: number;
    price: number;
    product: Prisma.ProductCreateNestedOneWithoutBillItemsInput;
};
export type BillItemUncheckedCreateWithoutBillInput = {
    id?: string;
    quantity: number;
    price: number;
    productId: string;
};
export type BillItemCreateOrConnectWithoutBillInput = {
    where: Prisma.BillItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput>;
};
export type BillItemCreateManyBillInputEnvelope = {
    data: Prisma.BillItemCreateManyBillInput | Prisma.BillItemCreateManyBillInput[];
    skipDuplicates?: boolean;
};
export type BillItemUpsertWithWhereUniqueWithoutBillInput = {
    where: Prisma.BillItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillItemUpdateWithoutBillInput, Prisma.BillItemUncheckedUpdateWithoutBillInput>;
    create: Prisma.XOR<Prisma.BillItemCreateWithoutBillInput, Prisma.BillItemUncheckedCreateWithoutBillInput>;
};
export type BillItemUpdateWithWhereUniqueWithoutBillInput = {
    where: Prisma.BillItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillItemUpdateWithoutBillInput, Prisma.BillItemUncheckedUpdateWithoutBillInput>;
};
export type BillItemUpdateManyWithWhereWithoutBillInput = {
    where: Prisma.BillItemScalarWhereInput;
    data: Prisma.XOR<Prisma.BillItemUpdateManyMutationInput, Prisma.BillItemUncheckedUpdateManyWithoutBillInput>;
};
export type BillItemCreateManyProductInput = {
    id?: string;
    quantity: number;
    price: number;
    billId: string;
};
export type BillItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    bill?: Prisma.BillDetailsUpdateOneRequiredWithoutItemsNestedInput;
};
export type BillItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemCreateManyBillInput = {
    id?: string;
    quantity: number;
    price: number;
    productId: string;
};
export type BillItemUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutBillItemsNestedInput;
};
export type BillItemUncheckedUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemUncheckedUpdateManyWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BillItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    price?: boolean;
    productId?: boolean;
    billId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billItem"]>;
export type BillItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    price?: boolean;
    productId?: boolean;
    billId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billItem"]>;
export type BillItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    price?: boolean;
    productId?: boolean;
    billId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billItem"]>;
export type BillItemSelectScalar = {
    id?: boolean;
    quantity?: boolean;
    price?: boolean;
    productId?: boolean;
    billId?: boolean;
};
export type BillItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quantity" | "price" | "productId" | "billId", ExtArgs["result"]["billItem"]>;
export type BillItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
};
export type BillItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
};
export type BillItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    bill?: boolean | Prisma.BillDetailsDefaultArgs<ExtArgs>;
};
export type $BillItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BillItem";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        bill: Prisma.$BillDetailsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quantity: number;
        price: number;
        productId: string;
        billId: string;
    }, ExtArgs["result"]["billItem"]>;
    composites: {};
};
export type BillItemGetPayload<S extends boolean | null | undefined | BillItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BillItemPayload, S>;
export type BillItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BillItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BillItemCountAggregateInputType | true;
};
export interface BillItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BillItem'];
        meta: {
            name: 'BillItem';
        };
    };
    /**
     * Find zero or one BillItem that matches the filter.
     * @param {BillItemFindUniqueArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillItemFindUniqueArgs>(args: Prisma.SelectSubset<T, BillItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BillItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillItemFindUniqueOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BillItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BillItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillItemFindFirstArgs>(args?: Prisma.SelectSubset<T, BillItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BillItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BillItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BillItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillItems
     * const billItems = await prisma.billItem.findMany()
     *
     * // Get first 10 BillItems
     * const billItems = await prisma.billItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const billItemWithIdOnly = await prisma.billItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BillItemFindManyArgs>(args?: Prisma.SelectSubset<T, BillItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BillItem.
     * @param {BillItemCreateArgs} args - Arguments to create a BillItem.
     * @example
     * // Create one BillItem
     * const BillItem = await prisma.billItem.create({
     *   data: {
     *     // ... data to create a BillItem
     *   }
     * })
     *
     */
    create<T extends BillItemCreateArgs>(args: Prisma.SelectSubset<T, BillItemCreateArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BillItems.
     * @param {BillItemCreateManyArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BillItemCreateManyArgs>(args?: Prisma.SelectSubset<T, BillItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BillItems and returns the data saved in the database.
     * @param {BillItemCreateManyAndReturnArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BillItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BillItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BillItem.
     * @param {BillItemDeleteArgs} args - Arguments to delete one BillItem.
     * @example
     * // Delete one BillItem
     * const BillItem = await prisma.billItem.delete({
     *   where: {
     *     // ... filter to delete one BillItem
     *   }
     * })
     *
     */
    delete<T extends BillItemDeleteArgs>(args: Prisma.SelectSubset<T, BillItemDeleteArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BillItem.
     * @param {BillItemUpdateArgs} args - Arguments to update one BillItem.
     * @example
     * // Update one BillItem
     * const billItem = await prisma.billItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BillItemUpdateArgs>(args: Prisma.SelectSubset<T, BillItemUpdateArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BillItems.
     * @param {BillItemDeleteManyArgs} args - Arguments to filter BillItems to delete.
     * @example
     * // Delete a few BillItems
     * const { count } = await prisma.billItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BillItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, BillItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BillItemUpdateManyArgs>(args: Prisma.SelectSubset<T, BillItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BillItems and returns the data updated in the database.
     * @param {BillItemUpdateManyAndReturnArgs} args - Arguments to update many BillItems.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BillItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BillItem.
     * @param {BillItemUpsertArgs} args - Arguments to update or create a BillItem.
     * @example
     * // Update or create a BillItem
     * const billItem = await prisma.billItem.upsert({
     *   create: {
     *     // ... data to create a BillItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillItem we want to update
     *   }
     * })
     */
    upsert<T extends BillItemUpsertArgs>(args: Prisma.SelectSubset<T, BillItemUpsertArgs<ExtArgs>>): Prisma.Prisma__BillItemClient<runtime.Types.Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemCountArgs} args - Arguments to filter BillItems to count.
     * @example
     * // Count the number of BillItems
     * const count = await prisma.billItem.count({
     *   where: {
     *     // ... the filter for the BillItems we want to count
     *   }
     * })
    **/
    count<T extends BillItemCountArgs>(args?: Prisma.Subset<T, BillItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BillItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillItemAggregateArgs>(args: Prisma.Subset<T, BillItemAggregateArgs>): Prisma.PrismaPromise<GetBillItemAggregateType<T>>;
    /**
     * Group by BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BillItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BillItemGroupByArgs['orderBy'];
    } : {
        orderBy?: BillItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BillItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BillItem model
     */
    readonly fields: BillItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BillItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BillItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bill<T extends Prisma.BillDetailsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillDetailsDefaultArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BillItem model
 */
export interface BillItemFieldRefs {
    readonly id: Prisma.FieldRef<"BillItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"BillItem", 'Int'>;
    readonly price: Prisma.FieldRef<"BillItem", 'Int'>;
    readonly productId: Prisma.FieldRef<"BillItem", 'String'>;
    readonly billId: Prisma.FieldRef<"BillItem", 'String'>;
}
/**
 * BillItem findUnique
 */
export type BillItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BillItem to fetch.
     */
    where: Prisma.BillItemWhereUniqueInput;
};
/**
 * BillItem findUniqueOrThrow
 */
export type BillItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BillItem to fetch.
     */
    where: Prisma.BillItemWhereUniqueInput;
};
/**
 * BillItem findFirst
 */
export type BillItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BillItem to fetch.
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillItems to fetch.
     */
    orderBy?: Prisma.BillItemOrderByWithRelationInput | Prisma.BillItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BillItems.
     */
    cursor?: Prisma.BillItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BillItems.
     */
    distinct?: Prisma.BillItemScalarFieldEnum | Prisma.BillItemScalarFieldEnum[];
};
/**
 * BillItem findFirstOrThrow
 */
export type BillItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BillItem to fetch.
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillItems to fetch.
     */
    orderBy?: Prisma.BillItemOrderByWithRelationInput | Prisma.BillItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BillItems.
     */
    cursor?: Prisma.BillItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BillItems.
     */
    distinct?: Prisma.BillItemScalarFieldEnum | Prisma.BillItemScalarFieldEnum[];
};
/**
 * BillItem findMany
 */
export type BillItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BillItems to fetch.
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BillItems to fetch.
     */
    orderBy?: Prisma.BillItemOrderByWithRelationInput | Prisma.BillItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BillItems.
     */
    cursor?: Prisma.BillItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BillItems.
     */
    skip?: number;
    distinct?: Prisma.BillItemScalarFieldEnum | Prisma.BillItemScalarFieldEnum[];
};
/**
 * BillItem create
 */
export type BillItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BillItem.
     */
    data: Prisma.XOR<Prisma.BillItemCreateInput, Prisma.BillItemUncheckedCreateInput>;
};
/**
 * BillItem createMany
 */
export type BillItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillItems.
     */
    data: Prisma.BillItemCreateManyInput | Prisma.BillItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BillItem createManyAndReturn
 */
export type BillItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: Prisma.BillItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BillItem
     */
    omit?: Prisma.BillItemOmit<ExtArgs> | null;
    /**
     * The data used to create many BillItems.
     */
    data: Prisma.BillItemCreateManyInput | Prisma.BillItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BillItem update
 */
export type BillItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BillItem.
     */
    data: Prisma.XOR<Prisma.BillItemUpdateInput, Prisma.BillItemUncheckedUpdateInput>;
    /**
     * Choose, which BillItem to update.
     */
    where: Prisma.BillItemWhereUniqueInput;
};
/**
 * BillItem updateMany
 */
export type BillItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BillItems.
     */
    data: Prisma.XOR<Prisma.BillItemUpdateManyMutationInput, Prisma.BillItemUncheckedUpdateManyInput>;
    /**
     * Filter which BillItems to update
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * Limit how many BillItems to update.
     */
    limit?: number;
};
/**
 * BillItem updateManyAndReturn
 */
export type BillItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: Prisma.BillItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BillItem
     */
    omit?: Prisma.BillItemOmit<ExtArgs> | null;
    /**
     * The data used to update BillItems.
     */
    data: Prisma.XOR<Prisma.BillItemUpdateManyMutationInput, Prisma.BillItemUncheckedUpdateManyInput>;
    /**
     * Filter which BillItems to update
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * Limit how many BillItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BillItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BillItem upsert
 */
export type BillItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BillItem to update in case it exists.
     */
    where: Prisma.BillItemWhereUniqueInput;
    /**
     * In case the BillItem found by the `where` argument doesn't exist, create a new BillItem with this data.
     */
    create: Prisma.XOR<Prisma.BillItemCreateInput, Prisma.BillItemUncheckedCreateInput>;
    /**
     * In case the BillItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BillItemUpdateInput, Prisma.BillItemUncheckedUpdateInput>;
};
/**
 * BillItem delete
 */
export type BillItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BillItem to delete.
     */
    where: Prisma.BillItemWhereUniqueInput;
};
/**
 * BillItem deleteMany
 */
export type BillItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BillItems to delete
     */
    where?: Prisma.BillItemWhereInput;
    /**
     * Limit how many BillItems to delete.
     */
    limit?: number;
};
/**
 * BillItem without action
 */
export type BillItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=BillItem.d.ts.map