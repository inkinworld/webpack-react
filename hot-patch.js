export default (mod) => {
  // for hot reloading
  if (mod.hot) {
    mod.hot.accept();
  }

  if (mod.hot) {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      link.href = nextStyleHref;
    });
  }
};

