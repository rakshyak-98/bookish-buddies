import Link from "next/link"
export default function Home() {
    return (
<div className="page">
  <aside>
    <div className="top-settings">

      <Link href="#" className="active">
        <span className="material-symbols-outlined">
          settings
        </span>
        <h3>
          Settings
        </h3>
      </Link>
      <Link href="#">
        <span className="material-symbols-outlined">
          person
        </span>
        <h3>
          person
        </h3>
      </Link>
    </div>
    <div className="bottom-settings">
      <Link href="#">
        <span className="material-symbols-outlined">
          mail
        </span>
        <h3>Tickets</h3>
      </Link>
      <Link href="#">
        <span className="material-symbols-outlined">
          inventory
        </span>
        <h3>Sale List</h3>
      </Link>

      <Link href="#">
        <span className="material-symbols-outlined">
          report
        </span>
        <h3>Reports</h3>
      </Link>

      <Link href="#">
        <span className="material-symbols-outlined">
          account_circle
        </span>
        <h3>Profile</h3>
      </Link>

      <Link href="#">
        <span className="material-symbols-outlined">
          add
        </span>
        <h3>New Login</h3>
      </Link>
      <Link href="#">
        <span className="material-symbols-outlined">
          logout
        </span>
        <h3>logout</h3>
      </Link>
    </div>
  </aside>
  <main>
    <div className="content">content</div>
    <div className="notification">notification</div>
    <div className="reminder">
      <div className="reminder__header">
        <h3>Reminders</h3>
        <div className="reminder__icon">
          <span className="material-symbols-outlined">
            notifications
          </span>
        </div>
      </div>
      <div className="notification__list">

        <div className="notify__card">
          <div className="notify__icon">
            <span className="material-symbols-outlined">
              stylus
            </span>
          </div>
          <div>
            <p className="title">Workshop</p>
            <span className="timestamp">
              <time>08:30pm</time> - <time>09:30pm</time>
            </span>
          </div>
        </div>
        <div className="notify__card">
          <div className="notify__icon">
            <span className="material-symbols-outlined">
              stylus
            </span>
          </div>
          <div>
            <p className="title">Workshop</p>
            <span className="timestamp">
              <time>08:30pm</time> - <time>09:30pm</time>
            </span>
          </div>
        </div>
      </div>
    </div>

  </main>
</div>
    );
}
