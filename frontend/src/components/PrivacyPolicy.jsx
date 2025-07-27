import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50 fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NFc0QSIvPgo8ZGVmcz4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHdoaXRlOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDFweDsgfQo8L3N0eWxlPgo8L2RlZnM+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMjUiIHkyPSIxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE1IiB5MT0iMTUiIHgyPSIxNSIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI1IiB5Mj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxNSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjgiIHkxPSIyMCIgeDI9IjEyIiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyOCIgeTE9IjIwIiB4Mj0iMzIiIHkyPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iOCIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyMCIgeTE9IjI4IiB4Mj0iMjAiIHkyPSIzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTAiIHgyPSIxMyIgeTI9IjEzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjI3IiB5Mj0iMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMzAiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"
                alt="VORTEXHOST Logo" 
                className="w-10 h-10 filter drop-shadow-lg" 
              />
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                VORTEXHOST
              </span>
            </Link>
            <Button 
              onClick={() => window.open('https://bill.vortexhost.pro', '_blank')}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-300 transform hover:scale-105"
            >
              Панель управления
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-gray-300">
                VortexHost LLC
              </p>
            </div>

            <Card className="bg-black/40 border-gray-700/50 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Информация о компании</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p><strong>Компания:</strong> VORTEXHOST LLC</p>
                <p><strong>Регистрационный номер:</strong> 37-8912345</p>
                <p><strong>Адрес:</strong> 251 Little Falls Drive, Wilmington, DE, 19808</p>
                <p><strong>Дата вступления в силу:</strong> 26 июля 2025 года</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-gray-700/50">
              <CardContent className="text-gray-300 space-y-6 p-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
                  <div className="space-y-4">
                    <p><strong>1.1.</strong> Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, использования, хранения и защиты персональных данных Пользователей услуг хостинга игровых серверов Minecraft (далее — «Услуги»), предоставляемых компанией VortexHost (далее — «Провайдер»).</p>
                    <p><strong>1.2.</strong> Использование Услуг подразумевает согласие Пользователя с настоящей Политикой.</p>
                    <p><strong>1.3.</strong> Провайдер оставляет за собой право вносить изменения в Политику, уведомляя Пользователей через сайт Провайдера.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Сбор персональных данных</h2>
                  <div className="space-y-4">
                    <p><strong>2.1.</strong> Провайдер собирает следующие персональные данные Пользователя:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Имя, адрес электронной почты и другие контактные данные, предоставленные при регистрации или оплате Услуг;</li>
                      <li>Платежная информация, необходимая для обработки транзакций (например, данные платежных систем);</li>
                      <li>Технические данные, включая IP-адрес, данные об устройстве, браузере и действиях в панели управления;</li>
                      <li>Данные, загружаемые Пользователем на сервер (например, файлы конфигурации сервера Minecraft).</li>
                    </ul>
                    <p><strong>2.2.</strong> Персональные данные собираются только в объеме, необходимом для предоставления Услуг.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Использование персональных данных</h2>
                  <div className="space-y-4">
                    <p><strong>3.1.</strong> Персональные данные Пользователя используются для:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Предоставления и поддержки Услуг, включая управление сервером и техническую поддержку;</li>
                      <li>Обработки платежей за Услуги;</li>
                      <li>Обеспечения безопасности и предотвращения нарушений;</li>
                      <li>Уведомления Пользователя об обновлениях, изменениях в Услугах или Политике.</li>
                    </ul>
                    <p><strong>3.2.</strong> Провайдер не использует персональные данные для маркетинговых целей без явного согласия Пользователя.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Передача персональных данных</h2>
                  <div className="space-y-4">
                    <p><strong>4.1.</strong> Провайдер не передает персональные данные третьим лицам, за исключением случаев:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Необходимости выполнения требований законодательства Российской Федерации;</li>
                      <li>Обработки платежей через платежные системы, где данные передаются в зашифрованном виде;</li>
                      <li>Технической необходимости, связанной с обслуживанием серверов (например, доступ технического персонала к данным сервера для устранения неполадок).</li>
                    </ul>
                    <p><strong>4.2.</strong> Провайдер принимает меры для обеспечения безопасности передаваемых данных.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Хранение и защита данных</h2>
                  <div className="space-y-4">
                    <p><strong>5.1.</strong> Персональные данные хранятся на защищенных серверах Провайдера в течение срока действия договора на оказание Услуг и в течение 3 лет после его прекращения, если иное не предусмотрено законодательством.</p>
                    <p><strong>5.2.</strong> Провайдер применяет технические и организационные меры для защиты данных от несанкционированного доступа, утраты или повреждения, включая шифрование и ограничение доступа.</p>
                    <p><strong>5.3.</strong> Пользователь несет ответственность за безопасность своих учетных данных (логина и пароля) для доступа к панели управления.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Доступ Пользователя к данным</h2>
                  <div className="space-y-4">
                    <p><strong>6.1.</strong> Пользователь имеет право запросить у Провайдера информацию о собранных персональных данных, их использовании и хранении.</p>
                    <p><strong>6.2.</strong> Для запроса Пользователь должен направить обращение на электронную почту Провайдера, указанную на сайте.</p>
                    <p><strong>6.3.</strong> Провайдер обязуется ответить на запрос в течение 30 календарных дней.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Удаление данных</h2>
                  <div className="space-y-4">
                    <p><strong>7.1.</strong> Пользователь может запросить удаление своих персональных данных, если они больше не нужны для предоставления Услуг.</p>
                    <p><strong>7.2.</strong> После прекращения предоставления Услуг данные сервера и персональные данные Пользователя могут быть удалены без возможности восстановления.</p>
                    <p><strong>7.3.</strong> Провайдер оставляет за собой право сохранять данные, необходимые для соблюдения требований законодательства.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Cookies и аналогичные технологии</h2>
                  <div className="space-y-4">
                    <p><strong>8.1.</strong> Сайт Провайдера может использовать файлы cookie для улучшения работы сайта и панели управления.</p>
                    <p><strong>8.2.</strong> Пользователь может отключить использование cookies в настройках браузера, но это может ограничить функциональность Услуг.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Ответственность</h2>
                  <div className="space-y-4">
                    <p><strong>9.1.</strong> Провайдер не несет ответственности за утрату данных, вызванную действиями Пользователя или третьих лиц, включая несанкционированный доступ из-за утечки учетных данных Пользователя.</p>
                    <p><strong>9.2.</strong> Пользователь обязан немедленно уведомить Провайдера о подозрениях на компрометацию учетных данных.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Форс-мажор</h2>
                  <div className="space-y-4">
                    <p><strong>10.1.</strong> Провайдер не несет ответственности за утрату или разглашение данных, вызванное обстоятельствами непреодолимой силы, включая, но не ограничиваясь, сбоями в работе интернет-провайдеров, хакерскими атаками или стихийными бедствиями.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Заключительные положения</h2>
                  <div className="space-y-4">
                    <p><strong>11.1.</strong> Настоящая Политика регулируется законодательством Российской Федерации.</p>
                    <p><strong>11.2.</strong> Все споры, связанные с Политикой, подлежат разрешению в судебном порядке по месту нахождения Провайдера.</p>
                    <p><strong>11.3.</strong> Если какое-либо положение Политики признано недействительным, остальные положения сохраняют свою силу.</p>
                  </div>
                </section>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link to="/">
                <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                  Вернуться на главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;