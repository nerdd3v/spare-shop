import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UPIdetail
 *
 */
export type UPIdetailModel = runtime.Types.Result.DefaultSelection<Prisma.$UPIdetailPayload>;
export type AggregateUPIdetail = {
    _count: UPIdetailCountAggregateOutputType | null;
    _min: UPIdetailMinAggregateOutputType | null;
    _max: UPIdetailMaxAggregateOutputType | null;
};
export type UPIdetailMinAggregateOutputType = {
    id: string | null;
    upiId: string | null;
    application: string | null;
    billId: string | null;
};
export type UPIdetailMaxAggregateOutputType = {
    id: string | null;
    upiId: string | null;
    application: string | null;
    billId: string | null;
};
export type UPIdetailCountAggregateOutputType = {
    id: number;
    upiId: number;
    application: number;
    billId: number;
    _all: number;
};
export type UPIdetailMinAggregateInputType = {
    id?: true;
    upiId?: true;
    application?: true;
    billId?: true;
};
export type UPIdetailMaxAggregateInputType = {
    id?: true;
    upiId?: true;
    application?: true;
    billId?: true;
};
export type UPIdetailCountAggregateInputType = {
    id?: true;
    upiId?: true;
    application?: true;
    billId?: true;
    _all?: true;
};
export type UPIdetailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UPIdetail to aggregate.
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UPIdetails to fetch.
     */
    orderBy?: Prisma.UPIdetailOrderByWithRelationInput | Prisma.UPIdetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UPIdetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UPIdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UPIdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UPIdetails
    **/
    _count?: true | UPIdetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UPIdetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UPIdetailMaxAggregateInputType;
};
export type GetUPIdetailAggregateType<T extends UPIdetailAggregateArgs> = {
    [P in keyof T & keyof AggregateUPIdetail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUPIdetail[P]> : Prisma.GetScalarType<T[P], AggregateUPIdetail[P]>;
};
export type UPIdetailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UPIdetailWhereInput;
    orderBy?: Prisma.UPIdetailOrderByWithAggregationInput | Prisma.UPIdetailOrderByWithAggregationInput[];
    by: Prisma.UPIdetailScalarFieldEnum[] | Prisma.UPIdetailScalarFieldEnum;
    having?: Prisma.UPIdetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UPIdetailCountAggregateInputType | true;
    _min?: UPIdetailMinAggregateInputType;
    _max?: UPIdetailMaxAggregateInputType;
};
export type UPIdetailGroupByOutputType = {
    id: string;
    upiId: string;
    application: string;
    billId: string;
    _count: UPIdetailCountAggregateOutputType | null;
    _min: UPIdetailMinAggregateOutputType | null;
    _max: UPIdetailMaxAggregateOutputType | null;
};
type GetUPIdetailGroupByPayload<T extends UPIdetailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UPIdetailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UPIdetailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UPIdetailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UPIdetailGroupByOutputType[P]>;
}>>;
export type UPIdetailWhereInput = {
    AND?: Prisma.UPIdetailWhereInput | Prisma.UPIdetailWhereInput[];
    OR?: Prisma.UPIdetailWhereInput[];
    NOT?: Prisma.UPIdetailWhereInput | Prisma.UPIdetailWhereInput[];
    id?: Prisma.StringFilter<"UPIdetail"> | string;
    upiId?: Prisma.StringFilter<"UPIdetail"> | string;
    application?: Prisma.StringFilter<"UPIdetail"> | string;
    billId?: Prisma.StringFilter<"UPIdetail"> | string;
    Bill?: Prisma.XOR<Prisma.BillDetailsNullableScalarRelationFilter, Prisma.BillDetailsWhereInput> | null;
};
export type UPIdetailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    upiId?: Prisma.SortOrder;
    application?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    Bill?: Prisma.BillDetailsOrderByWithRelationInput;
};
export type UPIdetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    billId?: string;
    AND?: Prisma.UPIdetailWhereInput | Prisma.UPIdetailWhereInput[];
    OR?: Prisma.UPIdetailWhereInput[];
    NOT?: Prisma.UPIdetailWhereInput | Prisma.UPIdetailWhereInput[];
    upiId?: Prisma.StringFilter<"UPIdetail"> | string;
    application?: Prisma.StringFilter<"UPIdetail"> | string;
    Bill?: Prisma.XOR<Prisma.BillDetailsNullableScalarRelationFilter, Prisma.BillDetailsWhereInput> | null;
}, "id" | "id" | "billId">;
export type UPIdetailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    upiId?: Prisma.SortOrder;
    application?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
    _count?: Prisma.UPIdetailCountOrderByAggregateInput;
    _max?: Prisma.UPIdetailMaxOrderByAggregateInput;
    _min?: Prisma.UPIdetailMinOrderByAggregateInput;
};
export type UPIdetailScalarWhereWithAggregatesInput = {
    AND?: Prisma.UPIdetailScalarWhereWithAggregatesInput | Prisma.UPIdetailScalarWhereWithAggregatesInput[];
    OR?: Prisma.UPIdetailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UPIdetailScalarWhereWithAggregatesInput | Prisma.UPIdetailScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UPIdetail"> | string;
    upiId?: Prisma.StringWithAggregatesFilter<"UPIdetail"> | string;
    application?: Prisma.StringWithAggregatesFilter<"UPIdetail"> | string;
    billId?: Prisma.StringWithAggregatesFilter<"UPIdetail"> | string;
};
export type UPIdetailCreateInput = {
    id?: string;
    upiId: string;
    application: string;
    Bill?: Prisma.BillDetailsCreateNestedOneWithoutUpiDetailsInput;
};
export type UPIdetailUncheckedCreateInput = {
    id?: string;
    upiId: string;
    application: string;
    billId: string;
};
export type UPIdetailUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
    Bill?: Prisma.BillDetailsUpdateOneWithoutUpiDetailsNestedInput;
};
export type UPIdetailUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UPIdetailCreateManyInput = {
    id?: string;
    upiId: string;
    application: string;
    billId: string;
};
export type UPIdetailUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UPIdetailUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
    billId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UPIdetailNullableScalarRelationFilter = {
    is?: Prisma.UPIdetailWhereInput | null;
    isNot?: Prisma.UPIdetailWhereInput | null;
};
export type UPIdetailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    upiId?: Prisma.SortOrder;
    application?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type UPIdetailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    upiId?: Prisma.SortOrder;
    application?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type UPIdetailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    upiId?: Prisma.SortOrder;
    application?: Prisma.SortOrder;
    billId?: Prisma.SortOrder;
};
export type UPIdetailCreateNestedOneWithoutBillInput = {
    create?: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.UPIdetailCreateOrConnectWithoutBillInput;
    connect?: Prisma.UPIdetailWhereUniqueInput;
};
export type UPIdetailUncheckedCreateNestedOneWithoutBillInput = {
    create?: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.UPIdetailCreateOrConnectWithoutBillInput;
    connect?: Prisma.UPIdetailWhereUniqueInput;
};
export type UPIdetailUpdateOneWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.UPIdetailCreateOrConnectWithoutBillInput;
    upsert?: Prisma.UPIdetailUpsertWithoutBillInput;
    disconnect?: Prisma.UPIdetailWhereInput | boolean;
    delete?: Prisma.UPIdetailWhereInput | boolean;
    connect?: Prisma.UPIdetailWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UPIdetailUpdateToOneWithWhereWithoutBillInput, Prisma.UPIdetailUpdateWithoutBillInput>, Prisma.UPIdetailUncheckedUpdateWithoutBillInput>;
};
export type UPIdetailUncheckedUpdateOneWithoutBillNestedInput = {
    create?: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
    connectOrCreate?: Prisma.UPIdetailCreateOrConnectWithoutBillInput;
    upsert?: Prisma.UPIdetailUpsertWithoutBillInput;
    disconnect?: Prisma.UPIdetailWhereInput | boolean;
    delete?: Prisma.UPIdetailWhereInput | boolean;
    connect?: Prisma.UPIdetailWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UPIdetailUpdateToOneWithWhereWithoutBillInput, Prisma.UPIdetailUpdateWithoutBillInput>, Prisma.UPIdetailUncheckedUpdateWithoutBillInput>;
};
export type UPIdetailCreateWithoutBillInput = {
    id?: string;
    upiId: string;
    application: string;
};
export type UPIdetailUncheckedCreateWithoutBillInput = {
    id?: string;
    upiId: string;
    application: string;
};
export type UPIdetailCreateOrConnectWithoutBillInput = {
    where: Prisma.UPIdetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
};
export type UPIdetailUpsertWithoutBillInput = {
    update: Prisma.XOR<Prisma.UPIdetailUpdateWithoutBillInput, Prisma.UPIdetailUncheckedUpdateWithoutBillInput>;
    create: Prisma.XOR<Prisma.UPIdetailCreateWithoutBillInput, Prisma.UPIdetailUncheckedCreateWithoutBillInput>;
    where?: Prisma.UPIdetailWhereInput;
};
export type UPIdetailUpdateToOneWithWhereWithoutBillInput = {
    where?: Prisma.UPIdetailWhereInput;
    data: Prisma.XOR<Prisma.UPIdetailUpdateWithoutBillInput, Prisma.UPIdetailUncheckedUpdateWithoutBillInput>;
};
export type UPIdetailUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UPIdetailUncheckedUpdateWithoutBillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    upiId?: Prisma.StringFieldUpdateOperationsInput | string;
    application?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UPIdetailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    upiId?: boolean;
    application?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["uPIdetail"]>;
