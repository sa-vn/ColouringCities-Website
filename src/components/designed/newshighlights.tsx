
import { Newspaper } from "lucide-react" // icon library
type NewsItem = {
  id: number
  title: string
  date?: string
  image: string
  summary?: string
}

const LEAD_ITEM: NewsItem = {
  id: 1,
  title: "Venus Williams' U.S. Open ends with a loss in the women's doubles quarterfinals",
  image: "/news/image.png", // replace with real image
}

const SIDE_ITEMS: NewsItem[] = [
  {
    id: 2,
    title: "George Raveling, Hall of Fame coach who pushed Michael Jordan to Nike, dies at 88",
    image: "/news/news4.png",
  },
  {
    id: 3,
    title: "Drake places a $300,000 bet on Jannik Sinner to win the U.S. Open",
    image: "/news/news2.png",
  },
  {
    id: 4,
    title: "USATF announces roster for 2025 World Championships",
    image: "/news/news3.png",
  },
  {
    id: 5,
    title: "Inside the AP poll: Why voters picked Ohio State over LSU at No. 1",
   image: "/news/news3.png",
  },

]
const SIDE_ITEMS_2: NewsItem[] = [
  {
    id: 2,
    title: "George Raveling, Hall of Fame coach who pushed Michael Jordan to Nike, dies at 88",
    image: "/news/news3.png",
  },
  {
    id: 3,
    title: "Drake places a $300,000 bet on Jannik Sinner to win the U.S. Open",
    image: "/news/news2.png",
  },
  {
    id: 4,
    title: "USATF announces roster for 2025 World Championships",
    image: "/news/news4.png",
  },


]
export default function NewsHighlights() {
  return (
     <section className="w-full  px-0 py-5 flex justify-center">
  {/* Section Title */}
      {/* <div className="items-center gap-2 mb-6">
        <Newspaper className="h-6 w-6 text-gray-800" />
        <h2 className="text-2xl md:text-2xl ">News </h2>
      </div> */}
      <div  className="w-full ">
     <div className="flex items-center gap-2 mb-6">
      <Newspaper className="h-6 w-6 text-gray-800" />
      <h2 className="text-1xl font-bold">Latest News</h2>
    </div>
    
      <div className="grid md:grid-cols-4 gap-6   px-0 max-auto ">


        {/* Right: Side Stories */}
         <div className="space-y-6 shadow-sm">
          {SIDE_ITEMS.map((item) => (
            <div key={item.id} className="flex gap-3  pb-4 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-20 object-cover rounded"
              />
              <h3 className="text-xs md:text-sm font-medium leading-snug line-clamp-4 text-justify py-1 mr-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="space-y-6 shadow-sm">
          {SIDE_ITEMS_2.map((item) => (
            <div key={item.id} className="flex gap-3 border-b pb-4 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-20 object-cover rounded"
              />
              <h3 className=" text-xs md:text-sm font-medium leading-snug line-clamp-4 text-justify mr-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
                {/* Left: Lead Story */}
        <div className="md:col-span-2 shadow-sm">
          <img
            src={LEAD_ITEM.image}
            alt={LEAD_ITEM.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <h2 className="text-1xl md:text-1xl font-bold mt-4">
            {LEAD_ITEM.title}
          </h2>
        </div>
      </div>
      </div>
    </section>
  )
}
