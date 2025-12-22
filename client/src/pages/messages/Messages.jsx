import React from 'react'
import "./messages.css";
import { Link } from 'react-router-dom';

const Messages = () => {

  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus, fugiat voluptatibus quisquam adipisci reprehenderit animi nostrum totam iste ipsa repudiandae debitis aliquam itaque expedita. Commodi, inventore molestiae ipsa earum, adipisci fuga quas sint laboriosam laborum nam distinctio libero ducimus facere atque? Labore reprehenderit voluptates asperiores esse, repudiandae, atque quisquam ut ea dicta, nesciunt incidunt dolorum numquam. Explicabo vero nisi aut. Quidem facilis atque tenetur! Error facere natus nesciunt. Similique laborum aut, consequuntur odio repellendus itaque neque, soluta dignissimos iusto est maiores. Earum veritatis laboriosam, et debitis in inventore eligendi perspiciatis consectetur accusantium voluptatem sint quos beatae numquam quis a excepturi tempore placeat mollitia aspernatur labore sit repellat corrupti. Nulla voluptates sapiente repellendus minima repellat architecto, veritatis quaerat, corrupti quia quos sequi nisi expedita quo, cupiditate itaque sint. Rerum, id. Et reprehenderit temporibus iusto quia facilis optio ipsum maiores libero, suscipit inventore incidunt molestiae pariatur, minus hic esse quis velit. Incidunt error eaque dolorum molestiae. Quis, accusantium ratione et tempora laudantium iure debitis amet. Neque, incidunt, molestiae at doloribus nulla voluptatibus repudiandae possimus sunt dicta, ipsa tenetur vero saepe ad quo cum corrupti voluptates tempora repellat. Ipsum earum aliquam dolore porro, voluptatibus aspernatur, dolores consequuntur cumque consequatur maxime amet nisi?"

  return (
    <div className="messages">
      <div className="container">
        <div className='header'>
          <h1>My Nest</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td>
              <Link to="/message/123" className='link'>{message.substring(0,100)}....</Link>
            </td>
            <td>
              1 hour ago
            </td>
            <td>
              <button className='read'>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              {message.substring(0,100)}....
            </td>
            <td>
              1 hour ago
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              {message.substring(0,100)}....
            </td>
            <td>
              2 hour ago
            </td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default Messages;