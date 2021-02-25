import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY, useUser } from './User';

const SignInOutStyles = styled.button`
  text-transform: uppercase;
  position: absolute;
  color: #164e63;
  top: 0;
  right: 0;
  margin: 2rem;
  padding: 0.5rem 1rem;
  border: 0;
  background-color: #fff;
  :hover {
    font-weight: 500;
  }
  cursor: pointer;
  .icon-container {
    display: inline-block;
    margin-right: 0.5rem;
    color: #9ca3af;
    position: relative;
    top: 1px;
  }
`;

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignInOut() {
  const user = useUser();

  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <>
      {!user && (
        <Link href="/signin">
          <SignInOutStyles>
            <div className="icon-container">
              <FaSignInAlt />
            </div>
            Sign In
          </SignInOutStyles>
        </Link>
      )}
      {user && (
        <SignInOutStyles onClick={signout}>
          <div className="icon-container">
            <FaSignOutAlt />
          </div>
          Sign Out
        </SignInOutStyles>
      )}
    </>
  );
}
