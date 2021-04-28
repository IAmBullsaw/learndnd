import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharactersheetComponent } from './charactersheet/charactersheet.component';
import { AdventureComponent } from './adventure/adventure.component';
import { AboutComponent } from './about/about.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharactersheetComponent,
    AdventureComponent,
    AboutComponent,
    StoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
