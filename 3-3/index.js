// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string. For example:

// my solution:
function domainName(url) {
  //your code here
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  if (url.indexOf("www.") > -1) {
    hostname = url.split("www.")[1];
  }
  //find & remove port number
  hostname = hostname.split(":")[0];
  //find & remove "?"
  hostname = hostname.split("?")[0];

  hostname = hostname.split(".")[0];

  return hostname;
}

// recommended solution:
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}
