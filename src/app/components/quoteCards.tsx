import React from "react";

const QuoteCards = () => {
  return (
    <div className="flex p-10">
      <div className=" quote">
        <p >
          “The success combination in business is: Do what you do better... and:
          do more of what you do.”
        </p>
        <span>- David J. Schwartz</span>
      </div>
      <div className="quote">
        <p>“Give out what you most want to come back.”</p>
        <span>- Robin Sharma</span>
      </div>
      <div className="quote">
        <p>
          “You don't have to be great at something to start, but you have to
          start to be great at something.”
        </p>
        <span>- Zig Ziglar</span>
      </div>
    </div>
  );
};

export default QuoteCards;
