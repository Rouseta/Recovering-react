import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="Rouseta"
        formatUserName={formatUserName}
      >
        Rosa Donoso Requena
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing
        userName="Puch"
        formatUserName={formatUserName}
      >
        Juan Roch González
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName="Dumbledore"
        formatUserName={formatUserName}
      >
        Albus Dumbledore
      </TwitterFollowCard>

      <TwitterFollowCard
        isFollowing={false}
        userName="Messi"
        formatUserName={formatUserName}
      >
        Leo Messi
      </TwitterFollowCard>
    </section>
  );
}
