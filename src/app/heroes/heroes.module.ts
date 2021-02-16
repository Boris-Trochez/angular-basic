import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule 
    ]
})

//commonModule - We need it if we are using directives as *ngFor or *ngIF

export class HerosModule {}