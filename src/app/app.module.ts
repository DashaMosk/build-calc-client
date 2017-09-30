import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdRadioModule
  , MdInputModule, MdDialogModule, MdListModule, MdSelectModule, MdCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FacilityAddingComponent } from './components/facility-adding/facility-adding.component';
import { FacilityService } from './services/facility.service';
import {
  AccordionModule, SharedModule, DialogModule, InputMaskModule, GrowlModule, ButtonModule, MessagesModule
  , InputSwitchModule, AutoCompleteModule, TreeTableModule, DataTableModule, ToolbarModule
} from 'primeng/primeng';
import { FacilityHolderComponent } from './components/facility-holder/facility-holder.component';
import { FacilityPlayerComponent } from './components/facility-player/facility-player.component';
import { FacilityInfoComponent } from './components/facility-info/facility-info.component';
import { RoomHolderComponent } from './components/room-holder/room-holder.component';
import { RoomAddingComponent } from './components/room-adding/room-adding.component';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import { RoomPlayerComponent } from './components/room-player/room-player.component';
import { RoomAccordionComponent } from './components/room-accordion/room-accordion.component';
import { RoomService } from './services/room.service';
import { RouterModule } from '@angular/router';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { WallAddingComponent } from './components/wall-adding/wall-adding.component';
import { WallHolderComponent } from './components/wall-holder/wall-holder.component';
import { WallInfoComponent } from './components/wall-info/wall-info.component';
import { WallPlayerComponent } from './components/wall-player/wall-player.component';
import { WallService } from './services/wall.service';
import { ElementService } from './services/element.service';
import { WallCardComponent } from './components/wall-card/wall-card.component';
import { StuffHolderComponent } from './components/stuff-holder/stuff-holder.component';
import { StuffTableComponent } from './components/stuff-table/stuff-table.component';
import { StuffAddingComponent } from './components/stuff-adding/stuff-adding.component';
import { StuffService } from './services/stuff.service';
import { PackingHolderComponent } from './components/packing-holder/packing-holder.component';
import { PackingTableComponent } from './components/packing-table/packing-table.component';
import { PackingAddingComponent } from './components/packing-adding/packing-adding.component';
import {DoubleFormatterDirective} from './directives/double-formate-directive';
import {DoubleFormatterPipe} from './directives/double-formate-pipe';
import {PackingService} from './services/packing.service';
import {EquipmentService} from './services/equipment.service';
import { FacilityEquipmentHolderComponent } from './components/facility-equipment-holder/facility-equipment-holder.component';
import { FacilityEquipmentAddingComponent } from './components/facility-equipment-adding/facility-equipment-adding.component';
import { FacilityEquipmentListComponent } from './components/facility-equipment-list/facility-equipment-list.component';
import { FacilityEquipmentElementComponent } from './components/facility-equipment-element/facility-equipment-element.component';
import {CalculationService} from './services/calculation.service';
import { CalculationInfoComponent } from './components/calculation-info/calculation-info.component';
import { RoomFilterComponent } from './components/room-filter/room-filter.component';
import { InProcessPageComponent } from './components/in-process-page/in-process-page.component';
import {AngularFireModule} from 'angularfire4';
import {AuthService} from './services/auth.service';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import {AngularFireAuthModule} from 'angularfire4/auth';
import {AngularFireDatabaseModule} from 'angularfire4/database';
import {CanActivateGuardService} from './services/can-activate-guard.service';

export const firebaseConfig = {
    apiKey: 'AIzaSyAnh9dNvcJdnfJKXIdo5zOeV334mdul0dI',
    authDomain: 'build-calculator-ed84d.firebaseapp.com',
    databaseURL: 'https://build-calculator-ed84d.firebaseio.com',
    projectId: 'build-calculator-ed84d',
    storageBucket: 'build-calculator-ed84d.appspot.com',
    messagingSenderId: '529289733704'
};

@NgModule({
  declarations: [
    AppComponent,
    FacilityAddingComponent,
    FacilityHolderComponent,
    FacilityPlayerComponent,
    FacilityInfoComponent,
    RoomHolderComponent,
    RoomAddingComponent,
    WallAddingComponent,
    ElementInfoComponent,
    RoomPlayerComponent,
    RoomAccordionComponent,
    RoomInfoComponent,
    WallHolderComponent,
    WallInfoComponent,
    WallPlayerComponent,
    WallCardComponent,
    StuffHolderComponent,
    StuffTableComponent,
    StuffAddingComponent,
    PackingHolderComponent,
    PackingTableComponent,
    PackingAddingComponent,
    DoubleFormatterDirective,
    FacilityEquipmentHolderComponent,
    FacilityEquipmentAddingComponent,
    FacilityEquipmentListComponent,
    FacilityEquipmentElementComponent,
    CalculationInfoComponent,
    RoomFilterComponent,
    InProcessPageComponent,
    WelcomePageComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule,
    MdListModule,
    MdSelectModule,
    MdCheckboxModule,
    MdRadioModule,
    BrowserAnimationsModule,
    AccordionModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    InputMaskModule,
    GrowlModule,
    InputSwitchModule,
    AutoCompleteModule,
    TreeTableModule,
    DataTableModule,
    ToolbarModule,
    MessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'facilities',
        component: FacilityHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'rooms/:id',
        component: RoomHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'walls/:facilityId/:roomId',
        component: WallHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'stuff',
        component: StuffHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'packing',
        component: PackingHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'facilityEquipment/:id/:fType',
        component: FacilityEquipmentHolderComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: 'welcome',
        component: WelcomePageComponent
      },
      {
        path: 'inProcess',
        component: InProcessPageComponent,
        canActivate: [CanActivateGuardService]
      },
      {
        path: '',
        redirectTo: '/facilities',
        pathMatch: 'full',
        canActivate: [CanActivateGuardService]
      },
    ])
  ],
  providers: [
    FacilityService,
    RoomService,
    WallService,
    ElementService,
    StuffService,
    PackingService,
    EquipmentService,
    DoubleFormatterPipe,
    CalculationService,
    AuthService,
    CanActivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
