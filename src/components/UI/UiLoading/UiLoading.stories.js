import UiLoading from './UiLoading';

export default {
   title: 'Ui-Kit/UiLoading',
   component: UiLoading,

}

const Template = (args) => <UiLoading {...args} />;

export const Primary = Template.bind({});


const props = {
   theme: 'black',
   isShadow: true,
   classes: '',
};
//
export const Black = Template.bind({});
Black .args = {
  ...props,
  theme: 'black',
  isShadow: true,

};
//
export const White = Template.bind({});
White .args = {
  ...props,
  theme: 'white',
  isShadow: true,

};
//
export const Blue = Template.bind({});
Blue .args = {
   ...props,
   theme: 'blue',
   isShadow: true,
 
 };
