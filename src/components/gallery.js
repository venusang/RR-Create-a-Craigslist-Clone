import Posting from "./posting";

function Gallery() {
  const craigsListPostings = require('../postings');

  let postList = craigsListPostings.postings.map((data, i) => {
    return <Posting data={data} key={`post - ${i}`} />
  });
  return (
    <div className='gallery'>
      <h1>Gallery</h1>
      {postList}
    </div>
  );
}

export default Gallery;