import React from 'react';

const TrackDetails = ({ title, user }) => {
  return (
    <div className="db tc">
      <span className="white f5 b db nowrap overflow-hidden truncate pl4 pr4 lh-title mb1">{title}</span>
      <span className="white f5 db lh-copy">{user}</span>
    </div>
  );
};

export default TrackDetails;
