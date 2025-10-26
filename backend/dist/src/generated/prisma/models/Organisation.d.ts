import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Organisation
 *
 */
export type OrganisationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganisationPayload>;
export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null;
    _min: OrganisationMinAggregateOutputType | null;
    _max: OrganisationMaxAggregateOutputType | null;
};
export type OrganisationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    ownerId: string | null;
};
export type OrganisationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    ownerId: string | null;
};
export type OrganisationCountAggregateOutputType = {
    id: number;
    name: number;
    ownerId: number;
    _all: number;
};
export type OrganisationMinAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
};
export type OrganisationMaxAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
};
export type OrganisationCountAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
    _all?: true;
};
export type OrganisationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrganisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType;
};
export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganisation[P]> : Prisma.GetScalarType<T[P], AggregateOrganisation[P]>;
};
export type OrganisationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithAggregationInput | Prisma.OrganisationOrderByWithAggregationInput[];
    by: Prisma.OrganisationScalarFieldEnum[] | Prisma.OrganisationScalarFieldEnum;
    having?: Prisma.OrganisationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganisationCountAggregateInputType | true;
    _min?: OrganisationMinAggregateInputType;
    _max?: OrganisationMaxAggregateInputType;
};
export type OrganisationGroupByOutputType = {
    id: string;
    name: string;
    ownerId: string;
    _count: OrganisationCountAggregateOutputType | null;
    _min: OrganisationMinAggregateOutputType | null;
    _max: OrganisationMaxAggregateOutputType | null;
};
type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganisationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganisationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganisationGroupByOutputType[P]>;
}>>;
export type OrganisationWhereInput = {
    AND?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    OR?: Prisma.OrganisationWhereInput[];
    NOT?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    id?: Prisma.StringFilter<"Organisation"> | string;
    name?: Prisma.StringFilter<"Organisation"> | string;
    ownerId?: Prisma.StringFilter<"Organisation"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bills?: Prisma.BillDetailsListRelationFilter;
};
export type OrganisationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    bills?: Prisma.BillDetailsOrderByRelationAggregateInput;
};
export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    OR?: Prisma.OrganisationWhereInput[];
    NOT?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    ownerId?: Prisma.StringFilter<"Organisation"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bills?: Prisma.BillDetailsListRelationFilter;
}, "id" | "id" | "name">;
export type OrganisationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.OrganisationCountOrderByAggregateInput;
    _max?: Prisma.OrganisationMaxOrderByAggregateInput;
    _min?: Prisma.OrganisationMinOrderByAggregateInput;
};
export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganisationScalarWhereWithAggregatesInput | Prisma.OrganisationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganisationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganisationScalarWhereWithAggregatesInput | Prisma.OrganisationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
};
export type OrganisationCreateInput = {
    id?: string;
    name: string;
    owner: Prisma.UserCreateNestedOneWithoutOrganisationInput;
    bills?: Prisma.BillDetailsCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateInput = {
    id?: string;
    name: string;
    ownerId: string;
    bills?: Prisma.BillDetailsUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOrganisationNestedInput;
    bills?: Prisma.BillDetailsUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    bills?: Prisma.BillDetailsUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateManyInput = {
    id?: string;
    name: string;
    ownerId: string;
};
export type OrganisationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrganisationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrganisationListRelationFilter = {
    every?: Prisma.OrganisationWhereInput;
    some?: Prisma.OrganisationWhereInput;
    none?: Prisma.OrganisationWhereInput;
};
export type OrganisationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrganisationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type OrganisationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type OrganisationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type OrganisationScalarRelationFilter = {
    is?: Prisma.OrganisationWhereInput;
    isNot?: Prisma.OrganisationWhereInput;
};
export type OrganisationCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput> | Prisma.OrganisationCreateWithoutOwnerInput[] | Prisma.OrganisationUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutOwnerInput | Prisma.OrganisationCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.OrganisationCreateManyOwnerInputEnvelope;
    connect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
};
export type OrganisationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput> | Prisma.OrganisationCreateWithoutOwnerInput[] | Prisma.OrganisationUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutOwnerInput | Prisma.OrganisationCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.OrganisationCreateManyOwnerInputEnvelope;
    connect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
};
export type OrganisationUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput> | Prisma.OrganisationCreateWithoutOwnerInput[] | Prisma.OrganisationUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutOwnerInput | Prisma.OrganisationCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.OrganisationUpsertWithWhereUniqueWithoutOwnerInput | Prisma.OrganisationUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.OrganisationCreateManyOwnerInputEnvelope;
    set?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    disconnect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    delete?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    connect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    update?: Prisma.OrganisationUpdateWithWhereUniqueWithoutOwnerInput | Prisma.OrganisationUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.OrganisationUpdateManyWithWhereWithoutOwnerInput | Prisma.OrganisationUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.OrganisationScalarWhereInput | Prisma.OrganisationScalarWhereInput[];
};
export type OrganisationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput> | Prisma.OrganisationCreateWithoutOwnerInput[] | Prisma.OrganisationUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutOwnerInput | Prisma.OrganisationCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.OrganisationUpsertWithWhereUniqueWithoutOwnerInput | Prisma.OrganisationUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.OrganisationCreateManyOwnerInputEnvelope;
    set?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    disconnect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    delete?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    connect?: Prisma.OrganisationWhereUniqueInput | Prisma.OrganisationWhereUniqueInput[];
    update?: Prisma.OrganisationUpdateWithWhereUniqueWithoutOwnerInput | Prisma.OrganisationUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.OrganisationUpdateManyWithWhereWithoutOwnerInput | Prisma.OrganisationUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.OrganisationScalarWhereInput | Prisma.OrganisationScalarWhereInput[];
};
export type OrganisationCreateNestedOneWithoutBillsInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutBillsInput, Prisma.OrganisationUncheckedCreateWithoutBillsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutBillsInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutBillsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutBillsInput, Prisma.OrganisationUncheckedCreateWithoutBillsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutBillsInput;
    upsert?: Prisma.OrganisationUpsertWithoutBillsInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutBillsInput, Prisma.OrganisationUpdateWithoutBillsInput>, Prisma.OrganisationUncheckedUpdateWithoutBillsInput>;
};
export type OrganisationCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    bills?: Prisma.BillDetailsCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    bills?: Prisma.BillDetailsUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutOwnerInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput>;
};
export type OrganisationCreateManyOwnerInputEnvelope = {
    data: Prisma.OrganisationCreateManyOwnerInput | Prisma.OrganisationCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type OrganisationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutOwnerInput, Prisma.OrganisationUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutOwnerInput, Prisma.OrganisationUncheckedCreateWithoutOwnerInput>;
};
export type OrganisationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutOwnerInput, Prisma.OrganisationUncheckedUpdateWithoutOwnerInput>;
};
export type OrganisationUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.OrganisationScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateManyMutationInput, Prisma.OrganisationUncheckedUpdateManyWithoutOwnerInput>;
};
export type OrganisationScalarWhereInput = {
    AND?: Prisma.OrganisationScalarWhereInput | Prisma.OrganisationScalarWhereInput[];
    OR?: Prisma.OrganisationScalarWhereInput[];
    NOT?: Prisma.OrganisationScalarWhereInput | Prisma.OrganisationScalarWhereInput[];
    id?: Prisma.StringFilter<"Organisation"> | string;
    name?: Prisma.StringFilter<"Organisation"> | string;
    ownerId?: Prisma.StringFilter<"Organisation"> | string;
};
export type OrganisationCreateWithoutBillsInput = {
    id?: string;
    name: string;
    owner: Prisma.UserCreateNestedOneWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutBillsInput = {
    id?: string;
    name: string;
    ownerId: string;
};
export type OrganisationCreateOrConnectWithoutBillsInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutBillsInput, Prisma.OrganisationUncheckedCreateWithoutBillsInput>;
};
export type OrganisationUpsertWithoutBillsInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutBillsInput, Prisma.OrganisationUncheckedUpdateWithoutBillsInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutBillsInput, Prisma.OrganisationUncheckedCreateWithoutBillsInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutBillsInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutBillsInput, Prisma.OrganisationUncheckedUpdateWithoutBillsInput>;
};
export type OrganisationUpdateWithoutBillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutBillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrganisationCreateManyOwnerInput = {
    id?: string;
    name: string;
};
export type OrganisationUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bills?: Prisma.BillDetailsUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bills?: Prisma.BillDetailsUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type OrganisationCountOutputType
 */
