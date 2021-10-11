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
                  (register) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    return <UserForm title='Sign Up' onSubmit={onSubmit} />
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
