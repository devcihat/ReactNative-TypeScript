export interface SearchQuery_search {
    __typename: "Podcast";
    artist: string;
    episodesCount: number;
    feedUrl: string;
    podcastName: string;
    thumbnail: string;
    genres: string[];
  }
  
  export interface SearchQuery {
    search: SearchQuery_search[];
  }
  
  export interface SearchQueryVariables {
    term: string;
  }
  
  