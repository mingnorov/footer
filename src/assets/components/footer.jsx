import React from 'react'

const footer = () => {
  return (
<div>
          <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-xl font-bold">🛒</span>
            </div>
            <span className="text-lg font-semibold">1C-Товары</span>
          </div>

          <p className="text-sm mb-1">Линия консультации</p>
          <p className="text-lg font-bold">+7(495)-111-00-10</p>

          <p className="mt-4 text-sm mb-1">Наш e-mail</p>
          <p className="text-green-400 font-medium">info@rozn.info</p>

          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium">
            Заказать звонок
          </button>

          <p className="mt-4 text-sm">
            Для активации перейдите на
            <a href="https://portal.1c.ru" className="text-green-400 ml-1 underline">
              portal.1c.ru
            </a>
            или обратитесь к Вашему партнеру 1С.
          </p>

          <p className="text-sm mt-2">Инструкция по установке сервиса</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Информация</h3>
          <ul className="space-y-2 text-sm">
            <li>Как это работает</li>
            <li>Инструкции</li>
            <li>Блог</li>
            <li>О нас</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Продукты</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-green-400">1С-Ритейл Чекер Демо</li>
            <li>1С-Товары.Тестовый для магазина на 1 месяц</li>
            <li>1С-Ритейл Чекер</li>
            <li>1С-Товары 300</li>
            <li>1С-Товары 30000</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>1C-Товары © 2023</p>
        <p>
          Сайт создан –{' '}
          <a
            href="https://wtstudio.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            wtstudio.ru
          </a>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default footer