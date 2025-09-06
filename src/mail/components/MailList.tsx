import React, { useState } from 'react';
import MailItem from './MailItem';
import { MailListItem } from './MailListItem';

export const MailList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <h1>メールを選んでね</h1>
      {MailListItem.map((mail) => (
        <MailItem

          mail={mail}
          isSelected={mail.id === selectedId}
          onClick={handleSelect}
          
        />
      ))}
    </div>
  );
};

