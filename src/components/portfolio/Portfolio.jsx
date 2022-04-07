import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/code.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1 Lorem ipsum dolor sit',
    github: 'https://github.com/Daniel-dadu/',
    demo: 'https://github.com/Daniel-dadu/my-portfolio'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Project 2 Lorem ipsum dolor sit',
    github: 'https://github.com/Daniel-dadu/',
    demo: 'https://github.com/Daniel-dadu/my-portfolio'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Project 3 Lorem ipsum dolor sit',
    github: 'https://github.com/Daniel-dadu/',
    demo: 'https://github.com/Daniel-dadu/my-portfolio'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Project 4 Lorem ipsum dolor sit',
    github: 'https://github.com/Daniel-dadu/',
    demo: 'https://github.com/Daniel-dadu/my-portfolio'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio