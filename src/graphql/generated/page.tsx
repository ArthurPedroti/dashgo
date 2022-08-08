import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/withApollo';
export async function getServerPageGetDepartments
    (options: Omit<Apollo.QueryOptions<Types.GetDepartmentsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetDepartmentsQuery>({ ...options, query: Operations.GetDepartmentsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetDepartments = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetDepartmentsQuery, Types.GetDepartmentsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetDepartmentsDocument, options);
};
export type PageGetDepartmentsComp = React.FC<{data?: Types.GetDepartmentsQuery, error?: Apollo.ApolloError}>;
export const withPageGetDepartments = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetDepartmentsQuery, Types.GetDepartmentsQueryVariables>) => (WrappedComponent:PageGetDepartmentsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetDepartmentsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetDepartments = {
      getServerPage: getServerPageGetDepartments,
      withPage: withPageGetDepartments,
      usePage: useGetDepartments,
    }