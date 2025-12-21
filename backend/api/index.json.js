export default function handler(req, res) {
  const shows = [
    {
      name: "The Amazing World of Gumball",
      id: "gumball",
      desc: "Following the life of Gumball Watterson, a twelve-year-old cat who attends middle school in Elmore. Accompanied by his pet, adoptive brother, and best friend Darwin Watterson, he frequently finds himself involved in various shenanigans around the city, during which he interacts with various family members—Anais, Richard, and Nicole, and other various citizens.",
      type: "series",
      img: "https://siteitsc.github.io/img/s/1.jpg",
      tn: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gj0GqsFN4mUTUKThB5Md_X2YU7ynPRHJiQ&s"
    },
    {
      name: "Peppa Pig",
      id: "peppa-pig",
      desc: "Peppa Pig is a cheerful, 4-year-old British piglet who loves adventures, playing with her little brother George and friends, dressing up, and most of all, jumping in muddy puddles with her loving family.",
      type: "series",
      img: "https://siteitsc.github.io/img/s/2.jpg",
      tn: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMB3bRpiF9R5JBHOSUY91sKY2JEE9FxSBbg&s"
    },
    {
      name: "Craig of the Creek",
      id: "craig-creek",
      desc: "Following the adventures of Craig Williams and his two friends, Kelsey Pokoly and John Paul `JP' Mercer, as they explore the untamed wilderness of the Creek, which is dominated by tribes of children.",
      type: "series",
      img: "https://siteitsc.github.io/img/s/3.jpg",
      tn: "https://imageservice.sky.com/uuid/838085a2-3f56-4b35-ba72-a973d5a5c03f/background/2000"
    },
    {
      name: "Total Drama Island: Reboot",
      id: "tdi-new",
      desc: "After 7 seasons of Total Drama, it's time to go back to the Island! Taking place in the run-down Camp Wawanakwa, contestants must give it their all as they compete in extreme baking, TikToking, drag racing and disaster and horror movie inspired challenges for a chance to win the one million dollar prize!",
      type: "series",
      img: "https://siteitsc.github.io/img/s/4.jpg",
      tn: "https://cdn.iview.abc.net.au/thumbs/i/zw/ZW3679A002S00_656ea890c7ffb.jpg"
    },
    {
      name: "Grizzy and the Lemmings",
      id: "grizzy-lemmings",
      desc: "Grizzy the bear loves to snack and relax in a Canadian forest cabin, where a pack of adorable, thrill-seeking lemmings are always making mayhem.",
      type: "series",
      img: "https://siteitsc.github.io/img/s/5.jpg",
      tn: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVuQXSwdJXXNdIr5ptctHIF4g0N0x-mOa7zM5V_LG3UjKMJ9lJtEQMSQEwtJzOacU5jWF5yxUVi4zT9abhO2zVt2xDe6eoF0sjQM.jpg?r=b8d"
    },
    {
      name: "Live News Channel",
      id: "live-news",
      desc: "24/7 live global news coverage.",
      type: "live",
      img: "https://example.com/thumbnails/live-news-16x9.jpg"
    },
    {
      name: "The Great Adventure",
      id: "great-adventure",
      desc: "A feature film following a group of explorers on a daring quest.",
      type: "movie",
      img: "https://example.com/thumbnails/great-adventure-16x9.jpg"
    }
  ];

  res.status(200).json(shows);
}
