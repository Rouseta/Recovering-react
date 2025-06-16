import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="Rouseta" name="Rosa Donoso Requena" />
      <TwitterFollowCard userName="Puch" name="Juan Roch González" />
       <TwitterFollowCard userName="Dumbledore" name="Albus Dumbledore" />
    </section>
  );
}
