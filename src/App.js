import GiftCard from "./GiftCard";
import 'bootstrap/dist/css/bootstrap.min.css'

const giftList = [
  {
    id: 0,
    name: "Vans",
    rating: null,
    category: "Fashion"
  },
  {
    id: 1,
    name: "Nike Air Force 1",
    rating: null,
    category: "Fashion"
  },
  {
    id: 2,
    name: "Bamboo Sheets",
    rating: null,
    category: "Home"
  },
  {
    id: 3,
    name: "Nugets Game",
    rating: null,
    category: "Events"
  },
  {
    id: 4,
    name: "airPods",
    rating: null,
    category: "Electronics"
  },
]

function App() {
  return (
    <div>
      <h1>My Gifts</h1>
      {giftList.map(g => <GiftCard gift={g} />)}
    </div>
  );
}

export default App;
