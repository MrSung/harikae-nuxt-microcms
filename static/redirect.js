if (/^\?fbclid=/.test(location.search))
  location.replace(location.href.replace(/\?fbclid.+/, ''))
