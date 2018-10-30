import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

	Users = 
		[
			{
				profile : {
					firstname : 'Zak',
					lastname : 'Hamichi',
					adress : '58 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars2.githubusercontent.com/u/42536296?s=460&v=4'
				},
				collection : [
					{
						name : 'Kit Kat',
						quantity : 3
					},
					{
						name : 'Lindor 70% Cacao',
						quantity : 5
					},
					{
						name : 'Cerise à la liqueur',
						quantity : 1
					},
					{
						name : 'Ferrero Rocher',
						quantity : 1
					},
					{
						name : 'Avello Rochers',
						quantity : 2
					},
					{
						name : 'Grand Ferrero Rocher',
						quantity : 4
					}
				],
				vitrine : [
					{
						name : 'Cerise à la liqueur',
						quantity : 100
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 167
					}
				]			
			},
			{
				profile : {
					firstname : 'Hugo',
					lastname : 'Hontans',
					adress : '58 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars1.githubusercontent.com/u/42539174?s=460&v=4'
				},
				collection : [
					{
						name : 'FERRERO ROCHER Boîte de 30',
						quantity : 1
					},
					{
						name : 'Lindor 70% Cacao',
						quantity : 3
					}		
				],
				vitrine : [
					{
						name : 'Rocher - Chocolat au lait',
						quantity : 45
					},
					{
						name : 'Lindor',
						quantity : 5
					}
				]			
			}
		]
	
	

  constructor() { }
}
