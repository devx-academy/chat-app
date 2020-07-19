import React from 'react'

import Person from '../components/Person'

class PeopleContainer extends React.Component {
  render() {
    return (
      <div className="people-container">
        <Person
          name="Tom"
          lastMessage="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer imperdiet lectus quis justo"
        />
        <Person
          name="Tom"
          lastMessage="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce wisi"
        />
        <Person name="Tom" />
        <Person name="Tom" />
        <Person name="Tom" />
      </div>
    )
  }
}

export default PeopleContainer