export type OrganisationCountOutputType = {
    bills: number;
};
export type OrganisationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bills?: boolean | OrganisationCountOutputTypeCountBillsArgs;
};
/**
 * OrganisationCountOutputType without action
 */
export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationCountOutputType
     */
    select?: Prisma.OrganisationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * OrganisationCountOutputType without action
 */
export type OrganisationCountOutputTypeCountBillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillDetailsWhereInput;
};
export type OrganisationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bills?: boolean | Prisma.Organisation$billsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganisationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organisation"]>;
export type OrganisationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organisation"]>;
export type OrganisationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organisation"]>;
export type OrganisationSelectScalar = {
    id?: boolean;
    name?: boolean;
    ownerId?: boolean;
};
export type OrganisationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "ownerId", ExtArgs["result"]["organisation"]>;
export type OrganisationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bills?: boolean | Prisma.Organisation$billsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganisationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganisationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrganisationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrganisationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organisation";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        bills: Prisma.$BillDetailsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        ownerId: string;
    }, ExtArgs["result"]["organisation"]>;
    composites: {};
};
export type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganisationPayload, S>;
export type OrganisationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganisationCountAggregateInputType | true;
};
export interface OrganisationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organisation'];
        meta: {
            name: 'Organisation';
        };
    };
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     *
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organisationWithIdOnly = await prisma.organisation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganisationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     *
     */
    create<T extends OrganisationCreateArgs>(args: Prisma.SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Organisations.
     * @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganisationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {OrganisationCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganisationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     *
     */
    delete<T extends OrganisationDeleteArgs>(args: Prisma.SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganisationUpdateArgs>(args: Prisma.SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganisationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Organisations and returns the data updated in the database.
     * @param {OrganisationUpdateManyAndReturnArgs} args - Arguments to update many Organisations.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganisationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUpsertArgs>(args: Prisma.SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(args?: Prisma.Subset<T, OrganisationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganisationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationAggregateArgs>(args: Prisma.Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>;
    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OrganisationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganisationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganisationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organisation model
     */
    readonly fields: OrganisationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Organisation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bills<T extends Prisma.Organisation$billsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$billsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Organisation model
 */
export interface OrganisationFieldRefs {
    readonly id: Prisma.FieldRef<"Organisation", 'String'>;
    readonly name: Prisma.FieldRef<"Organisation", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Organisation", 'String'>;
}
/**
 * Organisation findUnique
 */
export type OrganisationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter, which Organisation to fetch.
     */
    where: Prisma.OrganisationWhereUniqueInput;
};
/**
 * Organisation findUniqueOrThrow
 */
export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter, which Organisation to fetch.
     */
    where: Prisma.OrganisationWhereUniqueInput;
};
/**
 * Organisation findFirst
 */
export type OrganisationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter, which Organisation to fetch.
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organisations.
     */
    cursor?: Prisma.OrganisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organisations.
     */
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
/**
 * Organisation findFirstOrThrow
 */
export type OrganisationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter, which Organisation to fetch.
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organisations.
     */
    cursor?: Prisma.OrganisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organisations.
     */
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
/**
 * Organisation findMany
 */
export type OrganisationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter, which Organisations to fetch.
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organisations to fetch.
     */
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organisations.
     */
    cursor?: Prisma.OrganisationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organisations.
     */
    skip?: number;
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
/**
 * Organisation create
 */
export type OrganisationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organisation.
     */
    data: Prisma.XOR<Prisma.OrganisationCreateInput, Prisma.OrganisationUncheckedCreateInput>;
};
/**
 * Organisation createMany
 */
export type OrganisationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: Prisma.OrganisationCreateManyInput | Prisma.OrganisationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Organisation createManyAndReturn
 */
export type OrganisationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * The data used to create many Organisations.
     */
    data: Prisma.OrganisationCreateManyInput | Prisma.OrganisationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Organisation update
 */
export type OrganisationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organisation.
     */
    data: Prisma.XOR<Prisma.OrganisationUpdateInput, Prisma.OrganisationUncheckedUpdateInput>;
    /**
     * Choose, which Organisation to update.
     */
    where: Prisma.OrganisationWhereUniqueInput;
};
/**
 * Organisation updateMany
 */
export type OrganisationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: Prisma.XOR<Prisma.OrganisationUpdateManyMutationInput, Prisma.OrganisationUncheckedUpdateManyInput>;
    /**
     * Filter which Organisations to update
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * Limit how many Organisations to update.
     */
    limit?: number;
};
/**
 * Organisation updateManyAndReturn
 */
export type OrganisationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * The data used to update Organisations.
     */
    data: Prisma.XOR<Prisma.OrganisationUpdateManyMutationInput, Prisma.OrganisationUncheckedUpdateManyInput>;
    /**
     * Filter which Organisations to update
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * Limit how many Organisations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Organisation upsert
 */
export type OrganisationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: Prisma.OrganisationWhereUniqueInput;
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: Prisma.XOR<Prisma.OrganisationCreateInput, Prisma.OrganisationUncheckedCreateInput>;
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrganisationUpdateInput, Prisma.OrganisationUncheckedUpdateInput>;
};
/**
 * Organisation delete
 */
export type OrganisationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    /**
     * Filter which Organisation to delete.
     */
    where: Prisma.OrganisationWhereUniqueInput;
};
/**
 * Organisation deleteMany
 */
export type OrganisationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: Prisma.OrganisationWhereInput;
    /**
     * Limit how many Organisations to delete.
     */
    limit?: number;
};
/**
 * Organisation.bills
 */
export type Organisation$billsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.BillDetailsOrderByWithRelationInput | Prisma.BillDetailsOrderByWithRelationInput[];
    cursor?: Prisma.BillDetailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BillDetailsScalarFieldEnum | Prisma.BillDetailsScalarFieldEnum[];
};
/**
 * Organisation without action
 */
export type OrganisationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organisation
     */
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Organisation.d.ts.map