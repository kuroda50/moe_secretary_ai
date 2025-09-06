import React from 'react';
import { useParams } from 'react-router-dom';
import {MailListItem} from './MailListItem';

export const MailDetail = () => {
  const { id } = useParams();
  const mail = MailListItem.find((m) => m.id === parseInt(id));

  if (!mail) {
    return <div>メールが見つかりませんでした。</div>;
  }

  return (
    <div>
      <h2>📧 メール詳細</h2>
      <p><strong>送信者:</strong> {mail.address}</p>
      <p><strong>件名:</strong> {mail.title}</p>
      <p><strong>本文:</strong> {mail.body}</p>
    </div>
  );
};

