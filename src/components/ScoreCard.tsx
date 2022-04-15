import React from "react";
import { useStore } from "../stores/Zustand";

export default function ScoreCard() {
  const score = useStore((state) => state.user.score);
  const updateUser = useStore((state) => state.updateUser);

  return (
    <div>
      <input
        type="number"
        value={score}
        onChange={(e) => updateUser({ score: parseInt(e.target.value) })}
      />
      <p>ScoreCard: score</p>
    </div>
  );
}
