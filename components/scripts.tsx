import Script from "next/script";

export default function Scripts() {
    const domain = "scripts.howbrowserswork.com";

    return (
        <Script
            id="pianjs"
            src={`https://${domain}/static/files/pa.js`}
            data-hit-endpoint={`https://${domain}/p/pv`}
            data-event-endpoint={`https://${domain}/p/e`}
            data-session-endpoint={`https://${domain}/p/s`}
            strategy="afterInteractive"
        />
    );
}
