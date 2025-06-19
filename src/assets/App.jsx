import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard userName="Rouseta" formatUserName={formatUserName}>
        Rosa Donoso Requena
      </TwitterFollowCard>
      <TwitterFollowCard userName="Puch" formatUserName={formatUserName}>
        Juan Roch González
      </TwitterFollowCard>
      <TwitterFollowCard userName="Dumbledore" formatUserName={formatUserName}>
        Albus Dumbledore
      </TwitterFollowCard>

      <TwitterFollowCard userName="Messi" formatUserName={formatUserName}>
        Leo Messi
      </TwitterFollowCard>
    </section>
  );
}
