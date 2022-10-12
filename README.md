# Application Flow

This is a simple app with few buttons and requirements, we will have no server and no data to serve to the user.
We are simply going to focus on the bare minimum functionalities: addition, subtraction, multiplication, division.
Then display the result, and use it for the next operation.

---

## Requirements

1. **Create the layout:**
   - input at the top that acts as a display for our Calculator
   - 4 rows with 3 digits and 1 function button (except the last one is going to have 3 function bts and 1 digit)
2. **Connect JS to the DOM:**
   - find a way to differentiate the click on digits from the function buttons
3. **Application flow:**
   - insert the first operand
   - press the operation button
   - insert the second operand
   - calculate the result
   - use the result as the first operand of the next operation
4. **Software design:**
   - at the click of the first digit, insert it in the display
   - save the first digit in memory for later usage
   - at the click of a function button we need to save that information as well
   - reset the display and allow another number to be inserted
   - when the "=" gets pressed, we need to calculate the result and display it in the display of the calculator
   - allow the user to use it as the first operand of the next operation
