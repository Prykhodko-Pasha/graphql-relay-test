/**
 * @generated SignedSource<<c9f56a541c0c01a0c61e54dde02db05c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DeploymentStatusState = "ERROR" | "FAILURE" | "INACTIVE" | "IN_PROGRESS" | "PENDING" | "QUEUED" | "SUCCESS" | "WAITING" | "%future added value";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type MergeableState = "CONFLICTING" | "MERGEABLE" | "UNKNOWN" | "%future added value";
export type AppRepositoriesListQuery$variables = {
  login: string;
};
export type AppRepositoriesListQueryVariables = AppRepositoriesListQuery$variables;
export type AppRepositoriesListQuery$data = {
  readonly user: {
    readonly name: string | null;
    readonly repositories: {
      readonly totalCount: number;
      readonly nodes: ReadonlyArray<{
        readonly name: string;
        readonly forkCount: number;
        readonly issues: {
          readonly totalCount: number;
          readonly nodes: ReadonlyArray<{
            readonly state: IssueState;
            readonly labels: {
              readonly totalCount: number;
              readonly nodes: ReadonlyArray<{
                readonly color: string;
                readonly name: string;
              } | null> | null;
            } | null;
          } | null> | null;
        };
        readonly deployments: {
          readonly totalCount: number;
          readonly nodes: ReadonlyArray<{
            readonly latestStatus: {
              readonly state: DeploymentStatusState;
              readonly updatedAt: any;
            } | null;
          } | null> | null;
        };
        readonly pullRequests: {
          readonly totalCount: number;
          readonly nodes: ReadonlyArray<{
            readonly author: {
              readonly avatarUrl: any;
            } | null;
            readonly mergeable: MergeableState;
            readonly isDraft: boolean;
            readonly isReadByViewer: boolean | null;
          } | null> | null;
        };
        readonly object: {
          readonly history?: {
            readonly totalCount: number;
          };
        } | null;
        readonly packageJSON: {
          readonly text?: string | null;
        } | null;
      } | null> | null;
    };
  } | null;
};
export type AppRepositoriesListQueryResponse = AppRepositoriesListQuery$data;
export type AppRepositoriesListQuery = {
  variables: AppRepositoriesListQueryVariables;
  response: AppRepositoriesListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "UPDATED_AT"
    }
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 4
  },
  {
    "kind": "Literal",
    "name": "states",
    "value": "OPEN"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 1
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mergeable",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDraft",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isReadByViewer",
  "storageKey": null
},
v15 = [
  {
    "kind": "Literal",
    "name": "expression",
    "value": "main"
  }
],
v16 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommitHistoryConnection",
      "kind": "LinkedField",
      "name": "history",
      "plural": false,
      "selections": [
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "expression",
    "value": "master:package.json"
  }
],
v18 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Blob",
  "abstractKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": (v8/*: any*/),
                            "concreteType": "LabelConnection",
                            "kind": "LinkedField",
                            "name": "labels",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Label",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "labels(last:1)"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "DeploymentConnection",
                    "kind": "LinkedField",
                    "name": "deployments",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Deployment",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DeploymentStatus",
                            "kind": "LinkedField",
                            "name": "latestStatus",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "deployments(last:1)"
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "PullRequestConnection",
                    "kind": "LinkedField",
                    "name": "pullRequests",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PullRequest",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "pullRequests(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v16/*: any*/)
                    ],
                    "storageKey": "object(expression:\"main\")"
                  },
                  {
                    "alias": "packageJSON",
                    "args": (v17/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/)
                    ],
                    "storageKey": "object(expression:\"master:package.json\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(last:100,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppRepositoriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": (v8/*: any*/),
                            "concreteType": "LabelConnection",
                            "kind": "LinkedField",
                            "name": "labels",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Label",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  (v2/*: any*/),
                                  (v19/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "labels(last:1)"
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "DeploymentConnection",
                    "kind": "LinkedField",
                    "name": "deployments",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Deployment",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DeploymentStatus",
                            "kind": "LinkedField",
                            "name": "latestStatus",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v10/*: any*/),
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "deployments(last:1)"
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "PullRequestConnection",
                    "kind": "LinkedField",
                    "name": "pullRequests",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PullRequest",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              (v20/*: any*/),
                              (v11/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v19/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
                              }
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "pullRequests(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v20/*: any*/),
                      (v16/*: any*/),
                      (v19/*: any*/)
                    ],
                    "storageKey": "object(expression:\"main\")"
                  },
                  {
                    "alias": "packageJSON",
                    "args": (v17/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v20/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/)
                    ],
                    "storageKey": "object(expression:\"master:package.json\")"
                  },
                  (v19/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(last:100,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
          },
          (v19/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e13f892d4b9eeb2fe1c7a447ebc21308",
    "id": null,
    "metadata": {},
    "name": "AppRepositoriesListQuery",
    "operationKind": "query",
    "text": "query AppRepositoriesListQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    name\n    repositories(last: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      totalCount\n      nodes {\n        name\n        forkCount\n        issues(last: 4, states: OPEN) {\n          totalCount\n          nodes {\n            state\n            labels(last: 1) {\n              totalCount\n              nodes {\n                color\n                name\n                id\n              }\n            }\n            id\n          }\n        }\n        deployments(last: 1) {\n          totalCount\n          nodes {\n            latestStatus {\n              state\n              updatedAt\n              id\n            }\n            id\n          }\n        }\n        pullRequests(last: 4, states: OPEN) {\n          totalCount\n          nodes {\n            author {\n              __typename\n              avatarUrl\n              ... on Node {\n                __isNode: __typename\n                id\n              }\n            }\n            mergeable\n            isDraft\n            isReadByViewer\n            id\n          }\n        }\n        object(expression: \"main\") {\n          __typename\n          ... on Commit {\n            history {\n              totalCount\n            }\n          }\n          id\n        }\n        packageJSON: object(expression: \"master:package.json\") {\n          __typename\n          ... on Blob {\n            text\n          }\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "908128cd772118fcb5ef2eba3eea9369";

export default node;
