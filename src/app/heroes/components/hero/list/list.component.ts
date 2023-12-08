import { Component } from "@angular/core";


@Component({
    selector: "app-heroes-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})

export class ListComponent {
    public heroNames: string[] = ["Iron Man", "Thor", "Captain America"];
    public deleteHero?: string;
    public removeLastHero(): void {
        this.deleteHero = this.heroNames.pop();
    }
}