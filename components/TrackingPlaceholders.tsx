const trackingConfig = {
  googleTagId: process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "",
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || ""
};

export function TrackingPlaceholders() {
  return (
    <>
      <script
        id="veytra-tracking-config"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...trackingConfig,
            note:
              "Google Consent Mode v2 startet standardmäßig abgelehnt. Google Tracking wird erst nach Einwilligung aktualisiert und geladen."
          }).replace(/</g, "\\u003c")
        }}
      />
      <script
        id="veytra-google-consent-default"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            window.gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
            window.gtag('set', 'ads_data_redaction', true);
          `
        }}
      />
    </>
  );
}
