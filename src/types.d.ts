import { MergeableState } from './__generated__/graphqlQuery.graphql';

export type PullRequestIcon = {
    avatar: string;
    status: JSX.Element;
};

export type PullRequestNode = {
    mergeable: MergeableState;
    isDraft: boolean;
    author: {
        avatarUrl: string | null;
    };
};

export type Issues = {
    totalCount: number;
    nodes: IssueNode[];
};

export type IssueNode = {
    labels: {
        nodes: Array<{
            color: string;
        }> | null;
    };
};
