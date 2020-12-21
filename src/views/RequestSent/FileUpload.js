import PropTypes from 'prop-types';
import React from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
import { Upload, message, Button } from 'antd';
import {UploadOutlined } from '@ant-design/icons';

const FileUpload = ({ ...rest }) => {
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

return(
// ReactDOM.render(
<React.Fragment>
  <Upload {...props}>
    <Button style={{padding: "5px"}} icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  {/* <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>, */}
  </React.Fragment>
//   document.getElementById('container'),
// )
);

};

FileUpload.propTypes = {
    className: PropTypes.string
};
  
export default FileUpload;