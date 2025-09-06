const MailItem = ({ mail, isSelected, onClick }) => {
  return (
    <div
      className={`mail-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(mail.id)}
    >
      <div>{mail.address}</div>
      <div>{mail.title}</div>
      <div>{mail.body}</div>
    </div>
  );
};

export default MailItem;