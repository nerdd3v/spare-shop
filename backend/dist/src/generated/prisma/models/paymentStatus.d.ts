import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model paymentStatus
 *
 */
export type paymentStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentStatusPayload>;
export type AggregatePaymentStatus = {
    _count: PaymentStatusCountAggregateOutputType | null;
    _min: PaymentStatusMinAggregateOutputType | null;
    _max: PaymentStatusMaxAggregateOutputType | null;
};
export type PaymentStatusMinAggregateOutputType = {
    id: string | null;
};
export type PaymentStatusMaxAggregateOutputType = {
    id: string | null;
};
export type PaymentStatusCountAggregateOutputType = {
    id: number;
    _all: number;
};
export type PaymentStatusMinAggregateInputType = {
    id?: true;
};
export type PaymentStatusMaxAggregateInputType = {
    id?: true;
};
export type PaymentStatusCountAggregateInputType = {
    id?: true;
    _all?: true;
};
export type PaymentStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which paymentStatus to aggregate.
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of paymentStatuses to fetch.
     */
    orderBy?: Prisma.paymentStatusOrderByWithRelationInput | Prisma.paymentStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.paymentStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` paymentStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` paymentStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned paymentStatuses
    **/
    _count?: true | PaymentStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PaymentStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PaymentStatusMaxAggregateInputType;
};
export type GetPaymentStatusAggregateType<T extends PaymentStatusAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentStatus[P]> : Prisma.GetScalarType<T[P], AggregatePaymentStatus[P]>;
};
export type paymentStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentStatusWhereInput;
    orderBy?: Prisma.paymentStatusOrderByWithAggregationInput | Prisma.paymentStatusOrderByWithAggregationInput[];
    by: Prisma.PaymentStatusScalarFieldEnum[] | Prisma.PaymentStatusScalarFieldEnum;
    having?: Prisma.paymentStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentStatusCountAggregateInputType | true;
    _min?: PaymentStatusMinAggregateInputType;
    _max?: PaymentStatusMaxAggregateInputType;
};
export type PaymentStatusGroupByOutputType = {
    id: string;
    _count: PaymentStatusCountAggregateOutputType | null;
    _min: PaymentStatusMinAggregateOutputType | null;
    _max: PaymentStatusMaxAggregateOutputType | null;
};
type GetPaymentStatusGroupByPayload<T extends paymentStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentStatusGroupByOutputType[P]>;
}>>;
export type paymentStatusWhereInput = {
    AND?: Prisma.paymentStatusWhereInput | Prisma.paymentStatusWhereInput[];
    OR?: Prisma.paymentStatusWhereInput[];
    NOT?: Prisma.paymentStatusWhereInput | Prisma.paymentStatusWhereInput[];
    id?: Prisma.StringFilter<"paymentStatus"> | string;
};
export type paymentStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
};
export type paymentStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.paymentStatusWhereInput | Prisma.paymentStatusWhereInput[];
    OR?: Prisma.paymentStatusWhereInput[];
    NOT?: Prisma.paymentStatusWhereInput | Prisma.paymentStatusWhereInput[];
}, "id" | "id">;
export type paymentStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    _count?: Prisma.paymentStatusCountOrderByAggregateInput;
    _max?: Prisma.paymentStatusMaxOrderByAggregateInput;
    _min?: Prisma.paymentStatusMinOrderByAggregateInput;
};
export type paymentStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentStatusScalarWhereWithAggregatesInput | Prisma.paymentStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentStatusScalarWhereWithAggregatesInput | Prisma.paymentStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"paymentStatus"> | string;
};
export type paymentStatusCreateInput = {
    id?: string;
};
export type paymentStatusUncheckedCreateInput = {
    id?: string;
};
export type paymentStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type paymentStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type paymentStatusCreateManyInput = {
    id?: string;
};
export type paymentStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type paymentStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type paymentStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type paymentStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type paymentStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type paymentStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["paymentStatus"]>;
export type paymentStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["paymentStatus"]>;
export type paymentStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["paymentStatus"]>;
export type paymentStatusSelectScalar = {
    id?: boolean;
};
export type paymentStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id", ExtArgs["result"]["paymentStatus"]>;
export type $paymentStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "paymentStatus";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
    }, ExtArgs["result"]["paymentStatus"]>;
    composites: {};
};
export type paymentStatusGetPayload<S extends boolean | null | undefined | paymentStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload, S>;
export type paymentStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentStatusCountAggregateInputType | true;
};
export interface paymentStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['paymentStatus'];
        meta: {
            name: 'paymentStatus';
        };
    };
    /**
     * Find zero or one PaymentStatus that matches the filter.
     * @param {paymentStatusFindUniqueArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PaymentStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentStatusFindUniqueOrThrowArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PaymentStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusFindFirstArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PaymentStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusFindFirstOrThrowArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PaymentStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentStatuses
     * const paymentStatuses = await prisma.paymentStatus.findMany()
     *
     * // Get first 10 PaymentStatuses
     * const paymentStatuses = await prisma.paymentStatus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends paymentStatusFindManyArgs>(args?: Prisma.SelectSubset<T, paymentStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PaymentStatus.
     * @param {paymentStatusCreateArgs} args - Arguments to create a PaymentStatus.
     * @example
     * // Create one PaymentStatus
     * const PaymentStatus = await prisma.paymentStatus.create({
     *   data: {
     *     // ... data to create a PaymentStatus
     *   }
     * })
     *
     */
    create<T extends paymentStatusCreateArgs>(args: Prisma.SelectSubset<T, paymentStatusCreateArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PaymentStatuses.
     * @param {paymentStatusCreateManyArgs} args - Arguments to create many PaymentStatuses.
     * @example
     * // Create many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends paymentStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PaymentStatuses and returns the data saved in the database.
     * @param {paymentStatusCreateManyAndReturnArgs} args - Arguments to create many PaymentStatuses.
     * @example
     * // Create many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PaymentStatuses and only return the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends paymentStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PaymentStatus.
     * @param {paymentStatusDeleteArgs} args - Arguments to delete one PaymentStatus.
     * @example
     * // Delete one PaymentStatus
     * const PaymentStatus = await prisma.paymentStatus.delete({
     *   where: {
     *     // ... filter to delete one PaymentStatus
     *   }
     * })
     *
     */
    delete<T extends paymentStatusDeleteArgs>(args: Prisma.SelectSubset<T, paymentStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PaymentStatus.
     * @param {paymentStatusUpdateArgs} args - Arguments to update one PaymentStatus.
     * @example
     * // Update one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends paymentStatusUpdateArgs>(args: Prisma.SelectSubset<T, paymentStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PaymentStatuses.
     * @param {paymentStatusDeleteManyArgs} args - Arguments to filter PaymentStatuses to delete.
     * @example
     * // Delete a few PaymentStatuses
     * const { count } = await prisma.paymentStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends paymentStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PaymentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends paymentStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PaymentStatuses and returns the data updated in the database.
     * @param {paymentStatusUpdateManyAndReturnArgs} args - Arguments to update many PaymentStatuses.
     * @example
     * // Update many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PaymentStatuses and only return the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PaymentStatus.
     * @param {paymentStatusUpsertArgs} args - Arguments to update or create a PaymentStatus.
     * @example
     * // Update or create a PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.upsert({
     *   create: {
     *     // ... data to create a PaymentStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentStatus we want to update
     *   }
     * })
     */
    upsert<T extends paymentStatusUpsertArgs>(args: Prisma.SelectSubset<T, paymentStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentStatusClient<runtime.Types.Result.GetResult<Prisma.$paymentStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PaymentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusCountArgs} args - Arguments to filter PaymentStatuses to count.
     * @example
     * // Count the number of PaymentStatuses
     * const count = await prisma.paymentStatus.count({
     *   where: {
     *     // ... the filter for the PaymentStatuses we want to count
     *   }
     * })
    **/
    count<T extends paymentStatusCountArgs>(args?: Prisma.Subset<T, paymentStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PaymentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentStatusAggregateArgs>(args: Prisma.Subset<T, PaymentStatusAggregateArgs>): Prisma.PrismaPromise<GetPaymentStatusAggregateType<T>>;
    /**
     * Group by PaymentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends paymentStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the paymentStatus model
     */
    readonly fields: paymentStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for paymentStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__paymentStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the paymentStatus model
 */
export interface paymentStatusFieldRefs {
    readonly id: Prisma.FieldRef<"paymentStatus", 'String'>;
}
/**
 * paymentStatus findUnique
 */
export type paymentStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter, which paymentStatus to fetch.
     */
    where: Prisma.paymentStatusWhereUniqueInput;
};
/**
 * paymentStatus findUniqueOrThrow
 */
