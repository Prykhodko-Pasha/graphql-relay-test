import { createContext } from 'react';
import type { graphqlQuery$data } from '../__generated__/graphqlQuery.graphql';

export const QueryResContext = createContext<graphqlQuery$data | undefined>(
    undefined,
);
