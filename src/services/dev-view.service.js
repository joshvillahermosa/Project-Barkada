/**
 * @file Dev View Service
 * @description Creates 
 */

/**
 * @function createDevButton
 * @description Creates a list of buttons to loop around. This needs to be placed in a [].map function.
 * @param {Object} React The React Object to create the functions
 * @param {Object} Button React Native Button Element
 * @param {String} buttonColor Button color to be used.
 */
const createDevButton = function (React, Button, buttonColor) {
  return function (buttonData, index) {
    return (
      <Button
        backgroundColor={ buttonColor }
        buttonStyle={{ marginBottom: 10 }}
        disabled= { !buttonData.enabled } 
        key={ index }
        large
        title={ buttonData.name } />
    )
  }
}

export { createDevButton }
