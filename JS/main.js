//              ---- GLOBAL_LOCAL_SCOPE_VARIABLES ----
//              ---- GLOBAL_VARIABLES ----
var x = 25;
 var sum1 = 25 + x;
 var sum2 = x + 125;

function globalVariableToAddNumbers_1()
{
    document.write( "25 + " + x + " = " + sum1 );
}
function globalVariableToAddNumbers_2()
{
    document.write( "125 + " + x + " = " + sum2 );
}

globalVariableToAddNumbers_1();
globalVariableToAddNumbers_2();



//              ---- LOCAL_VARIABLES ----
function localVariableToAddNumbers_1()
{
    let x = 25;
    let sum1 = 25 + x;
    document.write( "25 + " + x + " = " + sum1 );
}
function localVariableToAddNumbers_2()
{
    let sum2 = x + 125;
    document.write( "125 + " + x + " = " + sum2 );
}

localVariableToAddNumbers_1();
localVariableToAddNumbers_2();



//              ---- CONSOLE_EXECUTE_DEBUG_VARIABLES ----
function consoleDebugExecute_1()
{
    let x = 25;
    let sum1 = 25 + x;
    console.log( x + "25 " + " = " + sum1 );
}
function consoleDebugExecute_2()
{
    let sum2 = x + 125;
    console.log( "125 + " + x + " = " + sum2 );
}
consoleDebugExecute_1();
consoleDebugExecute_2( );
//              ---- END_EXECUTE_DEBUG_VARIABLES ----



//              ---- CONDITIONAL_BRANCHING_(IF)_STATEMENTS ----
function getDate()
{
    if ( new Date().getHours() < 18 )
    {
        // document.getElementById( "greeting" ).innerHTML = 
        document.getElementById( "greeting" ).innerHTML =
        ( "Today is: " + Date() + "<br>How are you doing today?" );
    }
}
//              ---- END_CONDITIONAL_BRANCHING_(IF)_STATEMENTS ----





//              ---- CONDITIONAL_BRANCHING_(IF_ELSE)_STATEMENTS ----
//              ---- VOTING_AGE_COMPARISON ----
function legalVotingAge()
{
    /**                 ---- LET_VARIABLES ----
     * Declare "let" variables: These are block-scoped variables. These
     * variables can only Exist (to be used) within this block/function.
    */              
    let userAge;
    let votingAge = document.getElementById("age").value;
 
    /**
     * instruct the user to enter his/her age as an "int".
     * If, users data is not a number. Display this message.
     */
     if ( isNaN( votingAge ) )
     {
         userAge = "Please Use Whole Numbers! ";
     }
     else
     {
        // Assign the user's "age" value to the variable "age". 
        //  age = document.getElementById( "age" ).value;
         /**
          * If, voteableAge, is under 18. Output String following 
          * the "question mark (?) char", is displayed. Else, 
          * output String following the "colon (:) char" is displayed
          */
         userAge =  ( votingAge < 18 ) ? "Too young. " : "Old enough. ";
     }
 
     document.getElementById( "ageId" ).innerHTML = userAge + "To Vote!";
} 
//              ---- CONDITIONAL_BRANCHING_(IF_ELSE)_STATEMENTS ----
//              ---- VOTING_AGE_COMPARISON ----



//              ---- CONDITIONAL_BRANCHING_(IF_ELSE IF_ELSE)_STATEMENTS ----
//              ---- TIME_OF_DAY ----
function getTiemOfDay()
{
    var time = new Date().getHours();
    var reply;

    // Conditional statement
    if ( time > 0 == time < 12 )
    {
        reply = "Good Morning!";
    }
    else if ( time >= 12 == time < 18 )
    {
        reply = "Good Afternoon!";
    }
    else
    {
        reply = "Good Evening!";
    }

    document.getElementById( "time-of-day" ).innerHTML = reply;
}
//              ---- END_CONDITIONAL_BRANCHING_(IF_ELSE IF_ELSE)_STATEMENTS ----
//              ---- END_TIME_OF_DAY ----





//              ---- CONDITIONAL_BRANCHING_(IF_ELSE IF_ELSE)_STATEMENTS ----
//              ---- TIME_OF_DAY ----
/**
 * The intention of this program is to show the current time
 * and reply with adequate response according to time of day
 */
function getTiemOfDay()
{
    var time = new Date().getTime();
    var reply;

    // Conditional statement
    if ( time > 0 == time < 12 )
    {
        reply = "Good Morning!";
    }
    else if ( time >= 12 == time < 18 )
    {
        reply = "Good Afternoon!";
    }
    else
    {
        reply = "Good Evening!";
    }

    document.getElementById( "time-of-day" ).innerHTML = 
    ( "It is: " + time + reply );
}
//              ---- END_CONDITIONAL_BRANCHING_(IF_ELSE IF_ELSE)_STATEMENTS ----
//              ---- END_TIME_OF_DAY ----

