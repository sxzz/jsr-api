# jsr-api

An alternative API of [jsr.io](https://jsr.io).

## Usage

API endpoint: https://jsr-api.sxzz.moe/

### Get Latest Version

URL: `/version/<@scope>/<pkg>`

Method: `GET`

Response:

```json
{
  "version": "1.0.0"
}
```

Example: https://jsr-api.sxzz.moe/version/@luca/flag

#### Errors

```json
[
  { "error": "Package not found", "code": 404 },
  { "error": "Unknown error", "code": 500 }
]
```

### Get Version List

URL: `/versions/<@scope>/<pkg>`

Method: `GET`

Response:

```json
["0.0.0", "0.0.1"]
```

Example: https://jsr-api.sxzz.moe/versions/@luca/flag

#### Errors

```json
[
  { "error": "Package not found", "code": 404 },
  { "error": "Unknown error", "code": 500 }
]
```

## License

[MIT](./LICENSE) License © 2024 [三咲智子](https://github.com/sxzz)
