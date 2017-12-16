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
        'firstName': 'Akshya',
        'lastName': 'kumar',
        'age': 47,
        'salaryRange': '5-7',
        'experienceRange': '3-5',
        'education': 'Graduate',
        'city': 'Pune',
        'companyName': 'google',
        'movie': ['Hera Pheri', 'welcome', 'awara pagal diwana']
      },
      {
        'firstName': 'Sharukh',
        'lastName': 'khan',
        'age': 49,
        'salaryRange': '7-8',
        'experienceRange': '4-8',
        'education': 'Under Graduate',
        'city': 'Newyork',
        'companyName': 'Microsoft',
        'movie': ['Don', 'Dilwale']
      },
      {
        'firstName': 'Salman',
        'lastName': 'khan',
        'age': 50,
        'salaryRange': '10-11',
        'experienceRange': '9-12',
        'education': 'Post Graduate',
        'city': 'Mumbai',
        'companyName': 'Yahoo',
        'movie': ['ishk', 'gajani']
      },
      {
        'firstName': 'Amir',
        'lastName': 'khan',
        'age': 52,
        'salaryRange': '1-2',
        'experienceRange': '10-19',
        'education': 'Graduate',
        'city': 'Delhi',
        'companyName': 'TCS',
        'movie': ['ishk', '3 idiots']
      },
      {
        'firstName': 'Ranbir',
        'lastName': 'kapoor',
        'age': 30,
        'salaryRange': '4-5',
        'experienceRange': '8-9',
        'education': 'Under Graduate',
        'city': 'pune',
        'companyName': 'yahoo',
        'movie': ['rockstar', 'barfi']
      },
      {
        'firstName': 'Tom',
        'lastName': 'Cruz',
        'age': 51,
        'salaryRange': '15-17',
        'experienceRange': '13-15',
        'education': 'Graduate',
        'city': 'London',
        'companyName': 'Google',
        'movie': ['MI', 'jon qarter']
      },
      {
        'firstName': 'Ranvir',
        'lastName': 'Singh',
        'age': 28,
        'salaryRange': '4-7',
        'experienceRange': '4-5',
        'education': 'Graduate',
        'city': 'kolkata',
        'companyName': 'IBM',
        'movie': ['RamLila', 'bajirao mastani']
      },
      {
        'firstName': 'Sahid',
        'lastName': 'kapoor',
        'age': 28,
        'salaryRange': '10-10',
        'experienceRange': '1-2',
        'education': 'Graduate',
        'city': 'parbhani',
        'companyName': 'IBM',
        'movie': ['Vivaha', 'awara pagal diwana']
      },
      {
        'firstName': 'Nana',
        'lastName': 'patekar',
        'age': 55,
        'salaryRange': '5-7',
        'experienceRange': '3-5',
        'education': 'Graduate',
        'city': 'Nashik',
        'companyName': 'Amazon',
        'movie': ['Welcome']
      },
      {
        'firstName': 'R',
        'lastName': 'madhavan',
        'age': 44,
        'salaryRange': '2-3',
        'experienceRange': '4-4',
        'education': 'Under Graduate',
        'city': 'Mumbai',
        'companyName': 'google',
        'movie': ['Welcome', '3 idiots']
      },
      {
        'firstName': 'amitabh',
        'lastName': 'bachhan',
        'age': 60,
        'salaryRange': '20-21',
        'experienceRange': '13-25',
        'education': 'Graduate',
        'city': 'pune',
        'companyName': 'google',
        'movie': ['Don']
      },
      {
        'firstName': 'dipika',
        'lastName': 'padukon',
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
