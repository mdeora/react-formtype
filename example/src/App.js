import React, { Component } from 'react'

import { 
  FormContainer, 
  ShortTextField, 
  NumberField, 
  DateField, 
  MultipleChoiceFIeld, 
  InformationField,
  SubmitField,
} from 'react-formtype'

const opts = ['Banana', 'Apple', 'Orange', 'Pear']

export default class App extends Component {

  /**
   * onSubmit callback should return true if no errors, or an object of errors of the form
   * { fieldName: [ 'err', 'err1' ], anotherField: [ 'e1', 'e2' ] }
   */
  submit = data => {
    console.log(data)
    return {name: ['error']}
  }

  render () {
    return (
      <FormContainer 
        showProgress={true} 
        onSubmit={this.submit}
        progressStyle={{ innerBar: { backgroundColor: 'black' } }}
      >
        <InformationField 
          title="Hello, Welcome To The Fruit Order Form" 
          description="Ready to start?" 
          nextBtnText="Lets Go"
        />
        <ShortTextField 
          title="First off, what's your name?" 
          name="name" 
          minTextLength={2} 
          required 
        />
        <MultipleChoiceFIeld 
          title="Nice to meet you {{_.name}}, what fruit would you like?" 
          name="fruits" 
          options={opts} 
          multiple
          style={{
            mcfOptionButton: { 
              display: 'inline', width: '15%', marginRight: '20px'
            },
            mcfOptionButtonActive: { 
              borderColor: '#66aef7', color: 'black', fontWeight: 'bold'
            }
          }}
        />
        <NumberField 
          title="How many free oranges do you want?" 
          name="noranges"
          min={0}
          max={10}
          defaultValue={5}
        />
        <DateField 
          title="When would you like your {{_.noranges}} oranges?" 
          name="orrangedate" 
          required
        />
        <SubmitField 
          title="Thanks!" 
          description="You will have your fruit shortly." 
          nextBtnText="Send Form" 
        />
      </FormContainer>
    )
  }
}
