import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MailList } from "./mail/components/MailList";
import { MailDetail } from "./mail/components/MailDetail"


function App() {
  return (
    <div>
        <BrowserRouter>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<MailList />} />
              <Route path="/mail/:id" element={<MailDetail />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>

  );
}

export default App;
