 // src/Routes.tsx
 import React from 'react';
 import { HashRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
 import Centrova from './pages/Centrova';
 import UCSBGeoguessr from './pages/UCSBGeoguessr';

 const AppRoutes: React.FC = () => (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/centrova" element={<Centrova />} />
       <Route path="/ucsbgeoguessr" element={<UCSBGeoguessr />} />
       {/* <Route path="*" element={<NotFound />} /> */}
     </Routes>
   </Router>
 );

 export default AppRoutes;
