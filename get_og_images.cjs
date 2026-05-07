const https = require('https');
const http = require('http');

const urls = [
  'https://thenationonlineng.net/group-lauds-fg-for-reforms-economic-gains/',
  'https://pointblanknews.com/pbn/exclusive/2027-group-backs-tinubus-re-election-rejects-one-term-presidency-calls/',
  'https://guardian.ng/news/2027-pro-tinubu-group-faults-single-4-year-term/',
  'https://www.vanguardngr.com/2026/05/group-backs-tinubus-2027-re-election-rejects-one-term-agenda/',
  'https://naijablitznews.com/2026/05/03/group-rallies-behind-tinubu-pushes-continuity-mandate-for-2027/',
  'https://thesun.ng/2027-tinubu-not-afraid-of-contest-rhgi/',
  'https://von.gov.ng/group-commends-president-tinubus-economic-strides/'
];

function fetchOG(urlStr) {
  return new Promise((resolve) => {
    const lib = urlStr.startsWith('https') ? https : http;
    const req = lib.get(urlStr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
         fetchOG(res.headers.location).then(resolve);
         return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i) || 
                      data.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"/i);
        resolve({ url: urlStr, img: match ? match[1] : null });
      });
    });
    req.on('error', () => resolve({ url: urlStr, img: null }));
  });
}

Promise.all(urls.map(fetchOG)).then(res => {
  console.log(JSON.stringify(res, null, 2));
});
