# serverless-hello-world

Hello World as a Service

## Install

There's nothing to install.

## Usage

To use Hello World as a Service, hit the `hello` resource, passing in `name` as a query string.

Example:
```bash
curl https://bybx7hbzdh.execute-api.us-east-1.amazonaws.com/dev/hello\?name\=Donavon
```
Response:
```json
{"results":"Hello Donavon"}
```
