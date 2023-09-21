build:
	sudo docker build --tag=kyoheiudev/kyoheiudev:$(VER) .

push:
	sudo docker push kyoheiudev/kyoheiudev:$(VER)