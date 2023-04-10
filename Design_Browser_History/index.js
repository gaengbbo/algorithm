/**
 * @param {string} homepage
 */

function Node (homepage) {
  this.url = homepage;
  this.next = '';
  this.prev = '';
}

var BrowserHistory = function(homepage) {
  this.head = new Node(homepage);
  this.current = this.head;
}
/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  let newNode = new Node(url);
  this.current.next = newNode;
  newNode.prev = this.current;
  if ( newNode !== this.current) {
      this.current = newNode;
  }

};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  while ( steps > 0 && this.current.prev ) {
      this.current = this.current.prev
      steps--;
  }          
  return this.current.url
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
      while ( steps > 0 && this.current.next ) {
      this.current = this.current.next
      steps--;
  }          
  return this.current.url 
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/