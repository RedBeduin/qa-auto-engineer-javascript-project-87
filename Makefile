gendiff: 
    node bin/gendiff.js 

lint: 
    npx eslint . 
    
test-coverage:
    NODE_OPTIONS=--experimental-vm-modules npx jest --coverage 
