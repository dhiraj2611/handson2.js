// Get Value
//You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.










const getValue = (a) => {
    if(a==="P"|| (a==="p")) {
      return ("PrepBytes");
    }
    else if ((a==="Z") || (a==="z")) {
      return ("Zenith");
    }
    else if ((a==="E") || (a==="e")) {
      return ("Expert Coder");
    }
    else if ((a==="D") || (a==="d")) {
      return ("Data Structure");
    }
    else {
      return ("Please Check the Entry")
    }
      
  };