import { apiSlice } from "../../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (days = "all") => ({
        url: "/orders",
        params: { days },
      }),
      providesTags: ["Orders"],
    }),

    updatePaymentStatus: builder.mutation({
      query: ({ id, paymentStatus }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: {
          paymentStatus,
        },
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetAllOrdersQuery, useUpdatePaymentStatusMutation } =
  orderApi;
