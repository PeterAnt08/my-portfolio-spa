function MyFuture() {
  return (
    <section className="page">
      <h1>Мій розвиток</h1>

      <div className="card">
        <h2>Ким я хочу стати?</h2>
        <p>
          У майбутньому я хочу розвиватися як frontend-розробник або
          fullstack-розробник. Мені цікаво створювати зручні сайти,
          вебдодатки та інтерфейси, якими можуть користуватися реальні люди.
        </p>
      </div>

      <div className="card">
        <h2>3 кроки в майбутнє</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span>1</span>
            <div>
              <h3>Покращити знання JavaScript</h3>
              <p>
                Добре розібратися з функціями, масивами, об’єктами,
                асинхронним кодом, fetch-запитами та роботою з API.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>2</span>
            <div>
              <h3>Вивчити React глибше</h3>
              <p>
                Навчитися краще працювати з компонентами, props, useState,
                useEffect, React Router та структурою великих проєктів.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>3</span>
            <div>
              <h3>Створити власне портфоліо</h3>
              <p>
                Зібрати навчальні проєкти на GitHub, оформити README та
                показати свої навички майбутньому роботодавцю.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Робота мрії</h2>
        <p>
          Моя робота мрії — це команда, де можна створювати корисні цифрові
          продукти, розвиватися, працювати з сучасними технологіями та
          постійно покращувати свої навички.
        </p>
      </div>

      <div className="quote">
        “Кожен професіонал колись був початківцем.”
      </div>
    </section>
  );
}

export default MyFuture;