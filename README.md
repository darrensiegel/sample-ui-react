# sample-ui-react

Sample UI that exercises the sample-gateway APIs.

## Running dependencies

See [this documentation](https://github.com/darrensiegel/sample-auth-service)

## Running the container

First add an entry to `/etc/hosts`  mapping hostname `gateway` to `127.0.0.1`.

Then install dependencies and build the distribution.

```
$ yarn

$ gulp dist
```

Then build and deploy the NGINX container.

```
$ docker built -t <user name>/web-server .

$ docker run -d --name web-server -p 8080:8080 <user name>/web-server
```
