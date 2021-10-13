import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'User already exist'

                    return <UserForm disabled={loading} error={errorMsg} title='Sign Up' onSubmit={onSubmit} />
                  }
                }
              </RegisterMutation>

              <LoginMutation>
                {
                  (login, { error, data, loading }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'The password is incorrect or user does not exist'

                    return <UserForm disabled={loading} error={errorMsg} title='Sign In' onSubmit={onSubmit} />
                  }
                }

              </LoginMutation>

            </>
          )
        }
      }
    </Context.Consumer>
  )
}
