import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { router } from './router/router.tsx';
import { TodoProvider } from './context/TodoContext.tsx';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>,
);
