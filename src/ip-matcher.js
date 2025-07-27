function iptoNumber(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
  }
  function generaterangefromcidr(cidr){
    const [ip, prefix] = cidr.split('/');
    const ipNum = iptoNumber(ip);
    const mask = ~((1 << (32 - parseInt(prefix, 10))) - 1);
    const startIpNum = ipNum & mask;
    const endIpNum = startIpNum + (1 << (32 - parseInt(prefix, 10))) - 1;
    return {startIpNum, endIpNum}
}
  
  function matchIp(ip, ipRange) {
    const [startIp, endIp] = ipRange.split('-');
    const startIpNum = iptoNumber(startIp);
    const endIpNum = iptoNumber(endIp);
    const ipNum = iptoNumber(ip);
    return ipNum >= startIpNum && ipNum <= endIpNum;
  }
 

  
  // Export functions for browser usage
  window.iptoNumber = iptoNumber;
  window.matchIp = matchIp;
  window.generaterangefromcidr = generaterangefromcidr;

  console.log(generaterangefromcidr("1.1.1.1/24"));