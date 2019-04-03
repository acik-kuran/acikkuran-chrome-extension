/* global chrome */
export const goToSearch = (e) => {
  if (e !== null && e.key === 'Enter') {
    let url = null;
    const q = e.target.value;
    const versePattern = /^(11[0-4]|10[0-9]|[1-9]?[0-9])[.:,;-_/* ](28[0-6]|2[0-7][0-9]|1?[0-9][0-9]|[1-9])$/;
    const surahPattern = /^(11[0-4]|10[0-9]|[1-9]?[0-9])$/;
    if (versePattern.test(q)) {
      const params = q.replace(/[.:,;-_/* ]/g, '/');
      url = `https://acikkuran.com/${params}`;
    } else if (surahPattern.test(q)) {
      url = `https://acikkuran.com/${q}`;
    } else {
      url = `https://www.google.com/search?q=${q}+site:acikkuran.com`;
    }
    if (url) chrome.tabs.create({ url });
  }
};

export const goToSurah = (e) => {
  if (e !== null) {
    const url = `https://acikkuran.com/${e.value}`;
    chrome.tabs.create({ url });
  }
};

export const goToRoot = (e) => {
  if (e !== null) {
    const url = `https://acikkuran.com/root/${e.value}`;
    chrome.tabs.create({ url });
  }
};

export const goToUrl = (url) => {
  chrome.tabs.create({ url });
};

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? '#3273dc' : '#dbdbdb', // default border color
    boxShadow: state.isFocused
      ? '0 0 0 0.125em rgba(50, 115, 220, 0.25)'
      : 'inset 0 1px 2px rgba(10, 10, 10, 0.1)' // no box-shadow
  })
};
