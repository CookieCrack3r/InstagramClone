let loggedIn = 1;
let pics = [];
let Users = [

    {
        ID: 0,
        Name: 'Dalia',
        City: 'berlin',
        Picture: 'img/pb/Dalia/dali1.jpg',
        Follower: 230,
        Follow: 23,
        Description: 'Ich bin eine Norwegerin',
        Posts: [
            {
                Picture: 'img/pb/Dalia/dali1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {

                    },
                    {

                    }
                ]
            },
            {
                Picture: 'img/pb/Dalia/dali2.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {

                    },
                    {

                    }
                ]
            },
            {
                Picture: 'img/pb/Dalia/dali3.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {

                    },
                    {

                    }
                ]
            },
            {
                Picture: 'img/pb/Dalia/dali4.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {

                    },
                    {

                    }
                ]
            },
        ],
        Follower: [
            {
                Name: 'Dalia',
                Picture: 'https://martin-friedrich.developerakademie.net/instagram/img/pb/dal-min.jpg'
            },
            {
                Name: 'Francesca',
                Picture: 'https://martin-friedrich.developerakademie.net/instagram/img/pb/fran-min.jpg',
            },
            {
                Name: 'Luni',
                Picture: 'https://martin-friedrich.developerakademie.net/instagram/img/pb/lun-min.jpg',
            }
        ],
        Folgen: [

        ]
    },
    {
        ID: 1,
        Name: 'Francesca',
        City: 'berlin',
        Picture: 'img/pb/Francesca/fran.jpg',
        Follower: 230,
        Follow: 23,
        Description: 'Ich bin eine Perle',
        Posts: [
            {
                Picture: 'img/pb/Francesca/fran.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Francesca/fran1.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Francesca/fran2.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Francesca/fran3.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Francesca/fran4.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            }
        ],

        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 2,
        Name: 'Heidi',
        City: 'berlin',
        Picture: 'img/pb/Heidi/heidi1.jpg', 
        Follower: 230,
        Follow: 23,
        Description: 'Gib mir Würmer',
        Posts: [
            {
                Picture: 'img/pb/Heidi/heidi1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            }
        ],
        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 3,
        Name: 'Luni',
        City: 'berlin',
        Picture: 'img/pb/Luni/luni1.jpg',    
        Follower: 230,
        Follow: 23,
        Description: 'Ich beiße dich',
        Posts: [
            {
                Picture: 'img/pb/Luni/luni1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Luni/luni2.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Luni/luni3.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Luni/luni4.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            }
        ],
        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 4,
        Name: 'Nala',
        City: 'berlin',
        Picture: 'img/pb/Nala/nala1.jpg',     
        Follower: 230,
        Follow: 23,
        Description: 'Mein neues Profil',
        Posts: [
            {
                Picture: 'img/pb/Nala/nala1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Nala/nala2.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Nala/nala3.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Nala/nala4.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Nala/nala5.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Nala/nala6.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            }
        ],
        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 5,
        Name: 'Susi',
        City: 'berlin',
        Picture: 'img/pb/Susi/susi1.jpg',       
        Follower: 230,
        Follow: 23,
        Description: 'Mein altes Profil',
        Posts: [
            {
                Picture: 'img/pb/Susi/susi1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Susi/susi2.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Susi/susi3.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Susi/susi4.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            },
            {
                Picture: 'img/pb/Susi/susi5.jpg',
                Text: 'nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [

                ]
            }
        ],
        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 6,
        Name: 'Tommy',
        City: 'berlin',
        Picture: 'img/pb/Tommy/tommy1.jpg',     
        Follower: 230,
        Follow: 23,
        Description: 'Ich bin ja sooo Süß',
        Posts: [
            {
                Picture: 'img/pb/Tommy/tommy1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Tommy/tommy2.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            }
        ],
        Follower: [

        ],
        Folgen: [

        ]
    },

    {
        ID: 7,
        Name: 'Carl',
        City: 'berlin',
        Picture: 'img/pb/Carl/carl1.jpg',     
        Follower: 230,
        Follow: 23,
        Description: 'Ich bin ja sooo Süß',
        Posts: [
            {
                Picture: 'img/pb/Carl/carl1.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Carl/carl2.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Carl/carl3.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Carl/carl4.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Carl/carl5.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
            {
                Picture: 'img/pb/Carl/carl6.jpg',
                Text: ' nbb',
                Hashtags: [

                ],
                Likes: 5,
                Comments: [
                    {
                        User: 'francesca',
                        Kommentar: 'Hallo'
                    },
                    {
                        User: 'Luni',
                        Kommentar: 'Hallo'

                    }
                ]
            },
        ],
        Follower: [

        ],
        Folgen: [

        ]
    }
]
