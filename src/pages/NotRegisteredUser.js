import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

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
              <UserForm title='Sign In' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
