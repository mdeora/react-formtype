import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShortTextField from '../components/fields/ShortTextField'

Enzyme.configure( { adapter: new Adapter() } )

describe( 'FormField Component', () => {
  it( 'is truthy', () => {
    expect( ShortTextField ).toBeTruthy()
  } )
  test( 'renders', () => {
    const wrapper = shallow( <ShortTextField name="aname" title="atitle" /> )
    expect( wrapper.exists() ).toBe( true )
  } )

  test( 'inputing value updates state', () => {
    const wrapper = mount( <ShortTextField name="aname" title="atitle" /> )
    const input = wrapper.find( '.textfield-input' )

    input.simulate( 'change', { target: { value: '1' } } )
    expect( wrapper.instance().state.value ).toEqual( '1' )
  } )

  test( 'pressing enter calls next method', () => {
    let test = 0
    const wrapper = mount( <ShortTextField name="aname" title="atitle" next={() => { test = 1 }} /> )
    const input = wrapper.find( '.textfield-input' )

    // When enter key is pressed the next function prop should be called
    input.simulate( 'keyPress', { key: 'Enter' } )

    expect( test ).toEqual( 1 )
  } )
} )
