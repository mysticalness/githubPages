function List({ key, bookName, duration, bookImg, bookImgLink }) {
  console.log(bookImg);

  return (
    <div className="summaryList">
      <div className="bookName">{bookName}</div>
      <div className="duration-Key">
        <div>{duration}</div>
        <div>{key}</div>
      </div>
      <div className="bookImage">
        {bookImg}
        <img src={bookImg} alt={bookName} />
      </div>
    </div>
  );
}

export default List;