export type paymentStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter, which paymentStatus to fetch.
     */
    where: Prisma.paymentStatusWhereUniqueInput;
};
/**
 * paymentStatus findFirst
 */
export type paymentStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter, which paymentStatus to fetch.
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of paymentStatuses to fetch.
     */
    orderBy?: Prisma.paymentStatusOrderByWithRelationInput | Prisma.paymentStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for paymentStatuses.
     */
    cursor?: Prisma.paymentStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` paymentStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` paymentStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of paymentStatuses.
     */
    distinct?: Prisma.PaymentStatusScalarFieldEnum | Prisma.PaymentStatusScalarFieldEnum[];
};
/**
 * paymentStatus findFirstOrThrow
 */
export type paymentStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter, which paymentStatus to fetch.
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of paymentStatuses to fetch.
     */
    orderBy?: Prisma.paymentStatusOrderByWithRelationInput | Prisma.paymentStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for paymentStatuses.
     */
    cursor?: Prisma.paymentStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` paymentStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` paymentStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of paymentStatuses.
     */
    distinct?: Prisma.PaymentStatusScalarFieldEnum | Prisma.PaymentStatusScalarFieldEnum[];
};
/**
 * paymentStatus findMany
 */
export type paymentStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter, which paymentStatuses to fetch.
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of paymentStatuses to fetch.
     */
    orderBy?: Prisma.paymentStatusOrderByWithRelationInput | Prisma.paymentStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing paymentStatuses.
     */
    cursor?: Prisma.paymentStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` paymentStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` paymentStatuses.
     */
    skip?: number;
    distinct?: Prisma.PaymentStatusScalarFieldEnum | Prisma.PaymentStatusScalarFieldEnum[];
};
/**
 * paymentStatus create
 */
