import {Pipe, PipeTransform} from "@angular/core";
import {Employee} from "../model/employee";
import {CardFilter} from "../model/card-filter";

@Pipe({name: 'cardfilter', pure: false})

export class EmpCardFilterPipe implements PipeTransform {


  transform(array: Array<Employee>, args: CardFilter, cardObj: any): Array<any> {
    if (array === null) {
      return null;
    }
    if (args.query) {
      var result: Employee[];
      result = array.filter(item => eval(args.query));
      cardObj.count = result.length;
      return result;
    }
    cardObj.count = array.length;
    return array;
  }
}
