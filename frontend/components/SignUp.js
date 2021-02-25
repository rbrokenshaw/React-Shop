import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import FormStyles from './styles/FormStyles';
import ErrorMessage from './ErrorMessage';
import useForm from '../lib/useForm';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      id
      email
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    resetForm();
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - you can now{' '}
            <Link href="/signin">Sign In!</Link>
          </p>
        )}
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            autoComplete="given-name"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            autoComplete="family-name"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Sign Up!</button>
      </fieldset>
    </FormStyles>
  );
}
