const LaunchShip = ({ ships }) => {
  return (
    <div className='launch-ships'>
      <h1>Launch Ships</h1>
      <hr />
      {ships && ships.length === 0 ? (
        <table>
          <tbody>
            <tr>
              <td>No ships allocated!</td>
            </tr>
          </tbody>
        </table>
      ) : (
        ships.map((ship) => (
          <table>
            <tbody>
              <tr>
                <td>{ship}</td>
              </tr>
            </tbody>
          </table>
        ))
      )}
    </div>
  )
}

export default LaunchShip
