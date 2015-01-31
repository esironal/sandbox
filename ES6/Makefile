SRC = $(wildcard src/*.js)
DEST = $(SRC:src/%.js=dest/%.js)

dest: $(DEST)
dest/%.js: src/%.js
	mkdir -p $(@D)
	6to5 $< -o $@
