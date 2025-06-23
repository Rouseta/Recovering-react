import '../assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
const users = [
  { userName: 'Rouseta', name: 'Rosa Donoso Requena', isFollowing: true },
  { userName: 'Puch', name: 'Juan Roch González', isFollowing: false },
  { userName: 'Dambledore', name: 'Albus Dumbledore', isFollowing: true },
  { userName: 'Messi', name: 'Leo Messi', isFollowing: false },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
