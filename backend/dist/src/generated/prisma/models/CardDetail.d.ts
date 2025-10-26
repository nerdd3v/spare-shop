import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CardDetail
 *
 */
export type CardDetailModel = runtime.Types.Result.DefaultSelection<Prisma.$CardDetailPayload>;
export type AggregateCardDetail = {
    _count: CardDetailCountAggregateOutputType | null;
    _avg: CardDetailAvgAggregateOutputType | null;
    _sum: CardDetailSumAggregateOutputType | null;
    _min: CardDetailMinAggregateOutputType | null;
    _max: CardDetailMaxAggregateOutputType | null;
};
export type CardDetailAvgAggregateOutputType = {
    accountNumber: number | null;
};
export type CardDetailSumAggregateOutputType = {
    accountNumber: bigint | null;
};
export type CardDetailMinAggregateOutputType = {
    id: string | null;
    accountNumber: bigint | null;
    accountHolder: string | null;
    cardType: $Enums.CardType | null;
    bank: string | null;
    billId: string | null;
};
export type CardDetailMaxAggregateOutputType = {
    id: string | null;
    accountNumber: bigint | null;
    accountHolder: string | null;
    cardType: $Enums.CardType | null;
    bank: string | null;
    billId: string | null;
};
export type CardDetailCountAggregateOutputType = {
    id: number;
    accountNumber: number;
    accountHolder: number;
    cardType: number;
    bank: number;
    billId: number;
    _all: number;
};
export type CardDetailAvgAggregateInputType = {
    accountNumber?: true;
};
export type CardDetailSumAggregateInputType = {
    accountNumber?: true;
};
export type CardDetailMinAggregateInputType = {
    id?: true;
    accountNumber?: true;
    accountHolder?: true;
    cardType?: true;
    bank?: true;
    billId?: true;
};
export type CardDetailMaxAggregateInputType = {
    id?: true;
    accountNumber?: true;
    accountHolder?: true;
    cardType?: true;
    bank?: true;
    billId?: true;
};
export type CardDetailCountAggregateInputType = {
    id?: true;
    accountNumber?: true;
    accountHolder?: true;
    cardType?: true;
    bank?: true;
    billId?: true;
    _all?: true;
};
export type CardDetailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CardDetail to aggregate.
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CardDetails to fetch.
     */
    orderBy?: Prisma.CardDetailOrderByWithRelationInput | Prisma.CardDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CardDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CardDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CardDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CardDetails
    **/
    _count?: true | CardDetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CardDetailAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CardDetailSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CardDetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CardDetailMaxAggregateInputType;
};
export type GetCardDetailAggregateType<T extends CardDetailAggregateArgs> = {
    [P in keyof T & keyof AggregateCardDetail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCardDetail[P]> : Prisma.GetScalarType<T[P], AggregateCardDetail[P]>;
};
export type CardDetailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardDetailWhereInput;
    orderBy?: Prisma.CardDetailOrderByWithAggregationInput | Prisma.CardDetailOrderByWithAggregationInput[];
    by: Prisma.CardDetailScalarFieldEnum[] | Prisma.CardDetailScalarFieldEnum;
    having?: Prisma.CardDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CardDetailCountAggregateInputType | true;
    _avg?: CardDetailAvgAggregateInputType;
    _sum?: CardDetailSumAggregateInputType;
    _min?: CardDetailMinAggregateInputType;
    _max?: CardDetailMaxAggregateInputType;
};
export type CardDetailGroupByOutputType = {
    id: string;
    accountNumber: bigint;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
    billId: string;
    _count: CardDetailCountAggregateOutputType | null;
    _avg: CardDetailAvgAggregateOutputType | null;
    _sum: CardDetailSumAggregateOutputType | null;
    _min: CardDetailMinAggregateOutputType | null;
    _max: CardDetailMaxAggregateOutputType | null;
};
type GetCardDetailGroupByPayload<T extends CardDetailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CardDetailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CardDetailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CardDetailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CardDetailGroupByOutputType[P]>;
}>>;
export type CardDetailWhereInput = {
    AND?: Prisma.CardDetailWhereInput | Prisma.CardDetailWhereInput[];
    OR?: Prisma.CardDetailWhereInput[];
    NOT?: Prisma.CardDetailWhereInput | Prisma.CardDetailWhereInput[];
    id?: Prisma.StringFilter<"CardDetail"> | string;
    accountNumber?: Prisma.BigIntFilter<"CardDetail"> | bigint | number;
    accountHolder?: Prisma.StringFilter<"CardDetail"> | string;
    cardType?: Prisma.EnumCardTypeFilter<"CardDetail"> | $Enums.CardType;
    bank?: Prisma.StringFilter<"CardDetail"> | string;
    billId?: Prisma.StringFilter<"CardDetail"> | string;
    Bill?: Prisma.XOR<Prisma.BillDetailsNullableScalarRelationFilter, Prisma.BillDetailsWhereInput> | null;
};
export type CardDetailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountHolder?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    bank?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    Bill?: Prisma.BillDetailsOrderByWithRelationInput;
};
export type CardDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    billId?: string;
    AND?: Prisma.CardDetailWhereInput | Prisma.CardDetailWhereInput[];
    OR?: Prisma.CardDetailWhereInput[];
    NOT?: Prisma.CardDetailWhereInput | Prisma.CardDetailWhereInput[];
    accountNumber?: Prisma.BigIntFilter<"CardDetail"> | bigint | number;
    accountHolder?: Prisma.StringFilter<"CardDetail"> | string;
    cardType?: Prisma.EnumCardTypeFilter<"CardDetail"> | $Enums.CardType;
    bank?: Prisma.StringFilter<"CardDetail"> | string;
    Bill?: Prisma.XOR<Prisma.BillDetailsNullableScalarRelationFilter, Prisma.BillDetailsWhereInput> | null;
}, "id" | "id" | "billId">;
export type CardDetailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountHolder?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    bank?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    _count?: Prisma.CardDetailCountOrderByAggregateInput;
    _avg?: Prisma.CardDetailAvgOrderByAggregateInput;
    _max?: Prisma.CardDetailMaxOrderByAggregateInput;
    _min?: Prisma.CardDetailMinOrderByAggregateInput;
    _sum?: Prisma.CardDetailSumOrderByAggregateInput;
};
export type CardDetailScalarWhereWithAggregatesInput = {
    AND?: Prisma.CardDetailScalarWhereWithAggregatesInput | Prisma.CardDetailScalarWhereWithAggregatesInput[];
    OR?: Prisma.CardDetailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CardDetailScalarWhereWithAggregatesInput | Prisma.CardDetailScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CardDetail"> | string;
    accountNumber?: Prisma.BigIntWithAggregatesFilter<"CardDetail"> | bigint | number;
    accountHolder?: Prisma.StringWithAggregatesFilter<"CardDetail"> | string;
    cardType?: Prisma.EnumCardTypeWithAggregatesFilter<"CardDetail"> | $Enums.CardType;
    bank?: Prisma.StringWithAggregatesFilter<"CardDetail"> | string;
    billId?: Prisma.StringWithAggregatesFilter<"CardDetail"> | string;
};
export type CardDetailCreateInput = {
    id?: string;
    accountNumber: bigint | number;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
    Bill?: Prisma.BillDetailsCreateNestedOneWithoutCardDetailsInput;
};
export type CardDetailUncheckedCreateInput = {
    id?: string;
    accountNumber: bigint | number;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
    billId: string;
};
export type CardDetailUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
    Bill?: Prisma.BillDetailsUpdateOneWithoutCardDetailsNestedInput;
};
export type CardDetailUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardDetailCreateManyInput = {
    id?: string;
    accountNumber: bigint | number;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
    billId: string;
};
export type CardDetailUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardDetailUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardDetailNullableScalarRelationFilter = {
    is?: Prisma.CardDetailWhereInput | null;
    isNot?: Prisma.CardDetailWhereInput | null;
};
export type CardDetailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountHolder?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    bank?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type CardDetailAvgOrderByAggregateInput = {
    accountNumber?: Prisma.SortOrder;
};
export type CardDetailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountHolder?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    bank?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type CardDetailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountHolder?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    bank?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type CardDetailSumOrderByAggregateInput = {
    accountNumber?: Prisma.SortOrder;
};
export type CardDetailCreateNestedOneWithoutBillInput = {
    create?: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.CardDetailCreateOrConnectWithoutBillInput;
    connect?: Prisma.CardDetailWhereUniqueInput;
};
export type CardDetailUncheckedCreateNestedOneWithoutBillInput = {
    create?: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.CardDetailCreateOrConnectWithoutBillInput;
    connect?: Prisma.CardDetailWhereUniqueInput;
};
export type CardDetailUpdateOneWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.CardDetailCreateOrConnectWithoutBillInput;
    upsert?: Prisma.CardDetailUpsertWithoutBillInput;
    disconnect?: Prisma.CardDetailWhereInput | boolean;
    delete?: Prisma.CardDetailWhereInput | boolean;
    connect?: Prisma.CardDetailWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CardDetailUpdateToOneWithWhereWithoutBillInput, Prisma.CardDetailUpdateWithoutBillInput>, Prisma.CardDetailUncheckedUpdateWithoutBillInput>;
};
export type CardDetailUncheckedUpdateOneWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.CardDetailCreateOrConnectWithoutBillInput;
    upsert?: Prisma.CardDetailUpsertWithoutBillInput;
    disconnect?: Prisma.CardDetailWhereInput | boolean;
    delete?: Prisma.CardDetailWhereInput | boolean;
    connect?: Prisma.CardDetailWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CardDetailUpdateToOneWithWhereWithoutBillInput, Prisma.CardDetailUpdateWithoutBillInput>, Prisma.CardDetailUncheckedUpdateWithoutBillInput>;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type EnumCardTypeFieldUpdateOperationsInput = {
    set?: $Enums.CardType;
};
export type CardDetailCreateWithoutBillInput = {
    id?: string;
    accountNumber: bigint | number;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
};
export type CardDetailUncheckedCreateWithoutBillInput = {
    id?: string;
    accountNumber: bigint | number;
    accountHolder: string;
    cardType: $Enums.CardType;
    bank: string;
};
export type CardDetailCreateOrConnectWithoutBillInput = {
    where: Prisma.CardDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
};
export type CardDetailUpsertWithoutBillInput = {
    update: Prisma.XOR<Prisma.CardDetailUpdateWithoutBillInput, Prisma.CardDetailUncheckedUpdateWithoutBillInput>;
    create: Prisma.XOR<Prisma.CardDetailCreateWithoutBillInput, Prisma.CardDetailUncheckedCreateWithoutBillInput>;
    where?: Prisma.CardDetailWhereInput;
};
export type CardDetailUpdateToOneWithWhereWithoutBillInput = {
    where?: Prisma.CardDetailWhereInput;
    data: Prisma.XOR<Prisma.CardDetailUpdateWithoutBillInput, Prisma.CardDetailUncheckedUpdateWithoutBillInput>;
};
export type CardDetailUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardDetailUncheckedUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accountHolder?: Prisma.StringFieldUpdateOperationsInput | string;
    cardType?: Prisma.EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType;
    bank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardDetailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    accountNumber?: boolean;
    accountHolder?: boolean;
    cardType?: boolean;
    bank?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["cardDetail"]>;
