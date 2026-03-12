import { GoogleTagManager } from '@next/third-parties/google';
import React, { useEffect, useState } from 'react';

const CONSENT_KEY = 'kyl-cookie-consent';

export default function ConsentGTM() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEnabled(consent === 'all');
    } catch {
      setEnabled(false);
    }
  }, []);

  if (!enabled) return null;
  return <GoogleTagManager gtmId="GTM-PKFZKX2F" />;
}
