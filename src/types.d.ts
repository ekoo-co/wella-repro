declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ekoo-widget": {
        "data-ekoo"?: string;
        "data-ekoo-product-id"?: string;
        "data-ekoo-locale"?: string;
        "data-ekoo-type"?: string;
      };
    }
  }
}

export {};
