import { graphql } from 'babel-plugin-relay/macro';

export const reposQuery = graphql`
    query ReposViewRepositoriesListQuery($login: String!) {
        user(login: $login) {
            name
            repositories(
                last: 100
                orderBy: { field: UPDATED_AT, direction: DESC }
            ) {
                totalCount
                nodes {
                    name
                    forkCount
                    issues(last: 4, states: OPEN) {
                        totalCount
                        nodes {
                            state
                            labels(last: 1) {
                                totalCount
                                nodes {
                                    color
                                    name
                                }
                            }
                        }
                    }
                    deployments(last: 1) {
                        totalCount
                        nodes {
                            latestStatus {
                                state
                                updatedAt
                            }
                        }
                    }
                    pullRequests(last: 4, states: OPEN) {
                        totalCount
                        nodes {
                            author {
                                avatarUrl
                            }
                            mergeable
                            isDraft
                            isReadByViewer
                        }
                    }
                    object(expression: "main") {
                        ... on Commit {
                            history {
                                totalCount
                            }
                        }
                    }
                    packageJSON: object(expression: "master:package.json") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }
    }
`;
