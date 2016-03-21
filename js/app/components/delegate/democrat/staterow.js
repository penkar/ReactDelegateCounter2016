import React from 'react'

class StateRow extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    let data = this.props.data, candidates = data.candidates;
    return (
      <tr>
        <td>{data.state}</td>
        <td>{data.date.toLocaleDateString()}</td>
        <td>{data.delegates}</td>
        <td>{data.superdelegates}</td>
        <td>{data.class}</td>
        <td>{candidates['clinton']}</td>
        <td>{candidates['sanders']}</td>
      </tr>
    )
  }
}

export default StateRow;
