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
			},
			{
				profile : {
					firstname : 'Simon',
					lastname : 'Barbu',
					adress : '59 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars0.githubusercontent.com/u/28387526?s=460&v=4'
				},
				collection : [
					{
						name : 'Kit Kat',
						quantity : 4
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 15
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2
					},
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 1
					}
				],
				vitrine : [
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 48
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 13
					}
				]			
			},
			{
				profile : {
					firstname : 'Julien',
					lastname : 'Chader',
					adress : '61 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars3.githubusercontent.com/u/42383829?s=460&v=4'
				},
				collection : [
				],
				vitrine : [
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 48
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 13
					},
					{
						name : 'Kit Kat',
						quantity : 56
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 46
					}
				]			
			},
			{
				profile : {
					firstname : 'Julien',
					lastname : 'Chevrot',
					adress : '64 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars3.githubusercontent.com/u/40598218?s=460&v=4'
				},
				collection : [
					{
						name : 'Kit Kat',
						quantity : 2
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 1
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2
					},
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 1
					},
					{
						name : 'Avello Rochers',
						quantity : 1
					},				
					{
						name : 'Mon cheri',
						quantity : 3
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 2
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 1
					}
				],
				vitrine : [
				]			
			},
			{
				profile : {
					firstname : 'Elizaveta',
					lastname : 'Patrusheva',
					adress : '66 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars2.githubusercontent.com/u/42244315?s=460&v=4'
				},
				collection : [
					{
						name : 'Kit Kat',
						quantity : 2
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 1
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2
					}
				],
				vitrine : [
					{
						name : 'Mon cheri',
						quantity : 67
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 45
					}
				]			
			},
			{
				profile : {
					firstname : 'Jerzy',
					lastname : 'Rastapopulos',
					adress : '67 Cours Suchet, 69002 Lyon',
					photo : 'https://avatars2.githubusercontent.com/u/43041194?s=460&v=4'
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
						name : 'Mon cheri',
						quantity : 45
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 90
					}
				]			
			}
		]
	
	

  constructor() { }
}
