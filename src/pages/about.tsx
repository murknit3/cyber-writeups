import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className="eyebrow">about</p>
            <h1>Cybersecurity notes built from hands-on work.</h1>
            <p>
              This site is my public knowledge base for blue-team investigations, DFIR, threat hunting and offensive-security labs. I focus on documenting not just the answer, but the investigation path: hypothesis, evidence, pivots and conclusion.
            </p>
            <p>
              Lab flags, credentials and unnecessary spoilers are intentionally omitted where they do not add learning value.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
