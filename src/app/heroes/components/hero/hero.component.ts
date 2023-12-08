import { Component } from "@angular/core";

@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"]
})

export class HeroComponent {
    public name: string = "Iron Man";
    public age: number = 45;

    get capitalizedName(): string {
        return 'Hola mundo';
    }

    getHeroDescription(): string {
        return `${this.name} - ${this.age}`
    }

    changeHero(): void {
        this.name = "Thor";
    }
    changeAge(): void {
        this.age =  60;
    }

    resetForm(): void {
        this.name = "Iron Man";
        this.age = 45;
    }
}