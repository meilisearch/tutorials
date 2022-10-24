import React from "react"
import { InstantSearch, Highlight, SearchBox, Hits, RefinementList, ClearRefinements } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  "http://127.0.0.1:7700",
  ""
);

const App = () => (
  <InstantSearch
    indexName="Recipe" // Change your index name here
    searchClient={searchClient}
  >
    <div className="left-panel">
      <ClearRefinements />
      <h2>Type of diet</h2>
      <RefinementList attribute="diet" />
    </div>
    <div className="right-panel">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </div>

  </InstantSearch>
);

const Hit = ({ hit }) => <Highlight attribute="title" hit={hit} />

export default App
