import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="Rouseta"
        name="Rosa Donoso Requena"
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        isFollowing
        userName="Puch"
        name="Juan Roch González"
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        isFollowing
        userName="Dumbledore"
        name="Albus Dumbledore"
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="Messi"
        name="Leo Messi"
        formatUserName={formatUserName}
      />
    </section>
  );
}
