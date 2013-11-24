test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test( "deepEqual test", function() {
  var obj = { fo: "bar" };
  deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});