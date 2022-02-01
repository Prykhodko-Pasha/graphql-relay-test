// import React from "react";
// import "./App.css";
// // import fetchGraphQL from "./fetchGraphQL";
// import graphql from "babel-plugin-relay/macro";
// import {
//   RelayEnvironmentProvider,
//   loadQuery,
//   usePreloadedQuery,
//   useQueryLoader,
// } from "react-relay/hooks";
// import RelayEnvironment from "./RelayEnvironment";
// import ReposList from "./components/ReposList";
// import InputLogin from "./components/InputLogin.tsx";
// // import * as GetRepos from './GetRepos.graphql'

// const { Suspense } = React;

// // Define a query
// const RepositoriesListQuery = (login) => graphql`
//   query AppRepositoriesListQuery {
//     user(login: "pedroslopez") {
//       name
//       repositories(last: 10, orderBy: { field: UPDATED_AT, direction: ASC }) {
//         totalCount
//         nodes {
//           name
//           forkCount
//           issues(last: 4, states: OPEN) {
//             totalCount
//             nodes {
//               state
//               labels(last: 1) {
//                 totalCount
//                 nodes {
//                   color
//                   name
//                 }
//               }
//             }
//           }
//           deployments(last: 1) {
//             totalCount
//             nodes {
//               latestStatus {
//                 state
//                 updatedAt
//               }
//             }
//           }
//           pullRequests(last: 4, states: OPEN) {
//             totalCount
//             nodes {
//               author {
//                 avatarUrl
//               }
//               mergeable
//               isDraft
//               isReadByViewer
//             }
//           }
//           object(expression: "main") {
//             ... on Commit {
//               history {
//                 totalCount
//               }
//             }
//           }
//           packageJSON: object(expression: "master:package.json") {
//             ... on Blob {
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// // Immediately load the query as our app starts. For a real app, we'd move this
// // into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = loadQuery(RelayEnvironment, RepositoriesListQuery);

// // Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// // This works as follows:
// // - If the query has completed, it returns the results of the query.
// // - If the query is still pending, it "suspends" (indicates to React that the
// //   component isn't ready to render yet). This will show the nearest <Suspense>
// //   fallback.
// // - If the query failed, it throws the failure error. For simplicity we aren't
// //   handling the failure case here.
// function App(props) {
//   const data = usePreloadedQuery(RepositoriesListQuery, props.preloadedQuery);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <InputLogin />
//         <ReposList data={data.user.repositories.nodes} />
//       </header>
//     </div>
//   );
// }

// // The above component needs to know how to access the Relay environment, and we
// // need to specify a fallback in case it suspends:
// // - <RelayEnvironmentProvider> tells child components how to talk to the current
// //   Relay Environment instance
// // - <Suspense> specifies a fallback in case a child suspends.
// function AppRoot(props) {
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <Suspense fallback={"Loading..."}>
//         <App preloadedQuery={preloadedQuery} />
//       </Suspense>
//     </RelayEnvironmentProvider>
//   );
// }

// export default AppRoot;
