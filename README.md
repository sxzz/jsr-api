# jsr-api

An alternative API of [jsr.io](https://jsr.io).

## Usage

API endpoint: https://jsr-api.sxzz.moe/

### Badge

API service for https://shields.io/badges/endpoint-badge.

- URL: `/badge/<@scope>/<pkg>`
- Method: `GET`
- Response: see https://shields.io/badges/endpoint-badge
- Example: https://jsr-api.sxzz.moe/badge/@luca/flag

#### Demo

```md
[![jsr](https://img.shields.io/endpoint?url=https%3A%2F%2Fjsr-api.sxzz.moe%2Fbadge%2F%40<scope>%2F<pkg>)](https://jsr.io/@<scope>/<pkg>)
```

Replace `<scope>` and `<pkg>` with the package's scope (without `@`) and name.

[![jsr](https://img.shields.io/endpoint?url=https%3A%2F%2Fjsr-api.sxzz.moe%2Fbadge%2F%40unplugin%2Fmacros)](https://jsr.io/@sxzz/ast-kit)

### Get Latest Version

- URL: `/version/<@scope>/<pkg>`
- Method: `GET`
- Response:
  ```json
  {
    "version": "1.0.0"
  }
  ```
- Example: https://jsr-api.sxzz.moe/version/@luca/flag

#### Errors

```json
[{ "error": "Package not found" }, { "error": "Unknown error" }]
```

### Get Version List

- URL: `/versions/<@scope>/<pkg>`
- Method: `GET`
- Response:
  ```json
  ["0.0.0", "0.0.1"]
  ```
- Example: https://jsr-api.sxzz.moe/versions/@luca/flag

#### Errors

```json
[{ "error": "Package not found" }, { "error": "Unknown error" }]
```

## License

[MIT](./LICENSE) License © 2024 [三咲智子](https://github.com/sxzz)
