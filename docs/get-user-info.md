# Получение информации о пользователе

## Содержание

- [Базовая информация](#базовая-информация)
- [Статистика модератора](#статистика-модератора)

## Базовая информация

Для получения основной информации о пользователе отправьте GET-запрос на эндпоинт `/me`.

### Пример запроса

```javascript
async function getBasicUserData() {
  try {
    const response = await fetch("https://journal.holyworld.me/srv/api/v1/me", {
      headers: {
        "x-token": "ваш_api_токен",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Данные пользователя:", data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}
```

### Структура ответа

```json
{
  "id": 1,
  "nickname": "nntdgrss",
  "idVk": 757250648,
  "fullname": "Ninety Degrees",
  "neponyatki": 24330,
  "rank": 7,
  "reprimands": 0,
  "warns": 0,
  "anarchyMode": "classic",
  "anarchy": 12
}
```

### Описание полей

| Поле          | Тип    | Описание                                              |
| ------------- | ------ | ----------------------------------------------------- |
| `id`          | number | Уникальный идентификатор аккаунта                     |
| `nickname`    | string | Никнейм пользователя                                  |
| `idVk`        | number | ID пользователя ВКонтакте                             |
| `fullname`    | string | Полное имя пользователя                               |
| `neponyatki`  | number | Баланс непоняток                                      |
| `rank`        | number | Должность пользователя ([подробнее о рангах](/ranks)) |
| `reprimands`  | number | Количество выговоров                                  |
| `warns`       | number | Количество предупреждений                             |
| `anarchyMode` | string | Режим анархии (classic/lite/lite120)                  |
| `anarchy`     | number | Номер анархии                                         |

## Статистика модератора

Для получения статистики модераторской работы отправьте GET-запрос на эндпоинт `/stats`.

### Пример запроса

```javascript
async function getModeratorStatistics() {
  try {
    const response = await fetch(
      "https://journal.holyworld.me/srv/api/v1/stats",
      {
        headers: {
          "x-token": "ваш_api_токен",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Статистика модератора:", data);
  } catch (error) {
    console.error("Ошибка при получении статистики:", error);
  }
}
```

### Структура ответа

```json
{
  "revisesAll": {
    "lite": 9,
    "total": 12,
    "classic": 2,
    "lite120": 1
  },
  "revisesWeek": {
    "lite": 1,
    "total": 3,
    "classic": 2,
    "lite120": 0
  },
  "revisesToday": {
    "lite": 1,
    "total": 3,
    "classic": 2,
    "lite120": 0
  },
  "revisesMonth": {
    "lite": 4,
    "total": 7,
    "classic": 2,
    "lite120": 1
  },
  "mutesAll": 0,
  "gaurantsAll": 0,
  "mutesMonth": 0,
  "gaurantsMonth": 0,
  "mutesToday": 0,
  "bansToday": 0,
  "gaurantsToday": 0
}
```

### Описание полей статистики

#### Проверки (revises)

| Поле           | Описание                       |
| -------------- | ------------------------------ |
| `revisesAll`   | Общая статистика проверок      |
| `revisesWeek`  | Статистика проверок за неделю  |
| `revisesToday` | Статистика проверок за сегодня |
| `revisesMonth` | Статистика проверок за месяц   |

В каждом периоде:

- `lite` - Количество проверок на лайте
- `total` - Общее количество проверок
- `classic` - Количество проверок на классике
- `lite120` - Количество проверок на лайте 1.20

#### Муты и гаранты

| Поле            | Описание                       |
| --------------- | ------------------------------ |
| `mutesAll`      | Общее количество мутов         |
| `gaurantsAll`   | Общее количество гарантов      |
| `mutesMonth`    | Количество мутов за месяц      |
| `gaurantsMonth` | Количество гарантов за месяц   |
| `mutesToday`    | Количество мутов за сегодня    |
| `bansToday`     | Количество банов за сегодня    |
| `gaurantsToday` | Количество гарантов за сегодня |