export type CardDetailSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    accountNumber?: boolean;
    accountHolder?: boolean;
    cardType?: boolean;
    bank?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["cardDetail"]>;
export type CardDetailSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    accountNumber?: boolean;
    accountHolder?: boolean;
    cardType?: boolean;
    bank?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["cardDetail"]>;
export type CardDetailSelectScalar = {
    id?: boolean;
    accountNumber?: boolean;
    accountHolder?: boolean;
    cardType?: boolean;
    bank?: boolean;
    billId?: boolean;
};
export type CardDetailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "accountNumber" | "accountHolder" | "cardType" | "bank" | "billId", ExtArgs["result"]["cardDetail"]>;
export type CardDetailInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
};
export type CardDetailIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
};
export type CardDetailIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.CardDetail$BillArgs<ExtArgs>;
};
export type $CardDetailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CardDetail";
    objects: {
        Bill: Prisma.$BillDetailsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        accountNumber: bigint;
        accountHolder: string;
        cardType: $Enums.CardType;
        bank: string;
        billId: string;
    }, ExtArgs["result"]["cardDetail"]>;
    composites: {};
};
export type CardDetailGetPayload<S extends boolean | null | undefined | CardDetailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CardDetailPayload, S>;
export type CardDetailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CardDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CardDetailCountAggregateInputType | true;
};
export interface CardDetailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CardDetail'];
        meta: {
            name: 'CardDetail';
        };
    };
    /**
     * Find zero or one CardDetail that matches the filter.
     * @param {CardDetailFindUniqueArgs} args - Arguments to find a CardDetail
     * @example
     * // Get one CardDetail
     * const cardDetail = await prisma.cardDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardDetailFindUniqueArgs>(args: Prisma.SelectSubset<T, CardDetailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CardDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardDetailFindUniqueOrThrowArgs} args - Arguments to find a CardDetail
     * @example
     * // Get one CardDetail
     * const cardDetail = await prisma.cardDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardDetailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CardDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CardDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailFindFirstArgs} args - Arguments to find a CardDetail
     * @example
     * // Get one CardDetail
     * const cardDetail = await prisma.cardDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardDetailFindFirstArgs>(args?: Prisma.SelectSubset<T, CardDetailFindFirstArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CardDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailFindFirstOrThrowArgs} args - Arguments to find a CardDetail
     * @example
     * // Get one CardDetail
     * const cardDetail = await prisma.cardDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardDetailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CardDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CardDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardDetails
     * const cardDetails = await prisma.cardDetail.findMany()
     *
     * // Get first 10 CardDetails
     * const cardDetails = await prisma.cardDetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cardDetailWithIdOnly = await prisma.cardDetail.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CardDetailFindManyArgs>(args?: Prisma.SelectSubset<T, CardDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CardDetail.
     * @param {CardDetailCreateArgs} args - Arguments to create a CardDetail.
     * @example
     * // Create one CardDetail
     * const CardDetail = await prisma.cardDetail.create({
     *   data: {
     *     // ... data to create a CardDetail
     *   }
     * })
     *
     */
    create<T extends CardDetailCreateArgs>(args: Prisma.SelectSubset<T, CardDetailCreateArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CardDetails.
     * @param {CardDetailCreateManyArgs} args - Arguments to create many CardDetails.
     * @example
     * // Create many CardDetails
     * const cardDetail = await prisma.cardDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CardDetailCreateManyArgs>(args?: Prisma.SelectSubset<T, CardDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CardDetails and returns the data saved in the database.
     * @param {CardDetailCreateManyAndReturnArgs} args - Arguments to create many CardDetails.
     * @example
     * // Create many CardDetails
     * const cardDetail = await prisma.cardDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CardDetails and only return the `id`
     * const cardDetailWithIdOnly = await prisma.cardDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CardDetailCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CardDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CardDetail.
     * @param {CardDetailDeleteArgs} args - Arguments to delete one CardDetail.
     * @example
     * // Delete one CardDetail
     * const CardDetail = await prisma.cardDetail.delete({
     *   where: {
     *     // ... filter to delete one CardDetail
     *   }
     * })
     *
     */
    delete<T extends CardDetailDeleteArgs>(args: Prisma.SelectSubset<T, CardDetailDeleteArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CardDetail.
     * @param {CardDetailUpdateArgs} args - Arguments to update one CardDetail.
     * @example
     * // Update one CardDetail
     * const cardDetail = await prisma.cardDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CardDetailUpdateArgs>(args: Prisma.SelectSubset<T, CardDetailUpdateArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CardDetails.
     * @param {CardDetailDeleteManyArgs} args - Arguments to filter CardDetails to delete.
     * @example
     * // Delete a few CardDetails
     * const { count } = await prisma.cardDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CardDetailDeleteManyArgs>(args?: Prisma.SelectSubset<T, CardDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CardDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardDetails
     * const cardDetail = await prisma.cardDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CardDetailUpdateManyArgs>(args: Prisma.SelectSubset<T, CardDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CardDetails and returns the data updated in the database.
     * @param {CardDetailUpdateManyAndReturnArgs} args - Arguments to update many CardDetails.
     * @example
     * // Update many CardDetails
     * const cardDetail = await prisma.cardDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CardDetails and only return the `id`
     * const cardDetailWithIdOnly = await prisma.cardDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardDetailUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CardDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CardDetail.
     * @param {CardDetailUpsertArgs} args - Arguments to update or create a CardDetail.
     * @example
     * // Update or create a CardDetail
     * const cardDetail = await prisma.cardDetail.upsert({
     *   create: {
     *     // ... data to create a CardDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardDetail we want to update
     *   }
     * })
     */
    upsert<T extends CardDetailUpsertArgs>(args: Prisma.SelectSubset<T, CardDetailUpsertArgs<ExtArgs>>): Prisma.Prisma__CardDetailClient<runtime.Types.Result.GetResult<Prisma.$CardDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CardDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailCountArgs} args - Arguments to filter CardDetails to count.
     * @example
     * // Count the number of CardDetails
     * const count = await prisma.cardDetail.count({
     *   where: {
     *     // ... the filter for the CardDetails we want to count
     *   }
     * })
    **/
    count<T extends CardDetailCountArgs>(args?: Prisma.Subset<T, CardDetailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CardDetailCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CardDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardDetailAggregateArgs>(args: Prisma.Subset<T, CardDetailAggregateArgs>): Prisma.PrismaPromise<GetCardDetailAggregateType<T>>;
    /**
     * Group by CardDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDetailGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CardDetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CardDetailGroupByArgs['orderBy'];
    } : {
        orderBy?: CardDetailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CardDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CardDetail model
     */
    readonly fields: CardDetailFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CardDetail.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CardDetailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Bill<T extends Prisma.CardDetail$BillArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CardDetail$BillArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CardDetail model
 */
export interface CardDetailFieldRefs {
    readonly id: Prisma.FieldRef<"CardDetail", 'String'>;
    readonly accountNumber: Prisma.FieldRef<"CardDetail", 'BigInt'>;
    readonly accountHolder: Prisma.FieldRef<"CardDetail", 'String'>;
    readonly cardType: Prisma.FieldRef<"CardDetail", 'CardType'>;
    readonly bank: Prisma.FieldRef<"CardDetail", 'String'>;
    readonly billId: Prisma.FieldRef<"CardDetail", 'String'>;
}
/**
 * CardDetail findUnique
 */
export type CardDetailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CardDetail to fetch.
     */
    where: Prisma.CardDetailWhereUniqueInput;
};
/**
 * CardDetail findUniqueOrThrow
 */
export type CardDetailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CardDetail to fetch.
     */
    where: Prisma.CardDetailWhereUniqueInput;
};
/**
 * CardDetail findFirst
 */
export type CardDetailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CardDetail to fetch.
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CardDetails to fetch.
     */
    orderBy?: Prisma.CardDetailOrderByWithRelationInput | Prisma.CardDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CardDetails.
     */
    cursor?: Prisma.CardDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CardDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CardDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CardDetails.
     */
    distinct?: Prisma.CardDetailScalarFieldEnum | Prisma.CardDetailScalarFieldEnum[];
};
/**
 * CardDetail findFirstOrThrow
 */
export type CardDetailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CardDetail to fetch.
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CardDetails to fetch.
     */
    orderBy?: Prisma.CardDetailOrderByWithRelationInput | Prisma.CardDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CardDetails.
     */
    cursor?: Prisma.CardDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CardDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CardDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CardDetails.
     */
    distinct?: Prisma.CardDetailScalarFieldEnum | Prisma.CardDetailScalarFieldEnum[];
};
/**
 * CardDetail findMany
 */
export type CardDetailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CardDetails to fetch.
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CardDetails to fetch.
     */
    orderBy?: Prisma.CardDetailOrderByWithRelationInput | Prisma.CardDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CardDetails.
     */
    cursor?: Prisma.CardDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CardDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CardDetails.
     */
    skip?: number;
    distinct?: Prisma.CardDetailScalarFieldEnum | Prisma.CardDetailScalarFieldEnum[];
};
/**
 * CardDetail create
 */
export type CardDetailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CardDetail.
     */
    data: Prisma.XOR<Prisma.CardDetailCreateInput, Prisma.CardDetailUncheckedCreateInput>;
};
/**
 * CardDetail createMany
 */
