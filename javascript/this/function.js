function data() {
  this.name = 1;
  this.show = function () {
    function d() {
      console.log(this);
    }

    d();
  };
}

const test = new data();
test.show();
