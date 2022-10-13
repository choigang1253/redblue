import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1', //랜덤으로 64x64의 이미지를 보여줌
  'name': '홍석천',
  'birthday': '901222',
  'gender': '남자',
  'job': '회사원'
},
{
  'id' : 2,
  'image': 'https://placeimg.com/64/64/2', //랜덤으로 64x64의 이미지를 보여줌
  'name': '김현석',
  'birthday' : '951022',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image': 'https://placeimg.com/64/64/3', //랜덤으로 64x64의 이미지를 보여줌
  'name': '최현석',
  'birthday' : '920322',
  'gender' : '남자',
  'job' : '요리사'
}] //배열의 형태로 바꿈

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>


    );
  }
}


export default App;
