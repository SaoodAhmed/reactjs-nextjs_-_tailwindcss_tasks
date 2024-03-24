import React from "react";

// const Alert = (props: any) => {
//   return (
//     <>
//       <span>{`${props.type === "warning" ? "⚠" : "i"}`}</span>
//       <span>{props.heading}</span>
//       <div>{props.children}</div>
//     </>
//   );
// };

interface propsType {
  type: string;
  heading: string;
  children: string;
}

const Alert = ({ type, heading, children }: propsType) => {
  return (
    <>
      <span>{`${type === "warning" ? "⚠" : "i"}`}</span>
      <span>{heading}</span>
      <div>{children}</div>
    </>
  );
};

const PropExample = () => {
  return (
    <div className="p-10">
      <Alert type="Informaition" heading="Success">
        Everything is really good!
      </Alert>
    </div>
  );
};

export default PropExample;
