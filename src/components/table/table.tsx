import React from "react";

import classes from "./table.module.css";

const TH: React.FC<{ classNames?: string }> = ({ classNames, children }) => {
  return (
    <th className={`block md:table-cell ${classNames ? classNames : ""}`}>
      {children}
    </th>
  );
};

const TD: React.FC<{ classNames?: string }> = ({ classNames, children }) => {
  console.log(classes);
  return (
    <td
      className={`block md:table-cell py-4 h-24 mobile-table-before-td${
        classNames ? classNames : ""
      } ${classes["mobile-table-before-td"]}`}
    >
      {children}
    </td>
  );
};

export { TH, TD };
