# API Проверок

## Содержание

- [Обзор](#обзор)
- [Получение статуса проверки](#получение-статуса-проверки)
- [Начало проверки](#начало-проверки)
- [Завершение проверки](#завершение-проверки)
- [Коды ошибок](#коды-ошибок)

## Обзор

API проверок позволяет управлять процессом проверки игроков. Вы можете:

- Получить текущий статус проверки
- Начать новую проверку
- Завершить активную проверку

## Получение статуса проверки

### Эндпоинт

```
GET /checkout/status
```

### Пример запроса

```javascript
async function getCheckoutStatus() {
  try {
    const response = await fetch(
      "https://journal.holyworld.me/srv/api/v1/checkout/status",
      {
        headers: {
          "x-token": "ваш_api_токен",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Статус проверки:", data);
  } catch (error) {
    console.error("Ошибка при получении статуса:", error);
  }
}
```

### Возможные ответы

#### Неактивная проверка

```json
{
  "status": false,
  "startedAt": null
}
```

#### Активная проверка

```json
{
  "status": true,
  "startedAt": "2025-05-25T17:00:48.599Z"
}
```

## Начало проверки

### Эндпоинт

```
POST /checkout/start
```

### Параметры запроса

| Поле            | Тип     | Обязательно | Описание                                             |
| --------------- | ------- | ----------- | ---------------------------------------------------- |
| `anarchyNumber` | number  | Да          | Номер анархии                                        |
| `mode`          | string  | Да          | Режим анархии (classic/lite/lite120)                 |
| `reason`        | string  | Да          | Причина проверки ([список причин](/checkout-reason)) |
| `username`      | string  | Да          | Полное имя пользователя                              |
| `isPvpAnarchy`  | boolean | Да          | Является ли PvP анархией                             |

### Пример запроса

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
          username: "moder1",
          isPvpAnarchy: false,
        }),
      }
    );

    const data = await response.json();
    console.log("Результат начала проверки:", data);
  } catch (error) {
    console.error("Ошибка при начале проверки:", error);
  }
}
```

### Успешный ответ

```json
{
  "success": true
}
```

## Завершение проверки

### Эндпоинт

```
POST /checkout/end
```

### Параметры запроса

| Поле           | Тип     | Обязательно | Описание                                                    |
| -------------- | ------- | ----------- | ----------------------------------------------------------- |
| `destroyStash` | boolean | Да          | Удаление стеша игрока                                       |
| `result`       | string  | Да          | Результат проверки ([список результатов](/checkout-result)) |
| `banReason`    | string  | Нет         | Причина бана ([список причин](/checkout-ban-reason))        |

### Пример запроса

```javascript
async function endCheckout() {
  try {
    const response = await fetch(
      "https://journal.holyworld.me/srv/api/v1/checkout/end",
      {
        method: "POST",
        headers: {
          "x-token": "ваш_api_токен",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destroyStash: true,
          result: "ban",
          banReason: "2.4",
        }),
      }
    );

    const data = await response.json();
    console.log("Результат завершения:", data);
  } catch (error) {
    console.error("Ошибка при завершении проверки:", error);
  }
}
```

### Успешный ответ

```json
{
  "success": true
}
```

## Коды ошибок

| Код | Описание                   |
| --- | -------------------------- |
| 400 | Неверные параметры запроса |
| 401 | Неверный токен авторизации |
| 409 | Проверка уже активна       |
| 404 | Проверка не найдена        |
| 500 | Внутренняя ошибка сервера  |
