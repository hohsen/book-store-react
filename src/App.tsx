import type { FC } from "react";

import "./App.css";

interface Props {
  showLogo?: boolean;
}

export const App: FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};
