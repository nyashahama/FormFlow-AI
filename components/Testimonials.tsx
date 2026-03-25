export default function Testimonials() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="testi-grid reveal">
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-q">
            "Filed our business permits in 4 minutes. I used to spend an entire
            afternoon on this. The audit log alone is worth the subscription for
            our accountant."
          </p>
          <div className="testi-author">
            <div
              className="author-ava"
              style={{
                background: "rgba(200,241,53,0.1)",
                color: "var(--lime)",
              }}
            >
              MR
            </div>
            <div>
              <div className="author-n">Maya R.</div>
              <div className="author-sub">Founder, Beacon Studio</div>
            </div>
          </div>
        </div>
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-q">
            "We process 80+ tax filings a month for clients. FormFlow cut our
            per-filing time from 45 minutes to under 6. It's not even close."
          </p>
          <div className="testi-author">
            <div
              className="author-ava"
              style={{
                background: "rgba(0,229,200,0.1)",
                color: "var(--cyan)",
              }}
            >
              DK
            </div>
            <div>
              <div className="author-n">David K.</div>
              <div className="author-sub">CPA, Kessler & Partners</div>
            </div>
          </div>
        </div>
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-q">
            "Our visa application was rejected twice before FormFlow. It caught
            a field inconsistency we'd never have spotted. Approved on the next
            attempt."
          </p>
          <div className="testi-author">
            <div
              className="author-ava"
              style={{ background: "rgba(150,100,255,0.1)", color: "#b090ff" }}
            >
              SL
            </div>
            <div>
              <div className="author-n">Sofia L.</div>
              <div className="author-sub">Operations Lead, Nomad Works</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
