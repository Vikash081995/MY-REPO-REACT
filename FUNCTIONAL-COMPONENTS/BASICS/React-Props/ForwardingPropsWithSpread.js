function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

//with spread
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
