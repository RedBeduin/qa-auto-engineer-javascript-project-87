gendiff: 
	node bin/gendiff.js $(filepath1) $(filepath2) 
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage 
lint:
	npx eslint . 
install:
	npm ci 