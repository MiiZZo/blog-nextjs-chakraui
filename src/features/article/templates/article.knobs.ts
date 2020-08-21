export const body = `
# Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis iste corporis nulla velit optio obcaecati accusamus illum eos voluptatem sit deleniti rerum, unde blanditiis sapiente aliquam suscipit. Sequi, ducimus.

- Lorem ipsum dolor sit amet consectetur adipisicing elit. 
- Ex dolor nesciunt aperiam quibusdam dolores libero velit, ullam sit. 
- Fugiat optio cum esse modi? Explicabo vero sunt pariatur ex nihil maiores.
- Iusto, asperiores veniam sequi dolor nostrum totam accusamus eum natus vitae it.

\`\`\`js
import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
          increment
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>
          decrement
        </button>
    </div>
  )
}
\`\`\`

`;

export const comments = [
  {
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto rerum asperiores magni quaerat, praesentium accusantium maiores maxime inventore explicabo quibusdam possimus iure ipsa magnam suscipit et impedit. Quia, voluptatem.Excepturi praesentium repudiandae vitae atque alias ipsam facere deserunt id, hic at, totam repellat est velit vero repellendus doloremque expedita! Consequatur vel nemo corporis fugiat! Facere earum aperiam id quaerat."
  },
  {
    body: "I like this idea"
  },
  {
    body: "Nice work!"
  }
];
