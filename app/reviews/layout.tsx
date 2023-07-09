const ReviewsLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          border: "1px solid red",
        }}
      >
        Sidebar
      </div>
      <div
        style={{
          border: "1px solid blue ",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ReviewsLayout;
