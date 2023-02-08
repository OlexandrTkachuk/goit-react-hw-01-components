import Profile from 'components/Profile';
import Section from 'components/Section';
import user from 'user.json';

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          key={user.tag}
          avatarUrl={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </div>
  );
}
