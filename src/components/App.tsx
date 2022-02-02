import {VFC,  useState } from "react";
import { QueryRenderer } from "react-relay";
import {graphql} from "babel-plugin-relay/macro";
import "./App.css";
import RelayEnvironment from "../RelayEnvironment";
import {ReposList} from "./ReposList";
import { InputLogin } from "./InputLogin";
import { LoadingSkeleton } from "./LoadingSkeleton";

 const App: VFC = () => {
  const [enteredLogin, setEnteredLogin] = useState("");

  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query AppRepositoriesListQuery($login: String!) {
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
      `}
      variables={{ login: enteredLogin }}
      render={({ error, props }: any) => {
        if (error) {
          return <div>Error!</div>;
        }
        return (
          <div className="App">
            <header className="App-header">
              <InputLogin onEnter={(value) => setEnteredLogin(value)} />
              {enteredLogin && !props && <LoadingSkeleton />}
              {enteredLogin && (
                <ReposList data={props?.user?.repositories.nodes} />
              )}
            </header>
          </div>
        );
      }}
    />
  );
 }


export default App;