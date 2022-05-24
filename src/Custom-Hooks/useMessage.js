import { message } from 'antd';
export const useMessage=()=>{
    const success = (name) => {
        message.success(`${name} Successfully`);
      };
    const warning = () => {
        message.warning(`The product deleted`);
      }
      return {success,warning}
}