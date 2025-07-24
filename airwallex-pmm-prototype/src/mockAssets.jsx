import React from 'react';

export default function MockAssets() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-6">
      <h1 className="text-3xl font-bold">Sample GTM Assets</h1>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📧 Email Snippet</h2>
        <p className="text-sm border rounded p-4 bg-gray-50">
          Subject: Stop losing revenue to failed checkouts<br/>
          Body: Failed payments shouldn't mean failed sales. With Airwallex Payment Rescue, you can recover up to 60% of lost conversions automatically.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📊 Slide Snippet</h2>
        <p className="text-sm border rounded p-4 bg-gray-50">
          Title: "Capture Every Sale – Even When Payments Fail"<br/>
          Subtitle: Seamless fallback logic for local methods<br/>
          Value Points: Real-time retry, smart routing, 60% rescue rate.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📋 Battlecard Highlight</h2>
        <p className="text-sm border rounded p-4 bg-gray-50">
          <strong>Airwallex vs Stripe:</strong><br/>
          ✔️ Wider local payment coverage<br/>
          ✔️ Built-in failure diagnostics<br/>
          ✔️ 1-click rescue logic<br/><br/>
          <strong>Airwallex vs Wise:</strong><br/>
          ✔️ B2B-first with platform scalability<br/>
          ✔️ Embedded FX margin optimization
        </p>
      </section>
    </div>
  );
}
