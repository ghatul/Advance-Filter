import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../model/employee";
import {CardFilter} from "../../model/card-filter";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empData: Employee[] = new Array(0);
  fiterObj = new CardFilter();
  cardObj = {'count': 0};

  ngOnInit() {
    var data = new Data();
    this.empData = data.getData();
  }

  filter(value: CardFilter) {
    this.fiterObj = value;
  }

}

export class Data {
  getData() {
    const _array: Employee[] = [
      {
        'firstName': 'Raj',
        'lastName': 'AAAA',
        'age': 47,
        'salaryRange': '5-7',
        'experienceRange': '3-5',
        'education': 'Graduate',
        'city': 'Pune',
        'companyName': 'google',
        'movie': ['Hera Pheri', 'welcome', 'awara pagal diwana']
      },
      {
        'firstName': 'Prem',
        'lastName': 'BBBBB',
        'age': 49,
        'salaryRange': '7-8',
        'experienceRange': '4-8',
        'education': 'Under Graduate',
        'city': 'Newyork',
        'companyName': 'Microsoft',
        'movie': ['Don', 'Dilwale']
      },
      {
        'firstName': 'Tom',
        'lastName': 'CCCCC',
        'age': 50,
        'salaryRange': '10-11',
        'experienceRange': '9-12',
        'education': 'Post Graduate',
        'city': 'Mumbai',
        'companyName': 'Yahoo',
        'movie': ['ishk', 'gajani']
      },
      {
        'firstName': 'Jerrry',
        'lastName': 'DDDDDDD',
        'age': 52,
        'salaryRange': '1-2',
        'experienceRange': '10-19',
        'education': 'Graduate',
        'city': 'Delhi',
        'companyName': 'TCS',
        'movie': ['ishk', '3 idiots']
      },
      {
        'firstName': 'Joy',
        'lastName': 'EEEEEEE',
        'age': 30,
        'salaryRange': '4-5',
        'experienceRange': '8-9',
        'education': 'Under Graduate',
        'city': 'pune',
        'companyName': 'yahoo',
        'movie': ['rockstar', 'barfi']
      },
      {
        'firstName': 'Chandler',
        'lastName': 'FFFFFF',
        'age': 51,
        'salaryRange': '15-17',
        'experienceRange': '13-15',
        'education': 'Graduate',
        'city': 'London',
        'companyName': 'Google',
        'movie': ['MI', 'jon qarter']
      },
      {
        'firstName': 'Rechael',
        'lastName': 'GGGGGGG',
        'age': 28,
        'salaryRange': '4-7',
        'experienceRange': '4-5',
        'education': 'Graduate',
        'city': 'kolkata',
        'companyName': 'IBM',
        'movie': ['RamLila', 'bajirao mastani']
      },
      {
        'firstName': 'Monica',
        'lastName': 'HHHHHH',
        'age': 28,
        'salaryRange': '10-10',
        'experienceRange': '1-2',
        'education': 'Graduate',
        'city': 'parbhani',
        'companyName': 'IBM',
        'movie': ['Vivaha', 'awara pagal diwana']
      },
      {
        'firstName': 'Phibi',
        'lastName': 'IIIIII',
        'age': 55,
        'salaryRange': '5-7',
        'experienceRange': '3-5',
        'education': 'Graduate',
        'city': 'Nashik',
        'companyName': 'Amazon',
        'movie': ['Welcome']
      },
      {
        'firstName': 'Ross',
        'lastName': 'JJJJJ',
        'age': 44,
        'salaryRange': '2-3',
        'experienceRange': '4-4',
        'education': 'Under Graduate',
        'city': 'Mumbai',
        'companyName': 'google',
        'movie': ['Welcome', '3 idiots']
      },
      {
        'firstName': 'Chintu',
        'lastName': 'KKKKK',
        'age': 60,
        'salaryRange': '20-21',
        'experienceRange': '13-25',
        'education': 'Graduate',
        'city': 'pune',
        'companyName': 'google',
        'movie': ['Don']
      },
      {
        'firstName': 'krishna',
        'lastName': 'Ghatul',
        'age': 25,
        'salaryRange': '5-7',
        'experienceRange': '3-5',
        'education': 'Graduate',
        'city': 'pune',
        'companyName': 'google',
        'movie': ['dilwale']
      }
    ];
    return _array;
  }
}
