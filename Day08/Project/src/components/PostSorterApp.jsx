import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [sortType, setSortType] = useState("insertion");
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  // Shuffle Function
  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        const shuffled = shuffleArray(data.slice(0, 30));
        setPosts(shuffled);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sorting Trigger
  const handleSort = () => {
    let sorted;

    if (sortType === "insertion") {
      sorted = insertionSort([...posts], order);
    } else {
      sorted = mergeSort([...posts], order);
    }

    setPosts(sorted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🚀 Post Sorter App
        </h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <div className="flex gap-4 w-full md:w-auto">
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            >
              <option value="insertion">Insertion Sort</option>
              <option value="merge">Merge Sort</option>
            </select>

            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <button
            onClick={handleSort}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
          >
            Sort Posts
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
              >
                <h3 className="font-semibold text-indigo-600 mb-2">
                  ID: {post.id}
                </h3>
                <p className="text-gray-700 text-sm">{post.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 🔵 Insertion Sort
const insertionSort = (arr, order) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (
      j >= 0 &&
      (order === "asc"
        ? arr[j].id > current.id
        : arr[j].id < current.id)
    ) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

// 🟣 Merge Sort
const mergeSort = (arr, order) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid), order);
  let right = mergeSort(arr.slice(mid), order);

  return merge(left, right, order);
};

const merge = (left, right, order) => {
  let result = [];

  while (left.length && right.length) {
    if (
      order === "asc"
        ? left[0].id < right[0].id
        : left[0].id > right[0].id
    ) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
};
