import React from 'react'

import Person from '../components/Person'

class PeopleContainer extends React.Component {
  render() {
    return (
      <div className="people-container">
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    )
  }
}

export default PeopleContainer
