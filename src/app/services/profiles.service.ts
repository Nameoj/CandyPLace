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
						quantity : 3,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},
					{
						name : 'Lindor 70% Cacao',
						quantity : 5,
						image : 'https://static.openfoodfacts.org/images/products/800/334/009/5370/front_fr.4.200.jpg'
					},
					{
						name : 'Cerise à la liqueur',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Ferrero Rocher',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/000/3787/front_en.52.200.jpg'
					},
					{
						name : 'Avello Rochers',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/358/840/025/9190/front_fr.4.200.jpg'
					},
					{
						name : 'Grand Ferrero Rocher',
						quantity : 4,
						image : 'https://static.openfoodfacts.org/images/products/800/050/016/8554/front_en.23.200.jpg'
					}
				],
				vitrine : [
					{
						name : 'Cerise à la liqueur',
						quantity : 100,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 167,
						image : 'https://static.openfoodfacts.org/images/products/400/840/011/2428/front_fr.10.200.jpg'
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
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/016/7113/front_fr.18.200.jpg'
					},
					{
						name : 'Lindor 70% Cacao',
						quantity : 3,
						image : 'https://static.openfoodfacts.org/images/products/800/334/009/5370/front_fr.4.200.jpg'
					}		
				],
				vitrine : [
					{
						name : 'Rocher - Chocolat au lait',
						quantity : 45,
						image : 'https://static.openfoodfacts.org/images/products/800/050/016/0466/front_fr.12.200.jpg'
					},
					{
						name : 'Lindor',
						quantity : 5,
						image : 'https://static.openfoodfacts.org/images/products/800/334/009/5356/front_fr.17.200.jpg'
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
						quantity : 4,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 15,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/800/050/000/3787/front_en.52.200.jpg'
					},
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/021/6712/front_fr.6.200.jpg'
					}
				],
				vitrine : [
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 48,
						image : 'https://static.openfoodfacts.org/images/products/800/050/021/6712/front_fr.6.200.jpg'
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 13,
						image : 'https://static.openfoodfacts.org/images/products/326/385/557/9214/front_fr.4.200.jpg'
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
						quantity : 48,
						image : 'https://static.openfoodfacts.org/images/products/800/050/021/6712/front_fr.6.200.jpg'
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 13,
						image : 'https://static.openfoodfacts.org/images/products/326/385/557/9214/front_fr.4.200.jpg'
					},
					{
						name : 'Kit Kat',
						quantity : 56,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 46,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
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
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/800/050/000/3787/front_en.52.200.jpg'
					},
					{
						name : 'Ferrero Rocher Heart Box 4 Pack',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/021/6712/front_fr.6.200.jpg'
					},
					{
						name : 'Avello Rochers',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/358/840/025/9190/front_fr.4.200.jpg'
					},				
					{
						name : 'Mon cheri',
						quantity : 3,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/400/840/011/2428/front_fr.10.200.jpg'
					},
					{
						name : 'Chocolat Noir fourré à la liqueur',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/326/385/557/9214/front_fr.4.200.jpg'
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
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},				
					{
						name : 'Cerise à la liqueur',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Ferrero Rocher',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/800/050/000/3787/front_en.52.200.jpg'
					}
				],
				vitrine : [
					{
						name : 'Mon cheri',
						quantity : 67,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 45,
						image : 'https://static.openfoodfacts.org/images/products/400/840/011/2428/front_fr.10.200.jpg'
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
						quantity : 3,
						image : 'https://static.openfoodfacts.org/images/products/761/303/502/4267/front_fr.3.200.jpg'
					},
					{
						name : 'Lindor 70% Cacao',
						quantity : 5,
						image : 'https://static.openfoodfacts.org/images/products/800/334/009/5370/front_fr.4.200.jpg'
					},
					{
						name : 'Cerise à la liqueur',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Ferrero Rocher',
						quantity : 1,
						image : 'https://static.openfoodfacts.org/images/products/800/050/000/3787/front_en.52.200.jpg'
					},
					{
						name : 'Avello Rochers',
						quantity : 2,
						image : 'https://static.openfoodfacts.org/images/products/358/840/025/9190/front_fr.4.200.jpg'
					},
					{
						name : 'Grand Ferrero Rocher',
						quantity : 4,
						image : 'https://static.openfoodfacts.org/images/products/800/050/016/8554/front_en.23.200.jpg'
					}
				],
				vitrine : [
					{
						name : 'Mon cheri',
						quantity : 45,
						image : 'https://static.openfoodfacts.org/images/products/800/050/024/2261/front_fr.4.200.jpg'
					},
					{
						name : 'Mon Chéri Stern',
						quantity : 90,
						image : 'https://static.openfoodfacts.org/images/products/400/840/011/2428/front_fr.10.200.jpg'
					}
				]			
			}
		]
	
	

  constructor() { }
}
