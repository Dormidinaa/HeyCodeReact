import React from 'react';

export const CustomButton = (props) => {
  console.log(props);

  const { onClick, children } = props;

  console.log(children);

  return <button onClick={onClick}>{children}</button>;
};
