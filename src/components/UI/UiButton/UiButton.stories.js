import UiButton from './UiButton';

export default {
   title: 'Ui-Kit/UiButton',
   component: UiButton,

}

const Template = (args) => <UiButton {...args} />;

export const Primary = Template.bind({});


const props = {
   text: 'hello',
   onClick: ()=>{console.log('btn click')},
   disabled: false,
   theme:'light',
   classes: '',
};
//
export const Light = Template.bind({});
Light.args = {
  ...props,
  theme: 'light',

};
//
export const Dark = Template.bind({});
Dark.args = {
   ...props,
   theme: 'dark',
 
 };
 //
 export const Disabled = Template.bind({});
 Disabled.args = {
   ...props,
   disabled: true,
 
 };
