import { createElement } from 'react';

// Run before the main ___gatsby element is added
const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    }
  } catch (e) {}
})();
`

const BodyAttributes = {
  className: "bg-slate-100 dark:bg-neutral-800",
}

export const onRenderBody = ({ setPreBodyComponents, setBodyAttributes }) => {
  const script = createElement('script', {
    key: 'applyDarkModeScript',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })

  setBodyAttributes(BodyAttributes)
  setPreBodyComponents([script])
};

