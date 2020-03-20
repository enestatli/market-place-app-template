import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer-message",
  templateUrl: "./footer-message.component.html",
  styleUrls: ["./footer-message.component.scss"]
})
export class FooterMessageComponent implements OnInit {
  @Input("message") message: string;
  constructor() {}

  ngOnInit() {
    console.log("input message", this.message);
  }
}
