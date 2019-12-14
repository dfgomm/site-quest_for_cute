
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import blogStyles from '../components/modules/blog.module.css'

const BlogNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
      allWordpressPost (sort: {fields:date, order:DESC}) {
        edges {
          node {
            title
            slug
            content
            date(formatString: "YYYY-MM")
          }
        }
      }
    }
    `)
  //fetch dates
  var dateArray = [];
  for (let i = 1; i <= data.allWordpressPost.edges.length; i++) {
    let dates = data.allWordpressPost.edges[i - 1].node.date
    dateArray.push(dates)
  }

  //filter out duplicates of month and year for archive navigation
  const datesSet = new Set(dateArray)
  const dates = [...datesSet]

  return (

    <div className={blogStyles.blogNav_container}>
      <h2>Recent Posts</h2>
      <ol>
        {data.allWordpressPost.edges.map((edge, i) => {

          if (i < 5) {
            return (
              <div className={blogStyles.blogNavList_container}>
                <li className={blogStyles.blogNav_list}>
                  <h3><Link to={`/blog/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.title }}></Link></h3>
                </li>
              </div>
            )
          }
        })}
      </ol>
      <h2>Archive</h2>
      <ol>
        {data.allWordpressPost.edges.map((edge, i) => {
          console.log(dates[i])
          let date = edge.node.date

          //Slices the year off of the date connecting slug and information in navbar
          let yearInt = dates[0].slice(0, 4)

          //Slices the month off of the date coneccting slug and information in navbar
          let monthIntWithZero = dates[0].slice(5, 8)

          //Removes zero from months lower than 10 (10 is october and we want the zero present for that month to be able to locate it in the months array)
          if (monthIntWithZero < 10) {
            var monthInt = monthIntWithZero.replace("0", "")
          } else {
            var monthInt = monthIntWithZero
          }

          let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]

          //Fetches month from number
          let arrayOffset = 1
          let monthFormatted = months[monthInt - arrayOffset]

          let archivedDate = monthFormatted + ' ' + yearInt

          if (i < 12) {
            return (
              <div className={blogStyles.blogNavList_container}>
                <li className={blogStyles.blogNav_list}>
                  <h3><Link to={`/blog/${dates[i]}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: archivedDate }}></Link></h3>
                </li>
              </div>
            )
          }
        })}
      </ol>
      <h2>Categories</h2>
      <ol>
        {data.allWordpressCategory.edges.map((edge, i) => {
          return (
            <div className={blogStyles.blogNavList_container}>
              <li className={blogStyles.blogNav_list}>
                <h3><Link to={`/blog/category/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.name }}></Link></h3>
              </li>
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default BlogNav