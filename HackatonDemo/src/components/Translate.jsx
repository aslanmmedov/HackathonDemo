import { useEffect } from "react";



const TranslateWidget = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.defer = true;


    window.gtranslateSettings =
    {"default_language":"en","languages":["az","tr","en","fr","it","es"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","flag_style":"3d"}

    document.body.appendChild(script);


    const container = document.createElement('div');
    container.className = 'gtranslate_wrapper';
    document.body.appendChild(container);


    return () => {
      document.body.removeChild(script);
      if (document.querySelector('.gtranslate_wrapper')) {
        document.body.removeChild(document.querySelector('.gtranslate_wrapper'));
      }
    };
  }, []);

  return null;
};

export default TranslateWidget;