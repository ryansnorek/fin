import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { useEffect, useRef, useState } from 'react';
import { FinnhubService } from '../../services/FinnhubService';
import './index.css';
import ClickOutside from '../ClickOutside';

const SearchMenu = ({ setSelected }: any) => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);
  const loading = query && !queryResult[0];
  const loaded = query && queryResult[0];

  const finService = new FinnhubService();

  useEffect(() => {
    if (query) {
      finService
        .getTickerSymbols(query)
        .then(({ data }: any) => setQueryResult(data.result));
    } else {
      setQueryResult([]);
    }
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-menu">
      <InputText
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
        placeholder="$"
        className="p-inputtext-lg searchbar"
      />
      {loaded && (
        <ClickOutside callback={() => setQueryResult([])}>
          <Card>
            {queryResult.slice(0, 10).map((result: any) => (
              <div className="query-item" onClick={() => setSelected(result)}>
                {result.symbol}
              </div>
            ))}
          </Card>
        </ClickOutside>
      )}
    </div>
  );
};

export default SearchMenu;
