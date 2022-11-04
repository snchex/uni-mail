import React from "react";


export default function GroupUserCard({ group, mail }) {


  return (
    <>
      <tbody className="text-left mx-auto">
        <tr key={group.id}>
        <td>{mail.user}</td>
        <td>{group.email}</td>
        <td >{group.description}</td>
         
         
        </tr>
      </tbody>

    </>
  );
}
