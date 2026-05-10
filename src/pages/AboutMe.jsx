function AboutMe() {
  return (
    <section className="page">
      <h1>Про мене</h1>

      <div className="card">
        <h2>Хто я?</h2>
        <p>
          Мене звати Петро. Я студент, який навчається на спеціальності компютерні наукию
        </p>
        <p>
          Як людина я ціную відповідальність, чесність, розвиток і бажання
          доводити справи до кінця. 
        </p>
      </div>

      <div className="card">
        <h2>Мої цінності, захоплення та навчання</h2>
        <p>
          Мені цікаві комп’ютерні технології, програмування, робота з базами
          даних, створення вебінтерфейсів і вивчення нових інструментів.
        </p>
        <p>
          Під час навчання я працював з HTML, CSS, JavaScript, React, GitHub,
          API-запитами та базовою маршрутизацією у React.
        </p>
      </div>

      <div className="card">
        <h2>Мої проєкти</h2>

        <div className="projects-grid">
          <div className="project-category">
            <h3>HTML + CSS</h3>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              HTML/CSS проєкт №1
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              HTML/CSS проєкт №2
            </a>
          </div>

          <div className="project-category">
            <h3>JavaScript</h3>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              JavaScript проєкт №1
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              JavaScript проєкт №2
            </a>
          </div>

          <div className="project-category">
            <h3>React</h3>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              React проєкт №1
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              React проєкт №2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;