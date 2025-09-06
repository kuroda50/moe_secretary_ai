const MailItem = ({ mail, isSelected, onClick,  }) => {
  return (
    <div
      className={`mail-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(mail.id)}
    >
        {/* ここはAPIから取得 */}
      <div>{mail.id}.
        {/* 詳細画面に飛ぶ */}
        {mail.title}</div>
    </div>
  );
};

export default MailItem;