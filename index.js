var x = 10; //feeded into memory heap
function A() {
  function B() {
    function C() {
      console.log(x);
    }
  }
  function D() {}
}
