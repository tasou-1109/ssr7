import "./produce.scss";
import React from "react";

export const Produce = () => {
  return (
    <main className="main">
      <label id="main__name-label">名前</label>
      <br />
      <h3>ざき</h3>

      <label id="main__old-label">年齢</label>
      <br />
      <h3>20歳</h3>

      <label id="main__ken-label">出身地</label>
      <br />
      <h3>日本</h3>
    </main>
  );
};
