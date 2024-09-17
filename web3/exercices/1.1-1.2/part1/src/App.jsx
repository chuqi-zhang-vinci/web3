import './App.css'
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
     <Part part = {props.part1} ciffer = {props.ciffer1}/>
     <Part part = {props.part2} ciffer = {props.ciffer2}/>
     <Part part = {props.part3} ciffer = {props.ciffer3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>total : {props.total}</p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.ciffer}</p>
    </div>
    
  )
}













const App = () => {
  const course = 'Half Stack application development';

  const ciffer1 = 10;
  const ciffer2 = 7;
  const ciffer3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1='Fundamentals of React' ciffer1= {10} part2='Using props to pass data' ciffer2= {7} part3='State of a component' ciffer3= {14}/>
      <Total total={ciffer1 + ciffer2 + ciffer3}/>
    </div>
  )
}

export default App