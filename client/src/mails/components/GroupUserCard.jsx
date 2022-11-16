import React, { useEffect } from "react";
import { useGroups } from "../context/GroupProvider";

export default function GroupUserCard({ mail }) {
  const { groups, loadGroups } = useGroups();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadGroups();
    }, 500);
    return () => clearTimeout(timer);
  });

  return (
    <tbody className="text-left mx-auto">
      <tr>
        <td>{mail.user}</td>
        {groups.map((group) => (
          <td key={group.id}>{group.email}</td>
        ))}
         {groups.map((group) => (
          <td>{group.description}</td>
          ))}
      </tr>
    </tbody>
  );
}

