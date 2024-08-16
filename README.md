This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

В проекте была созданы следующие страницы: главная, авторизация, регистрация и страница избранных треков. Реализована подгрузка всех треков из API. Стили декомпозированы покомпонентно и используют CSS-модули. Глобальные стили размещены в globals.css. Также добавлена возможность фильтровать треки, изменять порядок а также искать по названию. Добавлены страницы подборок с треками этих подборок и одним общим Layout. Есть функция лайкать и убирать лайки трекам авторизованным пользователям. Добавлены тесты, проверяющие функциональность компонентов и функций. В плеере реализована функция управления треками, воспроизведение, повтор, перемешивание, изменение текущего времени в воиспреведении трека, а также изменение громкости.
