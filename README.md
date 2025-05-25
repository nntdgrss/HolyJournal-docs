# HolyJournal API Documentation

Сайт: [Открыть документацию](https://nntdgrss.github.io/HolyJournal-docs/)

## О проекте

Документация API для системы HolyJournal - платформы для модерации. API предоставляет программный интерфейс для взаимодействия с системой модерации, проверок и управления персоналом.

## Содержание

- [Начало работы](./docs/get-started.md)
- [API Проверок](./docs/checkouts.md)
- [Получение информации о пользователе](./docs/get-user-info.md)
- [Получение списка персонала](./docs/get-staffs.md)

## Справочники

- [Ранги](./docs/ranks.md)
- [Причины проверок](./docs/checkout-reason.md)
- [Результаты проверок](./docs/checkout-result.md)
- [Причины банов](./docs/checkout-ban-reason.md)

## Примеры использования

Примеры использования API доступны в разделе [API Examples](./docs/api-examples.md).

## Требования

- Node.js 16+

## Локальный запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/nntdgrss/HolyJournal-docs.git
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите локальный сервер разработки:

```bash
npm run docs:dev
```

## Структура проекта

```
.
├── docs/                    # Документация
│   ├── get-started.md      # Начало работы
│   ├── checkouts.md        # API проверок
│   ├── get-user-info.md    # Информация о пользователе
│   ├── get-staffs.md       # Список персонала
│   ├── ranks.md            # Справочник рангов
│   ├── checkout-reason.md  # Причины проверок
│   ├── checkout-result.md  # Результаты проверок
│   └── api-examples.md     # Примеры использования
├── README.md               # Этот файл
└── package.json           # Зависимости проекта
```

## Безопасность

- Храните API токен в безопасном месте
- Не передавайте токен третьим лицам
- При компрометации токена немедленно сгенерируйте новый
- Используйте HTTPS для всех запросов

## Поддержка

Если у вас возникли вопросы или проблемы:

1. Проверьте [документацию](./docs/get-started.md)
2. Посмотрите [примеры использования](./docs/api-examples.md)
3. Создайте issue в этом репозитории

## Лицензия

MIT License.
