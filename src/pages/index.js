import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'

import { ArrowDown, GitHub, Linkedin, Send } from 'react-feather'

import Animated from '../components/animate'

const STAGGER_DURATION = 1.2
const DURATION = 1

export default () => {
  const {
    me: {
      childImageSharp: { fluid },
    },
    gcms: { projects, works },
  } = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gcms: gcms {
        projects {
          title
          url
          start
          end
          tags
        }
        works {
          company
          position
          start
          end
          tags
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
    <div className="relative">
      <div
        className="lg:h-screen animated bg-gradient-to-br from-primary to-accent text-white relative flex items-center"
        style={{ minHeight: 600 }}
      >
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
                transition={{ ease: 'easeOut', duration: DURATION }}
              >
                <h1 className="text-3xl lg:text-6xl font-bold">
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
                transition={{ ease: 'easeOut', duration: DURATION }}
              >
                <h3 className="text-xl lg:text-2xl">Analyst at Deloitte</h3>
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
                        start: { opacity: 0 },
                        end: { opacity: 1 },
                      }}
                      transition={{
                        ease: 'easeOut',
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
              animate={{
                opacity: [0, 1],
                x: [25, 0],
              }}
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
      </div>
      <section className="container mx-auto my-16">
        <h3 className="sticky text-2xl font-bold mb-4 z-50" style={{ top: 5 }}>
          Projects
        </h3>
        {projects.map(({ title, url, tags }, i) => {
          return (
            <Animated key={i} className="shadow p-4 mb-12">
              <h3 className="text-xl lg:text-4xl font-bold break-words">
                {title}
              </h3>
              <a href={url} className="block text-gray-600 mb-4">
                Website
              </a>
              <p className="uppercase text-xs">{tags.join(', ')}</p>
            </Animated>
          )
        })}
        <h3 className="sticky text-2xl font-bold mb-4 z-50" style={{ top: 5 }}>
          Work
        </h3>
        {works.map(({ company, position, tags }, i) => {
          return (
            <Animated key={i} className="shadow p-4 mb-12">
              <h3 className="text-xl lg:text-4xl font-bold break-words">
                {company}
              </h3>
              <p className="text-gray-600 mb-4">{position}</p>
              <p className="uppercase text-xs">{tags.join(', ')}</p>
            </Animated>
          )
        })}
      </section>
      <footer className="py-8 bg-black text-white text-center text-sm">
        <p>Made with &lt;3 by Ryan</p>
      </footer>
    </div>
  )
}
