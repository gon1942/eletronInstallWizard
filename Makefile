all: build_node_app

build_node_app:
	@echo "Update node binary..." 
	
	
	cd src/ && \
	npm run clean && \
	npm install && \
	npm run build:linux && \
	cp -v ./dist/hamonize-wizard-1.0.0.AppImage ../usr/local/hamonize-wizard/hamonize-wizard
	

clean:
	rm -fv usr/share/hamonize-wizard/*
	
