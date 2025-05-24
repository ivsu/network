function FindProxyForURL(url, host) {

    const parts = [
      "youtube.com", "ytimg.com", "youtu.be"
    ];

    if (parts.some(v => url.includes(v))) {
      return "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";
    }

    return "DIRECT";
}
