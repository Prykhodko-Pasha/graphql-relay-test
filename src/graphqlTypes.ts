import type { AppRepositoriesListQuery$data } from './components/__generated__/AppRepositoriesListQuery.graphql';

export type User = AppRepositoriesListQuery$data['user'];

// type MappedTypeWithNewProperties<Type> = {
//     [Property in keyof Type as `${Capitalize<string & Property>}`]: Type[Property]
// }

// type MutableRequired<T> = { -readonly [P in keyof T]: T[P] };
// type MutableRepos = MutableRequired<User>;
// type Repos = Mutable<User>;
// export type ReposNodes = Pick<MutableRequired<User>, "name">;
