SportSee as an application that the users can follow their sport goals by monitoring.

Prerequisites :
NodeJs
NPM
Git
Code editor (Vscode)

Install and start Back-End
To use the application you need to clone the API from OpenClassrooms-Student-Center. Open a terminal and follow the instructions.

git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git cd P9-front-end-dashboard                        
npm install                                                                                                                            
npm start                                                                                                                              
You will see                                                                                                                           

P9-front-end-dashboard@1.0.0 start                                                                                                    
node app/index.js                                                                                                                    

Magic happens on port 3000                                                                                                             

For more informations, go to : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard                                 

Install and start Front-End                                                                                                           
In another terminal, you need to clone the Front-End repository.                                                                       

git clone (https://github.com/IvayloRachev/Ivaylo_Rachev_SportSee_p12.github.io)                                                       
cd sportsee_p12                                                                                                                     
npm install                                                                                                                         
npm start                                                                                                                            

The terminal will ask                                                                                                                 

Something is already running on port 3000.                                                                                          

Would you like to run the app on another port instead? » (Y/n) Click Y for yes.                                                       

Switch data To choice the data from Mock or from API you can select source.api or source.mock in /src/utils/context/index.jsx.          <SourceContext.Provider value={{ source: source.mock }}> or <SourceContext.Provider value={{ source: source.api }}>                    

Switch User                                                                                                                          
If you want change the user, in the url of your browser you can choose the user id.                                                    

For the user with id 12: http://localhost:3001/user/12                                                                                 

For the user with id 18: http://localhost:3001/user/18                                                                                
