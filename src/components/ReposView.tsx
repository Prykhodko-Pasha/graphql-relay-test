import { VFC, ReactNode } from 'react';
import { QueryRenderer } from 'react-relay';
import { reposQuery } from '../graphqlQuery';
import RelayEnvironment from '../RelayEnvironment';
import { ReposList } from './ReposList';
import { LoadingSkeleton } from './LoadingSkeleton';
import type { graphqlQuery$data } from '../__generated__/graphqlQuery.graphql';

export const ReposView: VFC<Prop> = ({ login }) => {
    return (
        <QueryRenderer
            environment={RelayEnvironment}
            query={reposQuery}
            variables={{ login }}
            render={({ error, props }: Props): ReactNode => {
                if (error) {
                    return <div>{error.message}</div>;
                }
                return (
                    <>
                        {login && !props && <LoadingSkeleton />}
                        {login && props && (
                            <ReposList data={props as graphqlQuery$data} />
                        )}
                    </>
                );
            }}
        />
    );
};

type Prop = {
    login: string;
};
type Props = {
    error: Error | null;
    props: graphqlQuery$data | unknown;
};
