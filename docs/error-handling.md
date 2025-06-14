# Обработка ошибок

## Содержание

- [Введение](#введение)
- [Ошибка авторизации / Unauthorized](#ошибка-авторизации-/-Unauthorized)
- [Ошибки связанные с проверками](#ошибки-связанные-с-проверками)
- [Ошибки связанные с получением данных о пользователе](#ошибки-связанные-с-получением-данных-о-пользователе)
- [Ошибки связанные с получением данных о персонале](#ошибки-связанные-с-получением-данных-о-персонале)
- [Internal Server Error](#internal-server-error)
- [Bad Gateway](#bad-gateway)

## Введение

Ошибки можно получать по разным причинам, это может быть как ошибка валидации, так и ошибка с Body или иными причинами.

## Ошибка авторизации / Unauthorized

```
Код ошибки: 401
```

Ошибка авторизации случается в случае когда:

- Отсутствует **API Токен**
- **API токен** не действителен

### **Как выглядет ошибка:**

```json
{
  "message": "Невалидный токен",
  "error": "Unauthorized",
  "statusCode": 401
}
```

### Как исправить?

- Проверьте наличие заголовка `x-token` в вашем коде при обращении к API
- Проверьте актуальность API токена, он мог быть сброшен

## Ошибки связанные с проверками

todo: write

## Ошибки связанные с получением данных о пользователе

todo: write

## Ошибки связанные с получением данных о персонале

todo: write

## Internal Server Error

```
Код ошибки: 500
```

Ошибка сервера происходит по таким причинам:

- Внутреняя ошибка сервера _(см. ниже)_

### **Как выглядет ошибка:**

```json
{
  "message": "Internal Server Error",
  "statusCode": 500
}
```

::: warning ОБРАТИТЕ ВНИМАНИЕ
Когда вы видете ошибку 500, это значит что на сервере произошла непредвиденная ошибка, рекомендуется обратится куратору или [разработчику](https://vk.com/ninetydegreess) и предоставить стэк ошибки.
:::

### Как исправить?

В этом случае сообщите разработчику или куратору о найденной ошибке.

Ещё одна причина может быть - недоступность сервиса базы данных и кеша. Такой случай редкий, ещё не случался, но может быть.

## Bad Gateway

```
Код ошибки: 502
```

Ошибка Bad Gateway происходит когда:

- Сервер не доступен
- Сервер перезагружается
- Сервер перенагружен и не отвечает

### Как исправить?

Данная ошибка не имеет конкретного исправления, вам стоит лишь подождать и попробовать снова позже, обычно **Bad Gateway** происходит во время обновления журнала, что длиться примерно 5 минут. Если ошибка длиться больше чем 5 минут, уточните вопрос у куратора.

## Too Many Requests

```
Код ошибки: 429
```

Ошибка **Too Many Requests** происходит когда вы отправили более чем `50` запросов в минуту.

### **Как выглядет ошибка:**

```json
{
  "statusCode": 429,
  "message": "ThrottlerException: Too Many Requests"
}
```

### Как исправить?

Вы исчерпали лимит запросов в минуту, подождите следующей минуты(Минута начинаётся с вашего первого запроса) и попробуйте снова.
