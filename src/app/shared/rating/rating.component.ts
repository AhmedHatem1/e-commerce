import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  starWidth: number;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.notify.emit(this.rating);
  }
  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }
}
