import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const goalIdeas = [
  "Drink 2L of water",
  "Write for 15 minutes",
  "Exercise for 30 minutes",
  "Read one chapter of a book",
  "Plan tomorrow’s schedule",
];

const maxGoals = 5;

function DailyGoalsBug() {
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();

  function onGoalComplete(goal) {
    setGoals((prev) => [...prev, goal]);
  }

  function resetGoals() {
    setGoals([]);
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Your Daily Goals</h1>
      <p className="mb-4">Set and track your top 5 goals for today:</p>

      {goals.map((goal, index) => (
        <p key={index}>
          Goal {index + 1}: {goal}
        </p>
      ))}

      {goals.length < maxGoals ? (
        <GoalForm
          initialGoal={goalIdeas[goals.length]}
          onGoalComplete={onGoalComplete}
        />
      ) : (
        <>
          <button
            onClick={resetGoals}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
          <button
            onClick={() => navigate("/daily-goals")}
            className="mt-4 ml-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            Go to Fixed Version
          </button>
        </>
      )}
    </div>
  );
}

function GoalForm({ initialGoal, onGoalComplete }) {
  const [goal, setGoal] = useState(initialGoal);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGoalComplete(goal);
      }}
      className="mt-4"
    >
      <label htmlFor="goal-input" className="block mb-2">
        What’s one goal you want to achieve today?
      </label>
      <input
        id="goal-input"
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="submit"
        value="Add Goal"
        className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
      />
    </form>
  );
}

export default DailyGoalsBug;
