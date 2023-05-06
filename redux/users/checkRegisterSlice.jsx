import { supabase } from '@/utils/supabaseClient';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';



export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fakeBaseQuery(),
  extractRehydrationInfo(action, {reducerPath}){
    if(action.type === REHYDRATE){
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getSessionUser: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if( data) {
          return  { data }
        }       
      },
    }),
  }),
});

export const { useGetSessionUserQuery } = supabaseApi;
