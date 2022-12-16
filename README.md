# Начало
## **Запуск фронта**
в корневой директории

```
npm i
npm run dev
```

По дефолту сервер запускается на порте 3000 https://localhost:3000/

В папке /pages создаются страницы приложения;

Приложения используется вместе в ts, запросы axios;


Директория UI отвечает за переиспользуемые компоненты(Кнопки, блоки, текст, иконки, etc);
****
## Запуск сервера
```
npm i
npm run dev
```
Сервер доступен по https://localhost:5000/;

Директория /server отвечает за запросы приложения

GET - /sellers 
```
{
    "sellers": [
        ...
        {
            id: number, 
            name: string, 
            tag: string
        }, 
    ]
}
```

GET - /total 
```
    {
        "total_offers": {
            volume: number, 
            total: number, 
            percent: number
        }
    }
```

GET - /categories 
```
{
    "categories": [
        ...
        {
            id: number, 
            name: string
        }, 
    ]
}
```

GET - /top 
```
{
    "top": [
        {
            id: number, 
            name: string, 
            tag: string, 
            volume: number, 
            per_day: number, 
            owners: number, 
            items: number, 
            status: string
            }, 
    ]
}
```
