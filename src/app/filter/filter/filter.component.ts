import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CardFilter} from "../../model/card-filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  age = ['20', '30', '40', '45', '50', '55'];
  education = ['Under Graduate', 'Graduate', 'Post Graduate'];
  cardFilter: CardFilter = new CardFilter();
  private queryList: string[] = new Array(0);
  qeryString = '';
  @Output() filterQryChange: EventEmitter<CardFilter> = new EventEmitter<CardFilter>();
  @Input() CardObj: any;
  constructor() {
  }

  ngOnInit() {
  }

  filterByEducation(event: any) {
    var value = event.target.value;
    if (value == '') {
      this.queryRemove('(args.education.indexOf(item.education) !== -1)');
    }
    if (event.target.checked) {
      this.cardFilter.education.push(value);
    } else {
      var index = this.cardFilter.education.indexOf(value);
      if (index > -1) {
        this.cardFilter.education.splice(index, 1);
      }
    }
    if (this.cardFilter.education.length) {
      this.queryPush('(args.education.indexOf(item.education) !== -1)');
    } else {
      this.queryRemove('(args.education.indexOf(item.education) !== -1)');
    }
    this.buildFilterQuery();
  }

  sortByAge(value: string) {
    if (value === '') {
      this.queryRemove('(((args.ageLimit && item.age))&&(args.ageLimit >= item.age))');
    } else if (value) {
      this.cardFilter.ageLimit = Number(value);
      this.queryPush('(((args.ageLimit && item.age))&&(args.ageLimit >= item.age))');
    }
    this.buildFilterQuery();
  }

  queryPush(query: string) {
    if (this.queryList.indexOf(query) == -1) {
      this.queryList.push(query);
    }
  }

  queryRemove(query: string) {
    var i = this.queryList.indexOf(query);
    if (i != -1) {
      this.queryList.splice(i, 1);
    }
  }

  buildFilterQuery() {
    var query = 'true';
    for (var i = 0; i < this.queryList.length; i++) {
      query = query + '&&' + this.queryList[i];
    }
    this.cardFilter.query = query;
    this.filterQryChange.emit(this.cardFilter);
  }
}
