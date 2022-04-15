import React from "react";
import { useUserContext } from "../../stores/useContext";

export default function ScoreCard() {
  const {
    user: { score },
    updateUser,
  } = useUserContext();

  return (
    <div>
      <input
        type="number"
        value={score}
        onChange={(e) => updateUser({ score: parseInt(e.target.value) })}
      />
      <p>ScoreCard: {score}</p>
    </div>
  );
}
