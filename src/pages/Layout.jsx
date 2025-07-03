import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

// 1. Outlet을 사용하여 모든 라우팅에서 보이게 해야합니다.
// 2. 각 Link를 연동하여 알맞는 주소로 전송 해야 합니다.

const randomNumber = () => {
  return Math.random();
};

let randomPath = `/admin/${randomNumber()}`;

function Layout() {
  return (
    <div className="admin-layout">
      <header>
        <div className="logo">어드민 대시보드</div>
        <h2>Admin Page Project</h2>
      </header>
      <div className="admin-content">
        <div className="sidebar">
          <Link to="/admin">대시보드</Link>
          <Link to="/admin/users">사용자</Link>
          <Link to="/admin/settings">설정</Link>
          <Link to={randomPath}>잘못된 페이지</Link>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
