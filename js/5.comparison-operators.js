// ==, !=, <, <=, >, >=
// ===, !==

// == | DOES NOT COMPARE DATATYPES
5 == 5; // T
5 == 6; // F
6 == 5; // F
5 == true; // F
0 == true; // F
0 == false; // T
"" == true; // F
"a" == true; // F
5 == "5"; // T
"true" == true; // F
true == "true"; // F

5 === "5"; // F
true === "true"; // F

"five" == 5; // F


5 != 5; // F
5 != 6; // T
6 != 5; // T
5 != true; // T
0 != true; // T
0 != false; // F
"" != true; // T
"a" != true; // T
5 != "5"; // F
"true" != true; // T
true != "true"; // T



"a" > "b"; // F
"a" > 0; // F
"b" > 5; // F
5 > 5; // F
5 > "5"; // F
5 > 4; // T
5 > true; // T
5 > false; // T
1 > true; // F
"b" > "a"; // T
"A" > "a"; 

"a" >= "b"; // F
"a" >= 0; // F
"b" >= 5; // F
5 >= 5; // T
5 >= "5"; // T
5 >= 4; // T
5 >= true; // T
5 >= false; // T
1 >= true; // T
"b" >= "a"; // T
"A" >= "a"; // F



"a" < "b"; // T
"a" < 0; // F
"b" < 5; // F
5 < 5; // F
5 < "5"; // F
5 < 4; // F
5 < true; // F
5 < false; // F
1 < true; // F
"b" < "a"; // F
"A" < "a"; // T

"a" <= "b"; // T
"a" <= 0; // F
"b" <= 5; // F
5 <= 5; // T
5 <= "5"; // T
5 <= 4; // F
5 <= true; // F
5 <= false; // F
1 <= true; // T
"b" <= "a"; // F
"A" <= "a"; // T



0 == 0; // T
0 == false; // T
"" == []; // T
[] == []; // F
"" === []; // F
[] == {}; // F
[] === {}; // F
[] === []; // F
{} == ""; // T