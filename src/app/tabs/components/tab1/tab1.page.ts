import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonRow, IonGrid, IonCol, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Tile } from 'src/app/models/tile.model';
import { NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import { heart, add } from 'ionicons/icons'
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonItem, IonCol, IonGrid, IonRow, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    NgFor,
  ],
})
export class Tab1Page {
  constructor(public route: Router, private firestore: Firestore) {

    addIcons({heart, add});
    this.addTile({label: 'woda', isCustom: false});

  }

  async addTile(tile: {label: string; isCustom: boolean}) {
    const tilesCollection = collection(this.firestore, 'tiles');
    try {
      const docRef = await addDoc(tilesCollection, tile);
      console.log('Tile added with ID: ', docRef.id);
    } catch (error){
      console.log('Error adding tile: ', error);
    }
  }

  wordTiles: Tile [] = [
    {id: '1', label: 'Mama', isCustom: false, isSelected: false, color: 'default'},
    {id: '2', label: 'Kot', isCustom: false, isSelected: false, color: 'default'},
    {id: '3', label: 'Jedzenie', isCustom: false, isSelected: false, color: 'default'},
    {id: '4', label: 'Picie', isCustom: false, isSelected: false, color: 'default'},
    {id: '5', label: 'Pies', isCustom: false, isSelected: false, color: 'default'},
    {id: '6', label: 'Ciepło', isCustom: false, isSelected: false, color: 'default'},
    {id: '7', label: 'Zimno', isCustom: false, isSelected: false, color: 'default'},
    {id: '8', label: 'Ja', isCustom: false, isSelected: false, color: 'default'},
    {id: '9', label: 'Ty', isCustom: false, isSelected: false, color: 'default'},
  ];

  toggleTileSelection(tile: Tile): void {
    tile.isSelected = !tile.isSelected;
    tile.color = tile.isSelected ? "success" : "default";

  }

  addNewTile(){

  }

  navigateToAddTilePage(){
    this.route.navigate(['/add-tile']);
  }

}
