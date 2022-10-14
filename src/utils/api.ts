import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api.spacex.land/graphql/",
	cache: new InMemoryCache(),
});

export const GET_LAUNCHES = gql`
	query {
		launchesPast {
			launch_year
		}
	}
`;
