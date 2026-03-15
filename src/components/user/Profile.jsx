import "./profile.css";

const Profile = () => {
	return (
		<main className="profile-page">
			<header className="profile-header">
				<div className="profile-header-inner">
					<div className="profile-brand">
						<div className="profile-brand-logo-wrap">
							<img src="/logov1.png" alt="CodeHub logo" className="profile-brand-logo" />
						</div>
						<h2 className="profile-brand-title">CodeHub</h2>
					</div>
					<a href="/dashboard" className="profile-link-primary">
						Go to Dashboard
					</a>
				</div>
			</header>

			<section className="profile-content">
				<div className="profile-main-row">
					<div className="profile-avatar-wrap">
						<img
							className="profile-avatar"
							src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500"
							alt="Profile"
						/>
					</div>
					<div className="profile-main-info">
						<div>
							<h1 className="profile-name">Majedul Islam</h1>
							<p className="profile-handle">@majedulislam</p>
						</div>
						<p className="profile-bio">
							Full-stack Software Engineer focused on building accessible, high-performance web applications.
						</p>
						<div className="profile-meta">
							<span className="profile-location">
								<span className="material-symbols-outlined profile-location-icon">location_on</span>
								San Francisco, CA
							</span>
							<a className="profile-link-primary" href="#">
								alexsterling.dev
							</a>
						</div>
					</div>
				</div>

				<div className="profile-tabs-wrap">
					<nav className="profile-tabs">
						<a className="profile-tab profile-tab-active" href="#">
							Overview
						</a>
						<a className="profile-tab" href="#">
							Repositories
						</a>
						<a className="profile-tab" href="#">
							Projects
						</a>
					</nav>
				</div>

				<div className="profile-repo-grid">
					<div className="profile-repo-card">
						<p className="profile-repo-title">quantum-ui</p>
						<p className="profile-repo-text">A high-performance design system component library for React and Next.js.</p>
					</div>
					<div className="profile-repo-card">
						<p className="profile-repo-title">serverless-auth</p>
						<p className="profile-repo-text">Complete authentication solution for serverless edge functions.</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Profile;
