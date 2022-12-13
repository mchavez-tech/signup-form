import 'styles/theme.css';
import 'styles/index.css';

import { FC } from 'react';

import { SignupForm } from 'containers';

const App: FC = () => {
  return (
    <div className="App">
      <SignupForm />
    </div>
  );
}

export default App;
