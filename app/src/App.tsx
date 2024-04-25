import { FC } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Header } from 'layouts';
import { MonumentsPage, MyLocationPage, ParksPage } from 'pages';

const App: FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MonumentsPage />} />
      <Route path="/parks" element={<ParksPage />} />
      <Route path="/me" element={<MyLocationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