export type UPIdetailSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    upiId?: boolean;
    application?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["uPIdetail"]>;
export type UPIdetailSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    upiId?: boolean;
    application?: boolean;
    billId?: boolean;
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
}, ExtArgs["result"]["uPIdetail"]>;
export type UPIdetailSelectScalar = {
    id?: boolean;
    upiId?: boolean;
    application?: boolean;
    billId?: boolean;
};
export type UPIdetailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "upiId" | "application" | "billId", ExtArgs["result"]["uPIdetail"]>;
export type UPIdetailInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
};
export type UPIdetailIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
};
export type UPIdetailIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Bill?: boolean | Prisma.UPIdetail$BillArgs<ExtArgs>;
};
export type $UPIdetailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UPIdetail";
    objects: {
        Bill: Prisma.$BillDetailsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        upiId: string;
        application: string;
        billId: string;
    }, ExtArgs["result"]["uPIdetail"]>;
    composites: {};
};
export type UPIdetailGetPayload<S extends boolean | null | undefined | UPIdetailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload, S>;
export type UPIdetailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UPIdetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UPIdetailCountAggregateInputType | true;
};
export interface UPIdetailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UPIdetail'];
        meta: {
            name: 'UPIdetail';
        };
    };
    /**
     * Find zero or one UPIdetail that matches the filter.
     * @param {UPIdetailFindUniqueArgs} args - Arguments to find a UPIdetail
     * @example
     * // Get one UPIdetail
     * const uPIdetail = await prisma.uPIdetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UPIdetailFindUniqueArgs>(args: Prisma.SelectSubset<T, UPIdetailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UPIdetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UPIdetailFindUniqueOrThrowArgs} args - Arguments to find a UPIdetail
     * @example
     * // Get one UPIdetail
     * const uPIdetail = await prisma.uPIdetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UPIdetailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UPIdetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UPIdetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailFindFirstArgs} args - Arguments to find a UPIdetail
     * @example
     * // Get one UPIdetail
     * const uPIdetail = await prisma.uPIdetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UPIdetailFindFirstArgs>(args?: Prisma.SelectSubset<T, UPIdetailFindFirstArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UPIdetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailFindFirstOrThrowArgs} args - Arguments to find a UPIdetail
     * @example
     * // Get one UPIdetail
     * const uPIdetail = await prisma.uPIdetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UPIdetailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UPIdetailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UPIdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UPIdetails
     * const uPIdetails = await prisma.uPIdetail.findMany()
     *
     * // Get first 10 UPIdetails
     * const uPIdetails = await prisma.uPIdetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const uPIdetailWithIdOnly = await prisma.uPIdetail.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UPIdetailFindManyArgs>(args?: Prisma.SelectSubset<T, UPIdetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UPIdetail.
     * @param {UPIdetailCreateArgs} args - Arguments to create a UPIdetail.
     * @example
     * // Create one UPIdetail
     * const UPIdetail = await prisma.uPIdetail.create({
     *   data: {
     *     // ... data to create a UPIdetail
     *   }
     * })
     *
     */
    create<T extends UPIdetailCreateArgs>(args: Prisma.SelectSubset<T, UPIdetailCreateArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UPIdetails.
     * @param {UPIdetailCreateManyArgs} args - Arguments to create many UPIdetails.
     * @example
     * // Create many UPIdetails
     * const uPIdetail = await prisma.uPIdetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UPIdetailCreateManyArgs>(args?: Prisma.SelectSubset<T, UPIdetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UPIdetails and returns the data saved in the database.
     * @param {UPIdetailCreateManyAndReturnArgs} args - Arguments to create many UPIdetails.
     * @example
     * // Create many UPIdetails
     * const uPIdetail = await prisma.uPIdetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UPIdetails and only return the `id`
     * const uPIdetailWithIdOnly = await prisma.uPIdetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UPIdetailCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UPIdetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UPIdetail.
     * @param {UPIdetailDeleteArgs} args - Arguments to delete one UPIdetail.
     * @example
     * // Delete one UPIdetail
     * const UPIdetail = await prisma.uPIdetail.delete({
     *   where: {
     *     // ... filter to delete one UPIdetail
     *   }
     * })
     *
     */
    delete<T extends UPIdetailDeleteArgs>(args: Prisma.SelectSubset<T, UPIdetailDeleteArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UPIdetail.
     * @param {UPIdetailUpdateArgs} args - Arguments to update one UPIdetail.
     * @example
     * // Update one UPIdetail
     * const uPIdetail = await prisma.uPIdetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UPIdetailUpdateArgs>(args: Prisma.SelectSubset<T, UPIdetailUpdateArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UPIdetails.
     * @param {UPIdetailDeleteManyArgs} args - Arguments to filter UPIdetails to delete.
     * @example
     * // Delete a few UPIdetails
     * const { count } = await prisma.uPIdetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UPIdetailDeleteManyArgs>(args?: Prisma.SelectSubset<T, UPIdetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UPIdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UPIdetails
     * const uPIdetail = await prisma.uPIdetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UPIdetailUpdateManyArgs>(args: Prisma.SelectSubset<T, UPIdetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UPIdetails and returns the data updated in the database.
     * @param {UPIdetailUpdateManyAndReturnArgs} args - Arguments to update many UPIdetails.
     * @example
     * // Update many UPIdetails
     * const uPIdetail = await prisma.uPIdetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UPIdetails and only return the `id`
     * const uPIdetailWithIdOnly = await prisma.uPIdetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends UPIdetailUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UPIdetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UPIdetail.
     * @param {UPIdetailUpsertArgs} args - Arguments to update or create a UPIdetail.
     * @example
     * // Update or create a UPIdetail
     * const uPIdetail = await prisma.uPIdetail.upsert({
     *   create: {
     *     // ... data to create a UPIdetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UPIdetail we want to update
     *   }
     * })
     */
    upsert<T extends UPIdetailUpsertArgs>(args: Prisma.SelectSubset<T, UPIdetailUpsertArgs<ExtArgs>>): Prisma.Prisma__UPIdetailClient<runtime.Types.Result.GetResult<Prisma.$UPIdetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UPIdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailCountArgs} args - Arguments to filter UPIdetails to count.
     * @example
     * // Count the number of UPIdetails
     * const count = await prisma.uPIdetail.count({
     *   where: {
     *     // ... the filter for the UPIdetails we want to count
     *   }
     * })
    **/
    count<T extends UPIdetailCountArgs>(args?: Prisma.Subset<T, UPIdetailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UPIdetailCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UPIdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UPIdetailAggregateArgs>(args: Prisma.Subset<T, UPIdetailAggregateArgs>): Prisma.PrismaPromise<GetUPIdetailAggregateType<T>>;
    /**
     * Group by UPIdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UPIdetailGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UPIdetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UPIdetailGroupByArgs['orderBy'];
    } : {
        orderBy?: UPIdetailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UPIdetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUPIdetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UPIdetail model
     */
    readonly fields: UPIdetailFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UPIdetail.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UPIdetailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Bill<T extends Prisma.UPIdetail$BillArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UPIdetail$BillArgs<ExtArgs>>): Prisma.Prisma__BillDetailsClient<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the UPIdetail model
 */
export interface UPIdetailFieldRefs {
    readonly id: Prisma.FieldRef<"UPIdetail", 'String'>;
    readonly upiId: Prisma.FieldRef<"UPIdetail", 'String'>;
    readonly application: Prisma.FieldRef<"UPIdetail", 'String'>;
    readonly billId: Prisma.FieldRef<"UPIdetail", 'String'>;
}
/**
 * UPIdetail findUnique
 */
export type UPIdetailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UPIdetail to fetch.
     */
    where: Prisma.UPIdetailWhereUniqueInput;
};
/**
 * UPIdetail findUniqueOrThrow
 */
export type UPIdetailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UPIdetail to fetch.
     */
    where: Prisma.UPIdetailWhereUniqueInput;
};
/**
 * UPIdetail findFirst
 */
export type UPIdetailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UPIdetail to fetch.
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UPIdetails to fetch.
     */
    orderBy?: Prisma.UPIdetailOrderByWithRelationInput | Prisma.UPIdetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UPIdetails.
     */
    cursor?: Prisma.UPIdetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UPIdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UPIdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UPIdetails.
     */
    distinct?: Prisma.UPIdetailScalarFieldEnum | Prisma.UPIdetailScalarFieldEnum[];
};
/**
 * UPIdetail findFirstOrThrow
 */
export type UPIdetailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UPIdetail to fetch.
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UPIdetails to fetch.
     */
    orderBy?: Prisma.UPIdetailOrderByWithRelationInput | Prisma.UPIdetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UPIdetails.
     */
    cursor?: Prisma.UPIdetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UPIdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UPIdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UPIdetails.
     */
    distinct?: Prisma.UPIdetailScalarFieldEnum | Prisma.UPIdetailScalarFieldEnum[];
};
/**
 * UPIdetail findMany
 */
export type UPIdetailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UPIdetails to fetch.
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UPIdetails to fetch.
     */
    orderBy?: Prisma.UPIdetailOrderByWithRelationInput | Prisma.UPIdetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UPIdetails.
     */
    cursor?: Prisma.UPIdetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UPIdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UPIdetails.
     */
    skip?: number;
    distinct?: Prisma.UPIdetailScalarFieldEnum | Prisma.UPIdetailScalarFieldEnum[];
};
/**
 * UPIdetail create
 */
