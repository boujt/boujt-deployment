
![Logo We Know IT](https://code.weknowit.se/logo.png)

# BOUJT
BOUJT är en ny hemsida åt Barn och Ungdoms Jour på Teckenspråk. Hemsidan innehåller mycket content och har stöd för video/textchat mellan barn och jouren. På sidan finns även aktiviteter som olika quiz. 

Sidan byggdes sommaren 2022 och hostas med hjälp av Strapi CMS. Deployment sker genom Vercel och Digital Ocean.

|||
| --- | --- |
| **Projekttyp** | Hemsida |
| **Kund** | BOUJT |
| **Kontaktperson** | Olivia Renner Balkstam |

### Projektidentitet
| Roll | Namn | Kontakt |
| --- | --- | --- |
| Projektledare | Hassan Mustafa | [hassan.mustafa@weknowit.se](mailto:hassan.mustafa@weknowit.se) |
| Utvecklare | David Styrbjörn | [david.styrbjorn@weknowit.se](mailto:david.styrbjorn@weknowit.se) |
| Utvecklare | Jakob Karlstrand | [jakob.karlstrand@weknowit.se](mailto:jakob.karlstrand@weknowit.se) |

[Länk till projektmapp](https://drive.google.com/drive/folders/1Xm0UfjGxjlzC_T4LDVzYVtYv1pdZjgob?usp=sharing)
___
## Teknisk specifikation
* Frontend: [nextjs](https://nextjs.org/)
* Backend/CMS: [Strapi](https://strapi.io/)
* Videochat: [Daily](https://www.daily.co/)
* Hosting Frontend: [Vercel](https://vercel.com/)
* Hosting Strapi: [Digital Ocean](https://www.digitalocean.com/)
* Video Hosting: [Youtube](https://www.youtube.com/)

## Projekt setup
För att komma igång behöver du bara cd'a in i client mappen och köra `yarn dev`
Därefter bör du även starta backend med `yarn develop` alternativt att du connectar direct till remote.
Följande data behöver existera i din .env
### För client
`DAILY_API_KEY=`</br>
`DAILY_REST_DOMAIN=`</br>
`DAILY_API_URL=`</br>
`STRAPI_API_BASE_URL=`</br>
`STRAPI_SERVICE_ACCOUNT_JWT=`</br>
`SENDGRID_API_KEY=`

### För backend
Strapi relaterat</br>
`HOST=`</br>
`PORT=`</br>
`APP_KEYS=`</br>
`API_TOKEN_SALT=`</br>
`ADMIN_JWT_SECRET=`</br>
`JWT_SECRET=`</br>
Digital Ocean relaterat<br/>
`DATABASE_PASSWORD=`</br>
`DATABASE_USER=`</br>
`DATABASE_NAME=`</br>
`DO_SPACE_ACCESS_KEY=`</br>
`DO_SPACE_SECRET_KEY=`</br>
`DO_SPACE_ENDPOINT=`</br>
`DO_SPACE_BUCKET`

## Deployment
Deployment sker genom att först commita upp till `deploy` remote. Denna remote ligger på ett github repo under boujts egna github konto. Detta för att kunna köra med Digial Oceans one-click-deploy solution.
[Länk till deployment repo](https://github.com/boujt/boujt-deployment) 

En automatiskt ny deploy av frontend sker så fort du pushar till `deploy`. För att rebuilda och få upp ny version av Strapi CMS måste du ha tillgång till Digital Ocean panelen. Be BOUJT att lägga till din mail alternativt få tillgång till boujt.videos@gmail.com då det är denna mail alla konton ligger på.

Kontakta tidigare utvecklare för att få tillgång till boujt.videos@gmail.com

## Kodstandard
Ingen riktig standard har blivit satt, koden lutar sig hårt på ChakraUI biblioteket. Om du ska lägga in nya varianter och färger av core components, göra detta i `theme.tsx`

Försök även hålla allting type safe, se existerande API endpoints och hooks för hur vi hanterat types mellan server och backend. 

## Komma in Strapi
Logga in med Superadmin kontot boujt.videos@gmail.com. Lösenordet ligger i projektmappen på drive. 

___