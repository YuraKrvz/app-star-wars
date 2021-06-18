import UiVideo from '@components/UiVideo';
import video from './video/video.mp4';

export default {
   title: 'ui-Kit/UiVideo',
   component: UiVideo,
};

const Template = args => <UiVideo {...args} />;

const props = {
   src: video,
   classes: 1.0,
   playbackRate: '',
};

export const Default = Template.bind({});
Default.args = {
   ...props,
};