export type UPIdetailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UPIdetail.
     */
    data: Prisma.XOR<Prisma.UPIdetailCreateInput, Prisma.UPIdetailUncheckedCreateInput>;
};
/**
 * UPIdetail createMany
 */
export type UPIdetailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UPIdetails.
     */
    data: Prisma.UPIdetailCreateManyInput | Prisma.UPIdetailCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UPIdetail createManyAndReturn
 */
export type UPIdetailCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UPIdetail
     */
    select?: Prisma.UPIdetailSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UPIdetail
     */
    omit?: Prisma.UPIdetailOmit<ExtArgs> | null;
    /**
     * The data used to create many UPIdetails.
     */
    data: Prisma.UPIdetailCreateManyInput | Prisma.UPIdetailCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UPIdetailIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UPIdetail update
 */
export type UPIdetailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UPIdetail.
     */
    data: Prisma.XOR<Prisma.UPIdetailUpdateInput, Prisma.UPIdetailUncheckedUpdateInput>;
    /**
     * Choose, which UPIdetail to update.
     */
    where: Prisma.UPIdetailWhereUniqueInput;
};
/**
 * UPIdetail updateMany
 */
export type UPIdetailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UPIdetails.
     */
    data: Prisma.XOR<Prisma.UPIdetailUpdateManyMutationInput, Prisma.UPIdetailUncheckedUpdateManyInput>;
    /**
     * Filter which UPIdetails to update
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * Limit how many UPIdetails to update.
     */
    limit?: number;
};
/**
 * UPIdetail updateManyAndReturn
 */
export type UPIdetailUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UPIdetail
     */
    select?: Prisma.UPIdetailSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UPIdetail
     */
    omit?: Prisma.UPIdetailOmit<ExtArgs> | null;
    /**
     * The data used to update UPIdetails.
     */
    data: Prisma.XOR<Prisma.UPIdetailUpdateManyMutationInput, Prisma.UPIdetailUncheckedUpdateManyInput>;
    /**
     * Filter which UPIdetails to update
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * Limit how many UPIdetails to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UPIdetailIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UPIdetail upsert
 */
export type UPIdetailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UPIdetail to update in case it exists.
     */
    where: Prisma.UPIdetailWhereUniqueInput;
    /**
     * In case the UPIdetail found by the `where` argument doesn't exist, create a new UPIdetail with this data.
     */
    create: Prisma.XOR<Prisma.UPIdetailCreateInput, Prisma.UPIdetailUncheckedCreateInput>;
    /**
     * In case the UPIdetail was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UPIdetailUpdateInput, Prisma.UPIdetailUncheckedUpdateInput>;
};
/**
 * UPIdetail delete
 */
export type UPIdetailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UPIdetail to delete.
     */
    where: Prisma.UPIdetailWhereUniqueInput;
};
/**
 * UPIdetail deleteMany
 */
export type UPIdetailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UPIdetails to delete
     */
    where?: Prisma.UPIdetailWhereInput;
    /**
     * Limit how many UPIdetails to delete.
     */
    limit?: number;
};
/**
 * UPIdetail.Bill
 */
export type UPIdetail$BillArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * UPIdetail without action
 */
export type UPIdetailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=UPIdetail.d.ts.map