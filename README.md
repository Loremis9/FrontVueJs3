to use open api generator :
cd Dto/generator       ( the directory of generate api) 
npm install 
npm link
cd ..  ( go to the source folder of application )
npm link C:\Users\axelt\OneDrive\Desktop\vuejs3front\vue-material-dashboard-2-main\Dto\jsapiclient\ -- save (pour pouvoir le faire avec plusieurs interface sinon cela reset l'autre)
npm run build



add this line in eslin in rules :
"prettier/prettier": "off",
"no-prototype-builtins": "off",
"no-unused-vars": "off",
"no-empty": "off"


for run this serve : 
npm run dev