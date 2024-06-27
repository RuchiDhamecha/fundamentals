// AND, OR, NOT

// AND &&
// AND tends towards false
// only true when both are true
true  && true  // T
true  && false // F
false && true  // F
false && false // F

// OR ||
// OR tends towards true
// only false when both are false
true  || true  // T
true  || false // T
false || true  // T
false || false // F

// NOT ! -> negation
!true;  // false
!false; // true

// TRUTHY & FALSY
// "", 0, NaN, false, undefined, null
// ANYTHING THAT IS NOT FALSY IS TRUTHY


"" && true || [] && false && 80 || (true || false)
"" && true || [] && false && 80 || true
  false || [] && false && 80 || true
      true  && false && 80 || true
         false  && 80 || true 
             false || true
                 true


const shouldAssign = false;

// AND -> last truthy value is assigned
// IF first is true then assign the second value
// IF first is falsy that(false) is assigned
let name = shouldAssign && "Janhavi";
name = shouldAssign && ""

// OR -> first truthy is assigned
name = "" || "Janhavi";