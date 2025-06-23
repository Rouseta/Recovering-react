import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        userName="Rouseta"
        formatUserName={formatUserName}
        initialIsFollowing={true}
      >
        Rosa Donoso Requena
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="Puch"
        formatUserName={formatUserName}
        initialIsFollowing={false}
      >
        Juan Roch González
      </TwitterFollowCard>
      <TwitterFollowCard
        userName="Dumbledore"
        formatUserName={formatUserName}
        initialIsFollowing={true}
      >
        Albus Dumbledore
      </TwitterFollowCard>
      <TwitterFollowCard
        userName="Messi"
        formatUserName={formatUserName}
        initialIsFollowing={false}
      >
        Leo Messi
      </TwitterFollowCard>
    </section>
  );
}
