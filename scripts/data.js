const data = {
    company: {
        email: 'contact@pocket-fox.fr',
        address: '38 rue des boudes, 14000 Caen',
        tel: '+33 (0)123456789'
    },

    slides_image: [
        {
            img: 'images/slide1.jpg',
            text: 'Collection <strong><i>Renard d\'or</i></strong>'
        },
        {
            img: 'images/slide2.jpg',
            text: 'Collection <strong><i>Renard d\'or</i></strong>'
        },
        {
            img: 'images/slide3.jpg',
            text: 'Collection <strong><i>Modeste renard</i></strong>'
        },
        {
            img: 'images/slide4.jpg',
            text: 'Collection <strong><i>Vieux renard</i></strong>'
        }
    ],
    slides_actuality: [
        {
            title: 'Nouvelle série <strong><i>Renard d\'hiver</i></strong> !',
            text: 'La série Hiver 2021/2022 est inspirée de la neige. A l\'inverse de la dernière collection hiver, nous avons souhaité retourner et travailler des couleurs simple. La complexité des montres se mélange parfaitement avec la simplicité du blanc de la neige.'
        },
        {
            title: 'Montre Monk vendu à un prix record !',
            text: 'Nous avons réalisé une montre Monk en collaboration avec <i>Touchstone Television</i> à l\'occasion de la sortie de la dernière saison de Monk. Elle à était vendu hier pour la somme de 120.000€ à un acheteur privé.'
        }
    ],
    employees: [
        {
            name: 'CHOLLET Quentin',
            pseudo: 'Re-Nard',
            desc: 'Co-fondateur et CEO de l\'entreprise',
            img: 'images/person/Quentin.jpg',
            linkedin: 'https://www.linkedin.com/in/quentin-c-173a25155/'
        },
        {
            name: 'AGHZERE Youssef',
            pseudo: 'Big smile',
            desc: 'Co-fondateur et PDG de l\'entreprise',
            img: 'images/person/Youssef.jpeg',
            linkedin: 'https://www.linkedin.com/'
        },
        {
            name: 'CPTF Diego',
            pseudo: 'Le chien',
            desc: 'Responsable marketing',
            img: 'images/person/Diego.png',
            linkedin: 'https://www.linkedin.com/'
        },
        {
            name: 'CPTF Igor',
            pseudo: 'Le castor',
            desc: 'Maitre horloger secondaire',
            img: 'images/person/Igor.png',
            linkedin: 'https://www.linkedin.com/'
        },
        {
            name: 'CPTF Archibald',
            pseudo: 'Capitaine Flam',
            desc: 'Team manager',
            img: 'images/person/Archibald.png',
            linkedin: 'https://www.linkedin.com/'
        },
        {
            name: 'CPTF Skeleton',
            pseudo: 'Le frileux',
            desc: 'Technicien de réparation',
            img: 'images/person/Skeleton.png',
            linkedin: 'https://www.linkedin.com/'
        }
    ],
    tarifs: [
        {
            cat_name: 'Montre à gousset',
            id: 'cat1',
            img: 'images/renard_hiver-1.webp',
            prestations: [
                {name: 'Sur mesure', desc: 'Conception de A à Z de votre montre à gousset de rêve. (Le prix de départ ne comprend pas les matériaux)', price: 120000},
                {name: 'Collection actuelle', desc: 'Notre dernière collection. (Prix de départ)', price: 10000},
                {name: 'Ancienne collection', desc: 'Ils restent du stock dans les anciennes collection. (Prix de départ) ', price: 7500},
                {name: 'Reconditionnée', desc: 'Montre reconditionnée. (Prix de départ) ', price: 5000}
            ]
        },
        {
            cat_name: 'Entretien',
            id: 'cat2',
            img: 'images/slide2.jpg',
            prestations: [
                {name: 'Revision montre à gousset', desc: 'La révision comprend l\'entretien du ressort de remonté.', price: 1500},
                {name: 'Réparation minime', desc: 'Réparation en cas de casse de pièce courante.', price: 2500},
                {name: 'Remise à neuf', desc: 'Total remise à neuf de la montre. (Le prix ne comprend pas les pièces)', price: 10000},
            ]
        }
    ],
    emplois: [
        {
            name: 'Horloger',
            type: 'CDI',
            desc: 'On cherche un nouvel horloger principalement pour entretien et remise à neuf.',
            salary: 213400
        },
        {
            name: 'Horloger débutant',
            type: 'Apprentissage',
            desc: 'On souhaite former de jeunes horloger. Un minimum d\'expèrience sera apprécier. (Peut déboucher sur un CDI)',
            salary: 90000
        },
        {
            name: 'Découverte',
            type: 'Stage',
            desc: 'Stage découverte de 3 semaines pour découvrir le metier d\'horloger.',
            salary: 0
        },
        {
            name: 'Expert conception horlogerie',
            type: 'CDD',
            desc: 'Dans le cadre d\'une collaboration, nous cherchons on plus de monde pour la conception.',
            salary: 300000
        }
    ],
    comments: [
        {name: 'Mr. Dupont', company: 'Entreprise Ximto', comment: 'Les meilleurs !', img: 'images/person/p1.jpg'},
        {name: 'Mr. Roril', company: 'Entreprise traloc', comment: 'J\'aime bien, genre vraiment bien !', img: 'images/person/p2.jpg'},
        {name: 'Mr. Polichou', company: 'Entreprise freeloc', comment: 'La vie est peuplé de bonne et mauvaise chose... Maintenant la vie et composée des montres PocketFox et du restes !', img: 'images/person/p3.jpg'},
    ],
    reals: [
        {
            imgs: [
                'images/w5/p1.jpg',
                'images/w5/p2.jpg',
                'images/w5/p3.jpg',
            ],
            text: 'La pépite de la collection Renard d\'hiver !'
        },
        {
            imgs: [
                'images/w4/p1.jpg',
                'images/w4/p2.jpg',
                'images/w4/p3.jpg',
                'images/w4/p4.jpg',
                'images/w4/p5.jpg',
            ],
            text: 'Rocket Fox, collection été 2021 !'
        },
        {
            imgs: [
                'images/w3/p1.jpg',
                'images/w3/p2.jpg',
                'images/w3/p3.jpg',
            ],
            text: 'Collectino Renard d\'or, cette montre est à l\'origine du succès de notre entreprise.'
        },
        {
            imgs: [
                'images/w2/p5.jpg',
                'images/w2/p1.jpg',
                'images/w2/p2.jpg',
                'images/w2/p3.jpg',
                'images/w2/p4.jpg'
            ],
            text: 'BLack PocketFox, collection automne 2021 !'
        }
    ]
}
