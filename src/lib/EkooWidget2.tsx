"use client";

import { useEffect, useRef } from "react";

interface EkooWidgetProps {
  productId: string;
  language?: string;
}

const WEBSITE_ID = "05da8b3d-f87f-4342-ab5e-ca92d305cce2";

export function EkooWidget({ productId, language = "fr" }: EkooWidgetProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hostRef.current) return;

    if (!widgetRef.current) {
      const el = document.createElement("ekoo-widget") as HTMLElement & {
        dataset: DOMStringMap;
      };

      el.dataset.ekoo = WEBSITE_ID;
      el.dataset.ekooType = "standalone";

      hostRef.current.appendChild(el);
      widgetRef.current = el;
    }

    const widget = widgetRef.current;

    widget.dataset.ekooProductId = productId;
    widget.dataset.ekooLocale = language;

  }, [productId, language]);

  useEffect(() => {
    return () => {
      const widget = widgetRef.current;
      if (widget && widget.parentNode) {
        widget.parentNode.removeChild(widget);
      }
      widgetRef.current = null;
    };
  }, []);

  return <div ref={hostRef} suppressHydrationWarning />;
}
