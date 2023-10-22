import React from "react";

const ChangeTable = ({ changeLog }) => {
  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Prop Name</th>
            <th>Previous Value</th>
            <th>Next Value</th>
          </tr>
        </thead>
        <tbody>
          {changeLog?.map((change, index) => (
            <tr key={index}>
              <td>{change.componentName}</td>
              <td>{change.propName}</td>
              <td>{JSON.stringify(change.prevValue)}</td>
              <td>{JSON.stringify(change.nextValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChangeTable;
