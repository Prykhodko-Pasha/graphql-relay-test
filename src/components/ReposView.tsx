import { VFC, ReactNode } from 'react';
import { QueryRenderer } from 'react-relay';
import { reposQuery } from '../graphqlQuery';
import RelayEnvironment from '../RelayEnvironment';
import { ReposList } from './ReposList';
import { LoadingSkeleton } from './LoadingSkeleton';
import type { ReposViewRepositoriesListQuery$data } from '../__generated__/ReposViewRepositoriesListQuery.graphql';

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
                            <ReposList
                                data={
                                    (
                                        props as ReposViewRepositoriesListQuery$data
                                    )?.user?.repositories.nodes
                                }
                            />
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
    props: ReposViewRepositoriesListQuery$data | unknown;
};
