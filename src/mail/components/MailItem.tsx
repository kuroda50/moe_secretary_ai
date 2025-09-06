import { Link } from "react-router-dom";

const MailItem = ({ mail, isSelected, onClick}) => {
  return (
    <div
      className={`mail-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(mail.id)}
    >
        {/* ここはAPIから取得 */}
      <div>{mail.id}.
        {/* 詳細画面に飛ぶ */}
        <Link to={`/mail/${mail.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              <strong>{mail.title}</strong>
            </Link></div>
    </div>
  );
};

export default MailItem;