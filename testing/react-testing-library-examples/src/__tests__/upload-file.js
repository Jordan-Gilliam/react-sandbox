import React, {Component} from 'react'
import {render, fireEvent} from '@testing-library/react'

class UploadFile extends Component {
  state = {
    uploadedFileName: null,
  }

  handleUploadFile = e => {
    const file = e.target.files[0]
    this.setState({
      uploadedFileName: file.name,
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="upload-file">Upload File</label>
        <input
          type="file"
          id="upload-file"
          name="upload-file"
          onChange={this.handleUploadFile}
        />
        {this.state.uploadedFileName && (
          <div>
            You have uploaded a file named {this.state.uploadedFileName}
          </div>
        )}
      </div>
    )
  }
}

test('Show the uploaded file name after the user uploads a file', () => {
  const {getByLabelText, getByText, container} = render(<UploadFile />)
  const inputEl = getByLabelText(/upload file/i)

  const file = new File(['(⌐□_□)'], 'chucknorris.png', {
    type: 'image/png',
  })
  fireEvent.change(inputEl, {target: {files: [file]}})

  expect(container).toContainElement(getByText(/chucknorris\.png/))
})
