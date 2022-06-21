import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <>
      <Heading level={1}>Hello {user.email}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default withAuthenticator(App);
