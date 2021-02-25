import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FormStyles from './styles/FormStyles';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import ErrorMessage from './ErrorMessage';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          firstName
          lastName
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    resetForm();
    router.push('/');
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <ErrorMessage error={error} />
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>

      <p>
        Need an account? <Link href="/signup">Sign Up Here!</Link>
      </p>
    </FormStyles>
  );
}
