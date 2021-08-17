import lodash from 'lodash'
import { Link } from 'react-router-dom'

const TableCard = ({
  heading,
  propertyNamesList,
  propertyValueList,
  timesTimeRednder,
  link = false,
  linkTo,
  className,
  linkName,
}) => {
  const list = lodash.range(0, timesTimeRednder)

  return (
    <div className={className}>
      {heading && (
        <>
          <h1>{heading}</h1>
          <hr />
        </>
      )}

      <table>
        <tbody>
          {list.length > 0 &&
            list.map((val) => (
              <tr key={val}>
                <td>{propertyNamesList[val]}</td>
                <td>{propertyValueList[val]}</td>
              </tr>
            ))}

          {link && (
            <tr>
              <td>Rocket</td>
              <td>
                <Link to={`/rocket/${linkTo}`}>{linkName}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableCard
