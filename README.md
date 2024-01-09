# Swagger themes

[![github issues](https://img.shields.io/github/issues/oqo0/swagger-themes-js?&color=E0AF18)]()
[![github last commits](https://img.shields.io/github/last-commit/oqo0/swagger-themes-js)]()

Change Swagger documentation theme easily.

## Usage

```
npm install swagger-theme-changer
```

```js
const swaggerThemes = require('swagger-theme-changer');

const theme = swaggerThemes.getTheme('universal-dark');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(
        { openapi: '3.0.0' },
        { customCss: theme }
    );
);
```

## Themes

#### Dracula

![alt text](assets/dracula.png)

```csharp
const theme = swaggerThemes.getTheme('dracula');
```

#### Gruvbox

![alt text](assets/gruvbox.png)

```csharp
const theme = swaggerThemes.getTheme('gruvbox');
```

#### Monokai

![alt text](assets/monokai.png)

```csharp
const theme = swaggerThemes.getTheme('monokai');
```

#### Nord Dark

![alt text](assets/nord-dark.png)

```csharp
const theme = swaggerThemes.getTheme('nord-dark');
```

#### One Dark

![alt text](assets/one-dark.png)

```csharp
const theme = swaggerThemes.getTheme('one-dark');
```

#### Universal Dark

![alt text](assets/universal-dark.png)

```csharp
const theme = swaggerThemes.getTheme('universal-dark');
```

#### X-Code Light

![alt text](assets/x-code-light.png)

```csharp
const theme = swaggerThemes.getTheme('x-code-light');
```
