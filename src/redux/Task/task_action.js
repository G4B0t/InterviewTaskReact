import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DATA_REQUESTED = "DATA_REQUESTED";
export const DATA_RECEIVED = "DATA_RECEIVED";

// Define the API slice using a constant for clarity
const contactsApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => "/tasks",
    }),
    contact: builder.query({
      query: (id) => `/tasks/${id}`,
    }),
  }),
});

// Export the hooks for easy access
export const { useContactsQuery, useContactQuery } = contactsApi;
