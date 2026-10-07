import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Episode from './pages/Episode'
import Download from './pages/Download'
export default function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/episode/:id" element={<Episode />} />
    <Route path="/download/:id" element={<Download />} />
    <Route path="*" element={<Home />} />
  </Routes>)
}
