import Person from './Person'

const PersonList = () => {
    const people = [
      {
        img: 22,
        name: 'Andrew',
        job: 'Front-end Developer',
      },
      {
        img: 23,
        name: 'James',
        job: 'Project Manager',
      },
      {
        img: 24,
        name: 'Arva',
        job: 'UI/UX Designer',
      },
    ]
  
    return (<section class="content">
      <Person person={people[0]}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore odit 
      molestiae culpa totam aperiam.
      </Person>;
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore odit 
        molestiae culpa totam aperiam.
        </Person>;
        <Person person={people[2]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore odit 
        molestiae culpa totam aperiam.
        </Person>;
    </section>)
  }

export default PersonList