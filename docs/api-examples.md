# Примеры использования API

## Содержание

- [Базовые концепции](#базовые-концепции)
- [Примеры запросов](#примеры-запросов)
- [Обработка ошибок](#обработка-ошибок)
- [Полезные функции](#полезные-функции)

## Базовые концепции

### Аутентификация

Все запросы к API требуют токен авторизации, который передается в заголовке `x-token`:

```javascript
const headers = {
  "x-token": "ваш_api_токен",
  "Content-Type": "application/json",
};
```

### Базовый URL

Все запросы отправляются на базовый URL:

```
https://journal.holyworld.me/srv/api/v1
```

### Формат ответов

API всегда возвращает ответ в формате JSON. Успешный ответ может содержать:

- Данные запроса
- Статус операции
- Метаданные

### Обработка ошибок

При возникновении ошибки API возвращает соответствующий HTTP-код и JSON с описанием ошибки:

```javascript
{
  "error": "Описание ошибки",
  "statusCode": "Код ошибки",
  "message": "Сообщение ошибки"
}
```

## Примеры запросов

### Проверка статуса API

```javascript
async function checkApiStatus() {
  try {
    const response = await fetch(
      "https://journal.holyworld.me/srv/api/v1/status",
      {
        headers: {
          "x-token": "ваш_api_токен",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Статус API:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
```

### Получение информации о пользователе

```javascript
async function getUserInfo() {
  try {
    const response = await fetch("https://journal.holyworld.me/srv/api/v1/me", {
      headers: {
        "x-token": "ваш_api_токен",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Информация о пользователе:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
```

### Начало проверки

```javascript
async function startCheckout() {
  try {
    const response = await fetch(
      "https://journal.holyworld.me/srv/api/v1/checkout/start",
      {
        method: "POST",
        headers: {
          "x-token": "ваш_api_токен",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          anarchyNumber: 2,
          mode: "classic",
          reason: "report",
          username: "PlayerName",
          isPvpAnarchy: false,
        }),
      }
    );

    const data = await response.json();
    console.log("Результат:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
```

## Обработка ошибок

### Пример обработки ошибок

```javascript
async function handleApiRequest(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Произошла ошибка");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка API:", error.message);
    throw error;
  }
}
```

## Полезные функции

### Функция для работы с API

```javascript
class JournalAPI {
  constructor(token) {
    this.token = token;
    this.baseUrl = "https://journal.holyworld.me/srv/api/v1";
    this.headers = {
      "x-token": this.token,
      "Content-Type": "application/json",
    };
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Произошла ошибка");
      }

      return await response.json();
    } catch (error) {
      console.error("Ошибка API:", error.message);
      throw error;
    }
  }

  // Примеры методов
  async getStatus() {
    return this.request("/status");
  }

  async getUserInfo() {
    return this.request("/me");
  }

  async startCheckout(data) {
    return this.request("/checkout/start", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async endCheckout(data) {
    return this.request("/checkout/end", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

// Пример использования
const api = new JournalAPI("ваш_api_токен");

// Получение статуса
api.getStatus().then(console.log);

// Начало проверки
api
  .startCheckout({
    anarchyNumber: 2,
    mode: "classic",
    reason: "report",
    username: "PlayerName",
    isPvpAnarchy: false,
  })
  .then(console.log);
```
