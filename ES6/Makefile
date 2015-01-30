SRC = $(wildcard src/*.es6)
DEST = $(SRC:src/%.es6=dest/%.js)

dest: $(DEST)
dest/%.js: src/%.es6
	mkdir -p $(@D)
	6to5 $< -o $@
