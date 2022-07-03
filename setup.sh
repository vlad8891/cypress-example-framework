yarn add cypress 

rm -rf env_config && mkdir env_config
cp cypress.config.js.example env_config/ci.config.js 
cp cypress.config.js.example env_config/local.config.js



