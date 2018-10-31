import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  Users = [
    {
      profile: {
        firstname: 'Zak',
        lastname: 'Hamichi',
        adress: '58 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars2.githubusercontent.com/u/42536296?s=460&v=4'
      },
      collection: [
        {
          name: "Tagada l'originale",
          quantity: 3,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/9574/front_fr.77.200.jpg'
        },
        {
          name: 'Chamallows Choco',
          quantity: 5,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/004/3158/front_fr.4.200.jpg'
        },
        {
          name: 'Guimauve',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/201/995/829/9990/front_fr.16.200.jpg'
        },
        {
          name: 'Mini chupa chups',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/460/179/803/0055/front_fr.3.200.jpg'
        },
        {
          name: 'Citrouille halloween assortiment de confiseries',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/321/547/051/6938/front_fr.4.200.jpg'
        },
        {
          name: 'Bonbons au miel Myrtille Framboise',
          quantity: 4,
          image:
            'https://static.openfoodfacts.org/images/products/326/362/275/9719/front_fr.4.200.jpg'
        }
      ],
      vitrine: [
        {
          name: 'Chamallows Choco',
          quantity: 100,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/004/3158/front_fr.4.200.jpg'
        },
        {
          name: 'Citrouille halloween assortiment de confiseries',
          quantity: 167,
          image:
            'https://static.openfoodfacts.org/images/products/321/547/051/6938/front_fr.4.200.jpg'
        }
      ]
    },
    {
      profile: {
        firstname: 'Hugo',
        lastname: 'Hontans',
        adress: '58 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars1.githubusercontent.com/u/42539174?s=460&v=4'
      },
      collection: [
        {
          name: 'Haloween Party',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/23167308/front_fr.4.200.jpg'
        },
        {
          name: 'Cerise à la liqueur',
          quantity: 3,
          image:
            'https://static.openfoodfacts.org/images/products/26049472/front_fr.5.200.jpg'
        }
      ],
      vitrine: [
        {
          name: 'Haloween Party',
          quantity: 45,
          image:
            'https://static.openfoodfacts.org/images/products/23167308/front_fr.4.200.jpg'
        },
        {
          name: 'Cerise à la liqueur',
          quantity: 5,
          image:
            'https://static.openfoodfacts.org/images/products/26049472/front_fr.5.200.jpg'
        }
      ]
    },
    {
      profile: {
        firstname: 'Simon',
        lastname: 'Barbu',
        adress: '59 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars0.githubusercontent.com/u/28387526?s=460&v=4'
      },
      collection: [
        {
          name: 'Maltesers',
          quantity: 4,
          image:
            'https://static.openfoodfacts.org/images/products/500/015/943/7943/front_fr.19.200.jpg'
        },
        {
          name: 'Dragolo',
          quantity: 15,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/7822/front_fr.60.200.jpg'
        },
        {
          name: 'Sucette ghost pops',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/541/137/600/3147/front_fr.4.200.jpg'
        },
        {
          name: "Tagada l'originale",
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/9574/front_fr.77.200.jpg'
        }
      ],
      vitrine: [
        {
          name: 'Dragolo',
          quantity: 48,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/7822/front_fr.60.200.jpg'
        },
        {
          name: 'Maltesers',
          quantity: 13,
          image:
            'https://static.openfoodfacts.org/images/products/500/015/943/7943/front_fr.19.200.jpg'
        }
      ]
    },
    {
      profile: {
        firstname: 'Julien',
        lastname: 'Chader',
        adress: '61 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars3.githubusercontent.com/u/42383829?s=460&v=4'
      },
      collection: [],
      vitrine: [
        {
          name: "Rotella l'original",
          quantity: 48,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/9635/front_fr.7.200.jpg'
        },
        {
          name: 'Alpin fresh',
          quantity: 13,
          image:
            'https://static.openfoodfacts.org/images/products/761/070/062/6368/front_fr.13.200.jpg'
        },
        {
          name: 'Chamallows Choco',
          quantity: 56,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/004/3158/front_fr.4.200.jpg'
        },
        {
          name: 'BOO!',
          quantity: 46,
          image:
            'https://static.openfoodfacts.org/images/products/26078014/front_fr.4.200.jpg'
        }
      ]
    },
    {
      profile: {
        firstname: 'Julien',
        lastname: 'Chevrot',
        adress: '64 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars3.githubusercontent.com/u/40598218?s=460&v=4'
      },
      collection: [
        {
          name: 'La Vosgienne - Sève de Pin',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/353/828/003/6220/front_fr.12.200.jpg'
        },
        {
          name: 'Trick or treat assortiment',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/842/462/100/2519/front_fr.4.200.jpg'
        },
        {
          name: 'Magic Mouse',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/20724108/front_de.17.200.jpg'
        },
        {
          name: 'Tic Tac Intense Mint',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/301/762/050/0060/front_fr.7.200.jpg'
        },
        {
          name: 'Bonherba',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/761/016/761/6810/front_fr.15.200.jpg'
        },
        {
          name: "Tagada l'original",
          quantity: 3,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/000/9574/front_fr.77.200.jpg'
        },
        {
          name: 'BOO!',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/26078014/front_fr.4.200.jpg'
        },
        {
          name: 'Haloween Party',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/23167308/front_fr.4.200.jpg'
        }
      ],
      vitrine: []
    },
    {
      profile: {
        firstname: 'Elizaveta',
        lastname: 'Patrusheva',
        adress: '66 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars2.githubusercontent.com/u/42244315?s=460&v=4'
      },
      collection: [
        {
          name: 'Mini chupa chups',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/460/179/803/0055/front_fr.3.200.jpg'
        },
        {
          name: 'Bonbons au miel Myrtille Framboise',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/326/362/275/9719/front_fr.4.200.jpg'
        },
        {
          name: 'Bonherba',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/761/016/761/6810/front_fr.15.200.jpg'
        }
      ],
      vitrine: [
        {
          name: 'Bonherba',
          quantity: 34,
          image:
            'https://static.openfoodfacts.org/images/products/761/016/761/6810/front_fr.15.200.jpg'
        },
        {
          name: 'Mini chupa chups',
          quantity: 78,
          image:
            'https://static.openfoodfacts.org/images/products/460/179/803/0055/front_fr.3.200.jpg'
        }
      ]
    },
    {
      profile: {
        firstname: 'Jerzy',
        lastname: 'Rastapopulos',
        adress: '67 Cours Suchet, 69002 Lyon',
        photo: 'https://avatars2.githubusercontent.com/u/43041194?s=460&v=4'
      },
      collection: [
        {
          name: 'Cerise à la liqueur',
          quantity: 3,
          image:
            'https://static.openfoodfacts.org/images/products/26049472/front_fr.5.200.jpg'
        },
        {
          name: 'Bonherba',
          quantity: 3,
          image:
            'https://static.openfoodfacts.org/images/products/761/016/761/6810/front_fr.15.200.jpg'
        },
        {
          name: 'Chamallows Choco',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/004/3158/front_fr.4.200.jpg'
        },
        {
          name: 'Citrouille halloween assortiment de confiseries',
          quantity: 2,
          image:
            'https://static.openfoodfacts.org/images/products/321/547/051/6938/front_fr.4.200.jpg'
        },
        {
          name: 'Guimauve',
          quantity: 1,
          image:
            'https://static.openfoodfacts.org/images/products/201/995/829/9990/front_fr.16.200.jpg'
        }
      ],
      vitrine: [
        {
          name: 'Guimauve',
          quantity: 156,
          image:
            'https://static.openfoodfacts.org/images/products/201/995/829/9990/front_fr.16.200.jpg'
        },
        {
          name: 'Chamallows Choco',
          quantity: 24,
          image:
            'https://static.openfoodfacts.org/images/products/310/322/004/3158/front_fr.4.200.jpg'
        }
      ]
    }
  ];
  constructor() {}
}
