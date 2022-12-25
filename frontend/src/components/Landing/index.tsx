import './index.css';
import SearchMenu from '../SearchMenu';
import { useEffect, useState } from 'react';

export type SelectedSymbol = {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
};

const Landing = () => {
  const [selected, setSelected] = useState<SelectedSymbol | null>(null);
  return (
    <div className="landing">
      <SearchMenu setSelected={setSelected} />
    </div>
  );
};

export default Landing;
