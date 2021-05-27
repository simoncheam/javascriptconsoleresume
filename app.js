const fullName = "Simon Cheam";
var career = "Full Stack Engineer / Mechanical Engineer / Entrepreneur";
var description = "I like food";

var healthandfitness = "* Health and Fitness";
var travel = "* Traveling";
var cooking = "* Cooking and Eating";
var learning = "* Learning";

var exp1 = "* Mechanical Engineering - Project Lead for Product and Process Design/Execution.";
var exp2 = "* Business Owner - Developed and Launched E-commerce Product Brand on Shopify and Amazon.";
var exp3 = "* Sales - Sold over $10M in real estate financing during the 2020-2021 pandemic.";

var skill1 = "Copywriting";
var skill2 = "Biohacking";
var skill3 = "Marketing";
var skill4 = "Product Development";
var skill5 = "Project Engineering";

var jtitle1 = "Manufacturing Engineer ";
var jtitle2 = "Entrepreneur ";
var jtitle3 = "Loan Originator ";

var cName1 = "Power Systems Mfg., LLC.";
var cName2 = "Functional Formulas, LLC.";
var cName3 = "AmeriSave Mortgage Corporation";

var jDescript1 = "Developed Gas Turbine Product Design and Process for Manufacturing and Repair.";

var jDescript2 = "Developed and Launched Fitness Focused Performance Body-Care Product Line and Brand on Shopify and Amazon.";

var jDescript3 = "Sold over $10 Million in real estate financing during the 2020-2021 pandemic.";


///Boolean
var isCool = true;


/// set Vars: intro
var intro = {
    name: fullName,
    career: career,
    description: description
};

//// Print Intro
console.log("Name: " + fullName.toUpperCase());
console.log("Career: " +intro.career);
console.log("Description: " +intro.description);

console.log("                          ");

/// set Vars: my interests
var myInterests = {
    healthandfitness: healthandfitness,
    travel: travel,
    cooking: cooking,
    learning: learning
};

//// Print Interests
console.log("My Interests: ");
console.log(myInterests.healthandfitness);
console.log(myInterests.travel);
console.log(myInterests.cooking);
console.log(myInterests.learning);

console.log("                          ");

/// set Vars: myExp
var myExp = {
    exp1: exp1,
    exp2: exp2,
    exp3: exp3
};

//// Print My Experience
console.log("My Previous Experience: ");

displayPosition(jtitle1, cName1, jDescript1);
displayPosition(jtitle2, cName2, jDescript2);
displayPosition(jtitle3, cName3, jDescript3);

console.log("                          ");

/// set Vars: mySkills
var mySkills = {
    skill1: skill1,
    skill2: skill2,
    skill3: skill3
    
};

//// Print My Skills
console.log("My Skills: ");
displaySkill(true, skill1);
displaySkill(true, skill2);
displaySkill(true, skill3);
displaySkill(true, skill4);
displaySkill(false, skill5);


// Inside the function, you should print BAM: in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up. Use this function to display each entry in the "My Skills" section.


///function displaySkill()
  function displaySkill(coolnessFactor, skill) {
    if (coolnessFactor === true) {
      console.log('* BAM: ' + skill);
    } else {
      console.log("* " + skill);
    }
  }
  

/// function displayPosition()
 function displayPosition(jtitle, cName, jDescript){

        console.log( jtitle + "at " + cName +" - " + jDescript);

 }







