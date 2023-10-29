build:
	podman build --tag=kyoheiudev/kyoheiudev:$(VER) .

push:
	podman push kyoheiudev/kyoheiudev:$(VER)
