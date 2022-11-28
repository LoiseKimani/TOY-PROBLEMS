//Changed grosspay from string to number
let gPay=parseInt("grosspay",55)
//declares a function called gross pay
 function grossPay() {
    //The below are declared with the let function to be used in later calculations
    let paye;
    let nssf = 200;
    let netSalary;
    let nhif;
    let extraTaxpay;
    let deductions;
//ways to calculate various paye cash using various salary ranges
    if(gPay <24001){
        paye = (gPay*0.1)
    }else if(gPay < 32334) {
        paye = (extraTaxpay = gPay-24000)
            paye=(extraTaxpay*0.25)
    }else{
        paye=4483
             (extraTaxpay=gPay-32333)
                paye=(extraTaxpay*0.30)
    }
    }
//used to give out a specific number of nhif cash if a certain range is met

         if ( gPay< 6000){
            nhif = 150;
        }else if(gPay < 8000){
            nhif = 300;
        }else if(gPay < 12000){
            nhif = 400;
        }else if(gPay < 15000){
            nhif = 500;
        }else if(gPay < 20000){
            nhif = 600;
        }else if(gPay < 25000){
            nhif = 700;
        }else if(gPay < 30000){
            nhif = 850;
        }else if(gPay < 35000){
            nhif = 900;
        }else if(gPay < 40000){
            nhif = 950;
        }else if(gPay< 45000){
            nhif = 1000;
        }else if(gPay< 50000){
            nhif = 1,100;
        }else if(gPay < 60000){
            nhif = 1,200;
        }else if(gPay < 70000){
            nhif = 1,300;
        }else if(gPay < 80000){
            nhif = 1,400;
        }else if(gPay < 90000){
            nhif = 1,500;
        }else if(gPay < 100000){
            nhif = 1,600;
        }else gPay > 100000
            nhif = 1,700;

//various formulas used to calculate different things like deductions and net salary
totalDeducts = nhif +paye + nssf

netSalary = gPay - totalDeducts

//used to show various values if called upon
    console.log("Your gross pay:" +$[grossPay])

    console.log("Your nssf deductions:" +$[nssf])

   console.log("Your nhif deduction in Ksh:" +$[nhif])

    console.log("Your total deductions in Ksh:" +$[totalDeducts])
    
   console.log("Your netSalary in Ksh:" +$[netSalary])

//used to get a value in the visual studio output

console.log(gPay())




