install:
	npm ci
	   
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint: 
	npx eslint .
brain-even:
    node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd.js:
	node bin/brain-gcd.js
brain-progression.js:
	node bin/brain-progression.js