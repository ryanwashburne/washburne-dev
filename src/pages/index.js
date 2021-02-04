import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'

import { ArrowDown, GitHub, Linkedin, Send } from 'react-feather'

import SEO from '../components/seo'
import Navbar from '../components/navbar'

const STAGGER_DURATION = 0.7
const DURATION = 1

export default () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query IndexPage {
      file(relativePath: { eq: "me.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const contact = [
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/ryanwashburne',
    },
    {
      icon: GitHub,
      url: 'https://github.com/ryanwashburne',
    },
    {
      icon: Send,
      url: 'mailto:ryan.washburne@gmail.com?subject=Hello!',
    },
  ]

  return (
    <main>
      <SEO keywords={[`ryan`, `washburne`, `portfolio`]} title="Home" />
      <Navbar />
      <section className="py-32 lg:py-0 h-screen animated bg-gradient-to-br from-primary to-accent text-white relative flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <div className="flex items-center justify-center text-center lg:text-left">
            <motion.div
              variants={{
                start: {
                  transition: {
                    staggerChildren: STAGGER_DURATION,
                  },
                },
                end: {
                  transition: {
                    staggerChildren: STAGGER_DURATION,
                  },
                },
              }}
              initial="start"
              animate="end"
            >
              <motion.div
                variants={{
                  start: { opacity: 0, x: -25 },
                  end: { opacity: 1, x: 0 },
                }}
                transition={{ ease: 'easeInOut', duration: DURATION }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-200 to-orange-300">
                    Ryan Washburne
                  </span>
                </h1>
              </motion.div>

              <motion.div
                variants={{
                  start: { opacity: 0, x: -25 },
                  end: { opacity: 1, x: 0 },
                }}
                transition={{ ease: 'easeInOut', duration: DURATION }}
              >
                <h4 className="text-xl lg:text-2xl">Analyst at Deloitte</h4>
              </motion.div>

              <motion.div
                variants={{
                  start: {
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: STAGGER_DURATION * 2,
                    },
                  },
                  end: {
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: STAGGER_DURATION * 2,
                    },
                  },
                }}
                initial="start"
                animate="end"
                className="mt-4 flex items-center justify-center lg:justify-start"
              >
                {contact.map(({ icon: Icon, url }, i) => {
                  return (
                    <motion.div
                      key={i}
                      variants={{
                        start: { opacity: 0, visibility: 'hidden' },
                        end: { opacity: 1, visibility: 'visible' },
                      }}
                      transition={{
                        ease: 'easeInOut',
                        duration: DURATION,
                      }}
                      className="mr-4 text-white"
                    >
                      <a href={url} target="_blank" rel="noreferrer">
                        <div className="h-8 w-8 flex justify-center items-center border rounded text-white hover:text-gray-400 transition duration-300">
                          <Icon size={18} />
                        </div>
                      </a>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
          <div className="flex items-center">
            <motion.div
              variants={{
                start: {
                  opacity: 0,
                  x: 25,
                },
                end: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="start"
              animate="end"
              transition={{
                delay: STAGGER_DURATION * 2,
                duration: DURATION,
                ease: 'easeInOut',
              }}
              className="w-full"
            >
              <Image fluid={fluid} className="shadow-2xl" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center pb-8">
          <motion.div
            animate={{ y: [0, 10] }}
            transition={{
              duration: DURATION,
              yoyo: Infinity,
              ease: 'easeInOut',
            }}
            className="hidden lg:flex items-center justify-center"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </section>
      {/* Porfolio */}
      <section className="pb-6 pt-8" />
      {/* <section className="py-32">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-16 z-50">Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-32">
            {[].map(({ title, url, tags }, i) => {
              return (
                <Animate key={i}>
                  <div className="shadow p-6 mb-12 bg-white">
                    <h3 className="text-lg lg:text-xl break-words">{title}</h3>
                    <p className="mb-4 mt-2">
                      <a href={url} className="text-gray-600">
                        Website
                      </a>
                    </p>
                    <p className="uppercase text-xs">{tags.join(', ')}</p>
                  </div>
                </Animate>
              )
            })}
          </div>
          <h3 className="text-2xl font-bold mb-4 z-50">Work</h3>
          {[].map(({ company, position, tags }, i) => {
            return (
              <Animate key={i}>
                <div className="shadow p-4 mb-12 bg-white text-black rounded">
                  <h4 className="text-xl lg:text-4xl font-bold break-words bg-clip-text text-transparent bg-gradient-to-br bg-clip-text text-transparent from-primary-light to-accent-light">
                    {company}
                  </h4>
                  <p className="text-gray-600 mb-4">{position}</p>
                  <p className="uppercase text-xs">{tags.join(', ')}</p>
                </div>
              </Animate>
            )
          })}
        </div>
      </section> */}
    </main>
  )
}
