"use client";

import { useEffect, useRef } from "react";

export default function EkooWidget({ productId }: { productId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const websiteId = "05da8b3d-f87f-4342-ab5e-ca92d305cce2";

  useEffect(() => {
    if (!hostRef.current) return;

    hostRef.current.innerHTML = `<ekoo-widget data-ekoo=${websiteId} data-ekoo-product-id=${productId} data-ekoo-locale="fr" data-ekoo-type="standalone"></ekoo-widget>`;

    return () => {
      if (hostRef?.current?.innerHTML) {
        hostRef.current.innerHTML = "";
      }
    };
  }, [productId]);

  return <div id="stable-ekoo-container" ref={hostRef}></div>;
}
