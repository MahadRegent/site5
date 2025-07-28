import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TermsOfService = () => {
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
                Условия предоставления услуг
              </h1>
              <p className="text-xl text-gray-300">
                Договор оферты VortexHost LLC
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
                <p><strong>Email для связи:</strong> <a href="mailto:vortexhost3@gmail.com" className="text-blue-400 hover:text-blue-300 underline">vortexhost3@gmail.com</a></p>
                <p><strong>Дата вступления в силу:</strong> 28 июля 2025 года</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-gray-700/50">
              <CardContent className="text-gray-300 space-y-6 p-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
                  <div className="space-y-4">
                    <p><strong>1.1.</strong> Настоящие Условия предоставления услуг (далее — «Условия») регулируют порядок предоставления услуг хостинга игровых серверов Minecraft (далее — «Услуги») компанией VortexHost (далее — «Провайдер»).</p>
                    <p><strong>1.2.</strong> Использование Услуг подразумевает полное и безоговорочное согласие Пользователя с настоящими Условиями.</p>
                    <p><strong>1.3.</strong> Провайдер оставляет за собой право вносить изменения в Условия в любое время. Пользователь обязан самостоятельно отслеживать обновления на сайте Провайдера.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Описание услуг</h2>
                  <div className="space-y-4">
                    <p><strong>2.1.</strong> Провайдер предоставляет Пользователю доступ к панели управления для настройки и управления игровым сервером Minecraft на условиях, указанных в выбранном тарифном плане.</p>
                    <p><strong>2.2.</strong> Услуги включают предоставление серверных ресурсов, техническую поддержку в рамках заявленных возможностей и доступ к панели управления.</p>
                    <p><strong>2.3.</strong> Провайдер не гарантирует бесперебойную работу серверов, но стремится обеспечить их стабильность и доступность на уровне не ниже 99% в месяц.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Условия оплаты</h2>
                  <div className="space-y-4">
                    <p><strong>3.1.</strong> Услуги предоставляются на условиях предоплаты. Пользователь обязан оплатить выбранный тарифный план до начала использования Услуг.</p>
                    <p><strong>3.2.</strong> После оказания в надлежащем качестве Платной Услуги, деньги, потраченные на ее приобретение, возврату не подлежат. В случае, если услуга не была оказана в полной мере или была оказана в ненадлежащем качестве (баланс личного кабинета не был пополнен или сумма пополнения отличается от расчётной суммы при оплате заказа), заказчик имеет право отказаться от услуги, обратившись по электронной почте <a href="mailto:vortexhost3@gmail.com" className="text-blue-400 hover:text-blue-300 underline">vortexhost3@gmail.com</a>, и получить полную компенсацию ее стоимости либо аналогичную услугу. Срок рассмотрения претензий и возврата средств — 15 рабочих дней. Возврат средств осуществляется тем же способом, что и было проведено пополнение.</p>
                    <p><strong>3.3.</strong> Провайдер оставляет за собой право изменять стоимость тарифных планов, уведомляя Пользователя не менее чем за 7 дней до вступления изменений в силу.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Политика возврата</h2>
                  <div className="space-y-4">
                    <p><strong>4.1.</strong> После оказания в надлежащем качестве Платной Услуги, деньги, потраченные на ее приобретение, возврату не подлежат.</p>
                    <p><strong>4.2.</strong> В случае, если услуга не была оказана в полной мере или была оказана в ненадлежащем качестве (баланс личного кабинета не был пополнен или сумма пополнения отличается от расчётной суммы при оплате заказа), заказчик имеет право отказаться от услуги, обратившись по электронной почте <a href="mailto:vortexhost3@gmail.com" className="text-blue-400 hover:text-blue-300 underline">vortexhost3@gmail.com</a>, и получить полную компенсацию ее стоимости либо аналогичную услугу.</p>
                    <p><strong>4.3.</strong> Срок рассмотрения претензий и возврата средств составляет 15 рабочих дней с момента обращения.</p>
                    <p><strong>4.4.</strong> Возврат средств осуществляется тем же способом, что и было проведено пополнение.</p>
                    <p><strong>4.5.</strong> Пользователь обязан самостоятельно убедиться в соответствии Услуг своим потребностям до совершения оплаты.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Обязанности Пользователя</h2>
                  <div className="space-y-4">
                    <p><strong>5.1.</strong> Пользователь обязуется:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Использовать Услуги в соответствии с законодательством Российской Федерации и настоящими Условиями;</li>
                      <li>Не использовать сервер для распространения вредоносного ПО, проведения DDoS-атак, распространения незаконного контента или иных действий, нарушающих законодательство;</li>
                      <li>Своевременно оплачивать Услуги в соответствии с выбранным тарифным планом.</li>
                    </ul>
                    <p><strong>5.2.</strong> Пользователь несет полную ответственность за действия, совершенные через панель управления, включая настройку сервера и управление им.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Ответственность Провайдера</h2>
                  <div className="space-y-4">
                    <p><strong>6.1.</strong> Провайдер не несет ответственности за:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Потерю данных, вызванную действиями Пользователя или третьих лиц;</li>
                      <li>Убытки, понесенные Пользователем в результате использования или невозможности использования Услуг;</li>
                      <li>Нарушение работы сервера, вызванное действиями третьих лиц, включая хакерские атаки.</li>
                    </ul>
                    <p><strong>6.2.</strong> Провайдер обязуется предоставлять техническую поддержку в рамках заявленных возможностей, но не гарантирует решение всех технических проблем, особенно связанных с настройками, выполненными Пользователем.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Прекращение предоставления Услуг</h2>
                  <div className="space-y-4">
                    <p><strong>7.1.</strong> Провайдер имеет право приостановить или прекратить предоставление Услуг в случае:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Нарушения Пользователем настоящих Условий;</li>
                      <li>Неуплаты за Услуги в установленный срок;</li>
                      <li>Использования сервера для незаконной деятельности.</li>
                    </ul>
                    <p><strong>7.2.</strong> При прекращении предоставления Услуг все данные Пользователя могут быть удалены без возможности восстановления. Провайдер не несет ответственности за потерю данных.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Форс-мажор</h2>
                  <div className="space-y-4">
                    <p><strong>8.1.</strong> Провайдер не несет ответственности за невыполнение обязательств, вызванное обстоятельствами непреодолимой силы, включая, но не ограничиваясь, стихийными бедствиями, сбоями в работе интернет-провайдеров, государственными ограничениями.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Конфиденциальность</h2>
                  <div className="space-y-4">
                    <p><strong>9.1.</strong> Провайдер обязуется не разглашать персональные данные Пользователя, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
                    <p><strong>9.2.</strong> Пользователь соглашается с тем, что данные, размещенные на сервере, могут быть доступны техническому персоналу Провайдера для выполнения работ по поддержке и обслуживанию.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Заключительные положения</h2>
                  <div className="space-y-4">
                    <p><strong>10.1.</strong> Настоящие Условия регулируются законодательством Российской Федерации.</p>
                    <p><strong>10.2.</strong> Все споры, связанные с настоящими Условиями, подлежат разрешению в судебном порядке по месту нахождения Провайдера.</p>
                    <p><strong>10.3.</strong> Если какое-либо положение Условий признано недействительным, остальные положения сохраняют свою силу.</p>
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

export default TermsOfService;