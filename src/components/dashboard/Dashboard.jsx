import "./dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <a href="/dashboard" className="dashboard-logo-btn" aria-label="CodeHub Home">
            <img src="/logov1.png" alt="CodeHub" className="dashboard-logo" />
          </a>

          <div className="dashboard-search-wrap">
            <input className="dashboard-search" type="text" placeholder="Search or jump to..." />
          </div>

          <nav className="dashboard-main-nav">
            <a href="#">Pull requests</a>
            <a href="#">Issues</a>
            <a href="#">Codespaces</a>
            <a href="#">Marketplace</a>
            <a href="#">Explore</a>
          </nav>
        </div>

        <div className="dashboard-header-right">
          <button className="dashboard-icon-btn" aria-label="Create new">
            +
          </button>
          <button className="dashboard-icon-btn" aria-label="View notifications">
            ○
          </button>
          <a href="/profile" className="dashboard-avatar-btn" aria-label="Go to profile">
            AS
          </a>
        </div>
      </header>

      <section className="dashboard-layout">
        <aside className="dashboard-col dashboard-col-left">
          <div className="dashboard-side-head">
            <h3>Top repositories</h3>
            <button type="button">New</button>
          </div>

          <input className="dashboard-side-search" type="text" placeholder="Find a repository..." />

          <ul className="dashboard-repo-list">
            <li className="dashboard-repo-item">
              <span className="repo-dot" />
              <a href="#">alexsterling/quantum-ui</a>
            </li>
            <li className="dashboard-repo-item">
              <span className="repo-dot" />
              <a href="#">alexsterling/core-engine</a>
            </li>
            <li className="dashboard-repo-item">
              <span className="repo-dot" />
              <a href="#">alexsterling/serverless-auth</a>
            </li>
            <li className="dashboard-repo-item">
              <span className="repo-dot" />
              <a href="#">alexsterling/docs-portal</a>
            </li>
          </ul>

          <a className="dashboard-side-link" href="#">
            Show more
          </a>

          <div className="dashboard-side-block">
            <h4>Recent activity</h4>
            <p>When you take actions across CodeHub, we’ll provide links to that activity here.</p>
          </div>
        </aside>

        <div className="dashboard-col dashboard-col-main">
          <div className="dashboard-feed-header">
            <div className="dashboard-feed-tabs">
              <button className="dashboard-tab dashboard-tab-active" type="button">For you</button>
              <button className="dashboard-tab" type="button">Following</button>
            </div>
            <a href="#" className="dashboard-feedback">Send feedback</a>
          </div>

          <article className="dashboard-feed-card">
            <p className="dashboard-feed-meta">
              <strong>alex_dev</strong> pushed 4 commits to <a href="#">alexsterling/core-engine</a>
              <span>2 hours ago</span>
            </p>
            <div className="dashboard-commit-box">
              <p><span className="dashboard-commit-id">7f2a1c4</span>feat: implement new caching layer for better cache hit rate</p>
              <p><span className="dashboard-commit-id">9d3b5e1</span>fix: memory leak in connection pooler</p>
              <p><span className="dashboard-commit-id">31fe9ba</span>refactor: streamline request handler pipeline</p>
            </div>
          </article>

          <article className="dashboard-feed-card">
            <p className="dashboard-feed-meta">
              <strong>sarah_codes</strong> opened an issue in <a href="#">alexsterling/ui-components</a>
              <span>5 hours ago</span>
            </p>
            <h4 className="dashboard-issue-title">Critical: Sidebar collapses on mobile unexpectedly</h4>
            <p className="dashboard-feed-description">
              The navigation sidebar should remain visible when the user taps toggle on mobile, but
              it currently collapses after a short delay.
            </p>
            <div className="dashboard-labels">
              <span className="label label-bug">bug</span>
              <span className="label label-priority">high priority</span>
            </div>
          </article>

          <article className="dashboard-feed-card">
            <p className="dashboard-feed-meta">
              <strong>mike_devops</strong> released <a href="#">v2.4.0</a> in <a href="#">alexsterling/api-gateway</a>
              <span>8 hours ago</span>
            </p>
            <p className="dashboard-feed-description">Verified release build with 4 assets uploaded.</p>
          </article>
        </div>

        <aside className="dashboard-col dashboard-col-right">
          <div className="dashboard-card dashboard-right-card">
            <h3 className="dashboard-card-title">Explore repositories</h3>

            <div className="dashboard-explore-item">
              <a href="#">react-query-hooks</a>
              <p>Custom hooks for managing React Query state effectively.</p>
            </div>

            <div className="dashboard-explore-item">
              <a href="#">rust-wasm-canvas</a>
              <p>High-performance canvas rendering using Rust and WebAssembly.</p>
            </div>
          </div>

          <div className="dashboard-card dashboard-right-card">
            <h3 className="dashboard-card-title">Latest changes</h3>
            <ul className="dashboard-changelog">
              <li><strong>Yesterday</strong> · Universal Search is now in Public Beta</li>
              <li><strong>3 days ago</strong> · New security rules for Repository Secrets</li>
              <li><strong>Last week</strong> · Codespaces performance improvements</li>
            </ul>
          </div>

          <div className="dashboard-footer-links">
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Docs</a>
            <a href="#">Privacy</a>
            <a href="/login">Sign out</a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Dashboard;
