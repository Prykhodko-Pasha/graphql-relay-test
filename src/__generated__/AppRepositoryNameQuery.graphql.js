/**
 * @generated SignedSource<<c545262a4a7099a10dd06ff6c377648a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type DeploymentStatusState = "ERROR" | "FAILURE" | "INACTIVE" | "IN_PROGRESS" | "PENDING" | "QUEUED" | "SUCCESS" | "WAITING" | "%future added value";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type MergeableState = "CONFLICTING" | "MERGEABLE" | "UNKNOWN" | "%future added value";
export type AppRepositoryNameQuery$variables = {||};
export type AppRepositoryNameQueryVariables = AppRepositoryNameQuery$variables;
export type AppRepositoryNameQuery$data = {|
  +user: ?{|
    +name: ?string,
    +repositories: {|
      +totalCount: number,
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +forkCount: number,
        +issues: {|
          +totalCount: number,
          +nodes: ?$ReadOnlyArray<?{|
            +state: IssueState,
            +labels: ?{|
              +totalCount: number,
              +nodes: ?$ReadOnlyArray<?{|
                +color: string,
                +name: string,
              |}>,
            |},
          |}>,
        |},
        +deployments: {|
          +totalCount: number,
          +nodes: ?$ReadOnlyArray<?{|
            +latestStatus: ?{|
              +state: DeploymentStatusState,
              +updatedAt: any,
            |},
          |}>,
        |},
        +pullRequests: {|
          +totalCount: number,
          +nodes: ?$ReadOnlyArray<?{|
            +author: ?{|
              +avatarUrl: any,
            |},
            +mergeable: MergeableState,
            +isDraft: boolean,
            +isReadByViewer: ?boolean,
          |}>,
        |},
        +object: ?{|
          +history?: {|
            +totalCount: number,
          |},
        |},
        +packageJSON: ?{|
          +text?: ?string,
        |},
      |}>,
    |},
  |},
|};
export type AppRepositoryNameQueryResponse = AppRepositoryNameQuery$data;
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "pedroslopez"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "UPDATED_AT"
    }
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v5 = [
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 1
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mergeable",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDraft",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isReadByViewer",
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "expression",
    "value": "main"
  }
],
v15 = {
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
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
},
v16 = [
  {
    "kind": "Literal",
    "name": "expression",
    "value": "master:package.json"
  }
],
v17 = {
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
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": (v7/*: any*/),
                            "concreteType": "LabelConnection",
                            "kind": "LinkedField",
                            "name": "labels",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Label",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v8/*: any*/),
                                  (v1/*: any*/)
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
                    "args": (v7/*: any*/),
                    "concreteType": "DeploymentConnection",
                    "kind": "LinkedField",
                    "name": "deployments",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/)
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
                    "args": (v5/*: any*/),
                    "concreteType": "PullRequestConnection",
                    "kind": "LinkedField",
                    "name": "pullRequests",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "pullRequests(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v14/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/)
                    ],
                    "storageKey": "object(expression:\"main\")"
                  },
                  {
                    "alias": "packageJSON",
                    "args": (v16/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/)
                    ],
                    "storageKey": "object(expression:\"master:package.json\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(last:10,orderBy:{\"direction\":\"ASC\",\"field\":\"UPDATED_AT\"})"
          }
        ],
        "storageKey": "user(login:\"pedroslopez\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": (v7/*: any*/),
                            "concreteType": "LabelConnection",
                            "kind": "LinkedField",
                            "name": "labels",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Label",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v8/*: any*/),
                                  (v1/*: any*/),
                                  (v18/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "labels(last:1)"
                          },
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v7/*: any*/),
                    "concreteType": "DeploymentConnection",
                    "kind": "LinkedField",
                    "name": "deployments",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/),
                              (v18/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "deployments(last:1)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "PullRequestConnection",
                    "kind": "LinkedField",
                    "name": "pullRequests",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                              (v19/*: any*/),
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v18/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
                              }
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "pullRequests(last:4,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v14/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
                      (v15/*: any*/),
                      (v18/*: any*/)
                    ],
                    "storageKey": "object(expression:\"main\")"
                  },
                  {
                    "alias": "packageJSON",
                    "args": (v16/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "object",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/)
                    ],
                    "storageKey": "object(expression:\"master:package.json\")"
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(last:10,orderBy:{\"direction\":\"ASC\",\"field\":\"UPDATED_AT\"})"
          },
          (v18/*: any*/)
        ],
        "storageKey": "user(login:\"pedroslopez\")"
      }
    ]
  },
  "params": {
    "cacheID": "06a0bfa5c3d9142c8757c0cb3de5d76a",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  user(login: \"pedroslopez\") {\n    name\n    repositories(last: 10, orderBy: {field: UPDATED_AT, direction: ASC}) {\n      totalCount\n      nodes {\n        name\n        forkCount\n        issues(last: 4, states: OPEN) {\n          totalCount\n          nodes {\n            state\n            labels(last: 1) {\n              totalCount\n              nodes {\n                color\n                name\n                id\n              }\n            }\n            id\n          }\n        }\n        deployments(last: 1) {\n          totalCount\n          nodes {\n            latestStatus {\n              state\n              updatedAt\n              id\n            }\n            id\n          }\n        }\n        pullRequests(last: 4, states: OPEN) {\n          totalCount\n          nodes {\n            author {\n              __typename\n              avatarUrl\n              ... on Node {\n                __isNode: __typename\n                id\n              }\n            }\n            mergeable\n            isDraft\n            isReadByViewer\n            id\n          }\n        }\n        object(expression: \"main\") {\n          __typename\n          ... on Commit {\n            history {\n              totalCount\n            }\n          }\n          id\n        }\n        packageJSON: object(expression: \"master:package.json\") {\n          __typename\n          ... on Blob {\n            text\n          }\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "8970fbfba47b719d68c5f7a8df0e8dd0";

module.exports = ((node/*: any*/)/*: Query<
  AppRepositoryNameQuery$variables,
  AppRepositoryNameQuery$data,
>*/);
