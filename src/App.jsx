import Search from './components/search';
import Results from './components/result';
// import Results from './components/resultList';
import Nomination from './components/nomination';
import NominationList from './components/nominationList';

export default function App() {
  return (
    <div>
      <h1>The Shoppies</h1>
      <Search />
      <Results />
      <Nomination />
      <NominationList />
    </div>
  );
}
