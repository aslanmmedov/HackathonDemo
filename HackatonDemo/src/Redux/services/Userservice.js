import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Access Token-i header-ə əlavə etmək üçün baseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://nihadrs-001-site1.jtempurl.com/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Refresh token logic
const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      console.warn('Refresh token tapılmadı.');
      return result;
    }

    const refreshResult = await baseQuery({
      url: '/Auth/RefreshTokenLogin',
      method: 'POST',
      body: { refreshToken }
    }, api, extraOptions);

    if (refreshResult.data) {
      localStorage.setItem('accessToken', refreshResult.data.accessToken);
      localStorage.setItem('refreshToken', refreshResult.data.refreshToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.warn(`Refresh token uğursuz oldu: ${refreshResult.error}`);
    }
  }

  return result;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/Auth/Login',
        method: 'POST',
        body: credentials,
      }),
    }),

    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/Users',
        method: 'POST',
        body: newUser,
      }),
    }),

    confirmEmail: builder.mutation({
      query: ({ userId, token }) => ({
        url: `/Auth/confirm-email`,
        method: 'POST',
        body: { userId, token },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAddUserMutation,
  useConfirmEmailMutation,
} = userApi;
