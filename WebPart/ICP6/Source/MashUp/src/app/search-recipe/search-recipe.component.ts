import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { getLocalePluralCase } from '@angular/common';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  //getting the values from theinput and assigning to the recipies and places
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  //initializing all the values
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  
  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }
//method to returnt the result
  getVenues() {
//adding the values to the variables
    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;
// to ge thte recepies list
    if (this.recipeValue !== null) {
      //using the httpget method to get the recepies using the string concatinations for the api
      //used the edmam url to fet recepies added the api key and appid and few parameters
      this._http.get('https://api.edamam.com/api/recipes/v2?type=public&q=' + this.recipeValue +
        '&app_id=cb0e4c40&app_key=7a094414737ea95f6427173958fb699b&diet=balanced&cuisineType=American').subscribe((recipes: any) => {
          //assigning the list result to the recipelist 
          this.recipeList = Object.keys(recipes.hits).map((index) =>  {
            const recipe = recipes.hits[index].recipe;
            return { name: recipe.label,  icon: recipe.image, add: recipe.address, url: recipe.url }
          });
        }
        );
    }
// to ge thte places list
    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      //create the basic url with api,cliend id,secret and the recipe value from the input
        let configUrl="https://api.foursquare.com/v3/places/search?client_id=1M3QBJOFDJK3OGGVNH20FTZKZQROT5MPTOTBVSAPEFGYDRLP&client_secret=XAHGZBSIN30YYIJCZ1VVLFLUU2NALVV2OTQUJSH00Y0Y2PPH&query="+this.recipeValue+"&near=";
        // added the authorisation to ge the response form the url in the headers
        let headers= new HttpHeaders().set('Authorization', 'fsq3Ejh3P6V8A0qacog6Y//AztuqABFL3hAZzTesbnkVcR4=');
        const httpOptions={
          headers:headers
        }
        //performing the http get operation by giving the headers and the url also added the place value from the input
        this._http.get(configUrl+this.placeValue,httpOptions).subscribe((places: any) => { 
//assigning the resultant places list to eh venues list that is initialised earlier
          this.venueList=places.results
          });
      
    }
  }
}