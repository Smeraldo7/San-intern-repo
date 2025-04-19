import { useEffect, useState } from "react";

function ApiLoggerComponent() {
  const [data, setData] = useState(null);

  // Mount + Unmount logs
  useEffect(() => {
    console.log("🔵 Component mounted");

    return () => {
      console.log("🔴 Component unmounted (cleanup)");
    };
  }, []);

  const fetchData = async () => {
    console.log("⏳ Fetching data...");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const json = await response.json();
      setData(json);
      console.log("✅ Data fetched");
    } catch (error) {
      console.error("❌ Error fetching data", error);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow">
      <h2 className="text-lg font-bold mb-2">API Logger Component</h2>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Fetch Data
      </button>

      {data && (
        <div className="mt-4 p-2 border bg-gray-100">
          <h3 className="font-semibold">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default ApiLoggerComponent;
