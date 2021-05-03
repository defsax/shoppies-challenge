import Search from './components/search';
import Results from './components/results';
import Nomination from './components/nomination';
import NominationList from './components/nominations-list';

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
