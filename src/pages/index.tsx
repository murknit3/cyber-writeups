import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const cards = [
  {
    title: 'Blue Team Investigations',
    text: 'Splunk, Sysmon, Windows telemetry, alert triage and incident investigation write-ups.',
    to: '/writeups/category/blue-team',
  },
  {
    title: 'DFIR',
    text: 'Evidence-driven investigations across endpoints, network traffic and Windows event logs.',
    to: '/writeups/dfir',
  },
  {
    title: 'Offensive Security',
    text: 'Web, Active Directory and lab write-ups focused on methodology rather than flags.',
    to: '/writeups/offensive-security',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout title="Cybersecurity Write-Ups" description="Detection, DFIR, threat hunting and offensive security write-ups.">
      <main>
        <section className="hero-security">
          <div className="hero-shell">
            <div className="eyebrow">security research / field notes</div>
            <h1 className="hero-title">Investigate.<br/>Understand.<br/>Document.</h1>
            <p className="hero-copy">
              Practical cybersecurity write-ups documenting the reasoning behind investigations — from Splunk and Windows telemetry to network forensics and offensive security labs.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary button--lg" to="/writeups/intro">Explore write-ups</Link>
              <Link className="button button--secondary button--lg" href="https://github.com/murknit3">GitHub</Link>
            </div>
          </div>
        </section>

        <section className="security-grid">
          <div className="section-kicker">Areas</div>
          <h2>What you'll find here</h2>
          <div className="card-grid">
            {cards.map((card) => (
              <Link key={card.title} className="security-card" to={card.to}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
