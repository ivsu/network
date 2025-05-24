function FindProxyForURL(url, host) {

    const parts = [
      "youtube.com", "ytimg.com", "youtu.be"
    ];

    let incl = parts.some(v => url.includes(v));
    console.log("included: " + incl);

    if (parts.some(v => url.includes(v))) {
      return "HTTP 127.0.0.1:1087; SOCKS5 127.0.0.1:1086; PROXY 127.0.0.1:1089; DIRECT";
    }

    return "DIRECT";
}
