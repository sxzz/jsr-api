# jsr-api

An alternative API of [jsr.io](https://jsr.io).

## Usage

API endpoint: https://jsr-api.sxzz.moe/

### Badge

```md
[![jsr](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fjsr-api.sxzz.moe%2Fversion%2F%40<scope>%2F<pkg>&query=version&prefix=v&label=jsr&color=%23faee4a)](https://jsr.io/@<scope>/<pkg>)
```

Replace `<scope>` and `<pkg>` with the package's scope (without `@`) and name.

Example:
[![jsr](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fjsr-api.sxzz.moe%2Fversion%2F%40sxzz%2Fast-kit&query=version&prefix=v&label=jsr&color=%23faee4a)](https://jsr.io/@sxzz/ast-kit)

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
