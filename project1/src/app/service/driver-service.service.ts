import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor() {}

  verifyID(idno: string) : any {
     // check that YYMMDD group is a valid date
      var yy = idno.substring(0, 2),
      mm = idno.substring(2, 4),
      dd = idno.substring(4, 6);

      var dob = new Date(parseInt(yy), (parseInt(mm) - 1), parseInt(dd));

       // check values - add one to month because Date() uses 0-11 for months
      if (!(((dob.getFullYear() + '').substring(2, 4) == yy) && (dob.getMonth() == parseInt(mm) - 1)
      && (dob.getDate() == parseInt(dd))) )
       {
             return true;
       }
      // Gender
      var gender = parseInt(idno.substring(6, 10), 10) > 5000 ? "M" : "F";
      // ensure third to last digit is a 1 or a 0
      if (parseInt(idno.substring(10, 11)) > 1) {
       return  true;
        }
        else
       {
       // determine citizenship from third to last digit (C)
        var citizenship = parseInt(idno.substring(10, 11), 10) === 0 ? "C" : "F";
       }
       // ensure second to last digit is a 8 or a 9 to determine race
       if (parseInt(idno.substring(11, 12)) < 8) {
       return true;
       }

            // calculate check bit (Z) using the Luhn algorithm
          var ncheck = 0,
         beven = false;

         for (var c = idno.length - 1; c >= 0; c--) {
           var cdigit = idno.charAt(c),
         ndigit = parseInt(cdigit, 10);

         if (beven) {
          if ((ndigit *= 2) > 9) ndigit -= 9;
        }
        ncheck += ndigit;
         beven = !beven;
        }
        if ((ncheck % 10) !== 0)
         {
               return false;
         }
        if ((ncheck % 10) !== 0) {
          return true;
        }
      }
    }