export type paymentStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * The data needed to create a paymentStatus.
     */
    data?: Prisma.XOR<Prisma.paymentStatusCreateInput, Prisma.paymentStatusUncheckedCreateInput>;
};
/**
 * paymentStatus createMany
 */
export type paymentStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentStatuses.
     */
    data: Prisma.paymentStatusCreateManyInput | Prisma.paymentStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * paymentStatus createManyAndReturn
 */
export type paymentStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many paymentStatuses.
     */
    data: Prisma.paymentStatusCreateManyInput | Prisma.paymentStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * paymentStatus update
 */
export type paymentStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * The data needed to update a paymentStatus.
     */
    data: Prisma.XOR<Prisma.paymentStatusUpdateInput, Prisma.paymentStatusUncheckedUpdateInput>;
    /**
     * Choose, which paymentStatus to update.
     */
    where: Prisma.paymentStatusWhereUniqueInput;
};
/**
 * paymentStatus updateMany
 */
export type paymentStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentStatuses.
     */
    data: Prisma.XOR<Prisma.paymentStatusUpdateManyMutationInput, Prisma.paymentStatusUncheckedUpdateManyInput>;
    /**
     * Filter which paymentStatuses to update
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * Limit how many paymentStatuses to update.
     */
    limit?: number;
};
/**
 * paymentStatus updateManyAndReturn
 */
export type paymentStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * The data used to update paymentStatuses.
     */
    data: Prisma.XOR<Prisma.paymentStatusUpdateManyMutationInput, Prisma.paymentStatusUncheckedUpdateManyInput>;
    /**
     * Filter which paymentStatuses to update
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * Limit how many paymentStatuses to update.
     */
    limit?: number;
};
/**
 * paymentStatus upsert
 */
export type paymentStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * The filter to search for the paymentStatus to update in case it exists.
     */
    where: Prisma.paymentStatusWhereUniqueInput;
    /**
     * In case the paymentStatus found by the `where` argument doesn't exist, create a new paymentStatus with this data.
     */
    create: Prisma.XOR<Prisma.paymentStatusCreateInput, Prisma.paymentStatusUncheckedCreateInput>;
    /**
     * In case the paymentStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.paymentStatusUpdateInput, Prisma.paymentStatusUncheckedUpdateInput>;
};
/**
 * paymentStatus delete
 */
export type paymentStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
    /**
     * Filter which paymentStatus to delete.
     */
    where: Prisma.paymentStatusWhereUniqueInput;
};
/**
 * paymentStatus deleteMany
 */
export type paymentStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which paymentStatuses to delete
     */
    where?: Prisma.paymentStatusWhereInput;
    /**
     * Limit how many paymentStatuses to delete.
     */
    limit?: number;
};
/**
 * paymentStatus without action
 */
export type paymentStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentStatus
     */
    select?: Prisma.paymentStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the paymentStatus
     */
    omit?: Prisma.paymentStatusOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=paymentStatus.d.ts.map