export type CardDetailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardDetails.
     */
    data: Prisma.CardDetailCreateManyInput | Prisma.CardDetailCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CardDetail createManyAndReturn
 */
export type CardDetailCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDetail
     */
    select?: Prisma.CardDetailSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CardDetail
     */
    omit?: Prisma.CardDetailOmit<ExtArgs> | null;
    /**
     * The data used to create many CardDetails.
     */
    data: Prisma.CardDetailCreateManyInput | Prisma.CardDetailCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardDetailIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CardDetail update
 */
export type CardDetailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CardDetail.
     */
    data: Prisma.XOR<Prisma.CardDetailUpdateInput, Prisma.CardDetailUncheckedUpdateInput>;
    /**
     * Choose, which CardDetail to update.
     */
    where: Prisma.CardDetailWhereUniqueInput;
};
/**
 * CardDetail updateMany
 */
export type CardDetailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CardDetails.
     */
    data: Prisma.XOR<Prisma.CardDetailUpdateManyMutationInput, Prisma.CardDetailUncheckedUpdateManyInput>;
    /**
     * Filter which CardDetails to update
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * Limit how many CardDetails to update.
     */
    limit?: number;
};
/**
 * CardDetail updateManyAndReturn
 */
export type CardDetailUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDetail
     */
    select?: Prisma.CardDetailSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CardDetail
     */
    omit?: Prisma.CardDetailOmit<ExtArgs> | null;
    /**
     * The data used to update CardDetails.
     */
    data: Prisma.XOR<Prisma.CardDetailUpdateManyMutationInput, Prisma.CardDetailUncheckedUpdateManyInput>;
    /**
     * Filter which CardDetails to update
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * Limit how many CardDetails to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardDetailIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CardDetail upsert
 */
export type CardDetailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CardDetail to update in case it exists.
     */
    where: Prisma.CardDetailWhereUniqueInput;
    /**
     * In case the CardDetail found by the `where` argument doesn't exist, create a new CardDetail with this data.
     */
    create: Prisma.XOR<Prisma.CardDetailCreateInput, Prisma.CardDetailUncheckedCreateInput>;
    /**
     * In case the CardDetail was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CardDetailUpdateInput, Prisma.CardDetailUncheckedUpdateInput>;
};
/**
 * CardDetail delete
 */
export type CardDetailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CardDetail to delete.
     */
    where: Prisma.CardDetailWhereUniqueInput;
};
/**
 * CardDetail deleteMany
 */
export type CardDetailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CardDetails to delete
     */
    where?: Prisma.CardDetailWhereInput;
    /**
     * Limit how many CardDetails to delete.
     */
    limit?: number;
};
/**
 * CardDetail.Bill
 */
export type CardDetail$BillArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.BillDetailsWhereInput;
};
/**
 * CardDetail without action
 */
export type CardDetailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=CardDetail.d.ts.map