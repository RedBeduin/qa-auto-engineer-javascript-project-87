gendiff: 
	node bin/gendiff.js $(filepath1) $(filepath2) 
lint:
	npx eslint . 
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage 