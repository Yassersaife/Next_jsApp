import sporter from '@/images/projects/1.png'
import line from '@/images/projects/2.png'
import app from '@/images/projects/app.jpg'
import pos from '@/images/projects/pos.png'
import oip from '@/images/projects/OIP.jpg'
import Waddili from '@/images/projects/Waddili.png'
import  task from '@/images/projects/task1.png'
import  taskapp from '@/images/projects/taskapp.jpeg'
import  flutter from '@/images/projects/flutter.png'


const data = [
{
    title: 'Austath Fanan App',
    description:
'The platform provides simplified and comprehensive explanations of the curriculum in an innovative and effective manner for all grades.',
    techUsed: ['Flutter ', 'Laravel PHP'],
    image: flutter,
    play: 'https://play.google.com/store/apps/details?id=com.austath_fanan_app',
  },
  {
    title: 'Waddili App',
    description:'I designed an application using React Native for a company, according to the required UI/UX specifications.    ',
    techUsed: ['React Native '],
    image: Waddili,
    
  },
  {
    title: 'Management Expenses',
    description:'The application described is a simple expense management application that allows users to view, add, edit, and delete expenses, and it displays them in a chart  ',
    techUsed: ['React js', 'Firebase ','Tailwind css'],
    image: task,
    github: 'https://github.com/Yassersaife/Expenses-Web',
  },
 
  {
    title: 'Sporter App',
    description:
      'It is an app for fitness solutions where people can book personal training sessions with two qualified trainers. The app has lots of workout videos for different fitness levels, and it also has a bunch of healthy recipes with cooking instructions and nutrition info. Users can keep track of how many calories they eat and burn, stay motivated, and see their progress with detailed stats. Trainers have their own dashboard to easily handle bookings, schedules, and even add their own workout videos and meal plans.',
    techUsed: ['React native', 'Spring boot '],
    image: sporter,
    link: 'https://www.youtube.com/watch?v=fU4LLCe_n2s',
    github: 'https://github.com/Yassersaife/my_app',
  },
  {
    title: 'Tsunami Phone',
    description:
      'an e-commerce application for selling mobile phones,and build in apk file.',
    techUsed: ['React Native','Firebase'],
    image: app,
        link: '',
    github: 'https://github.com/Yassersaife/Tsunami.App',
  },
  {
    title: 'Management Expenses app',
    description:'The application described is a simple expense management application that allows users to view, add, edit, and delete expenses, and it displays them in a chart  ',
    techUsed: ['React Native'],
    image: taskapp,
    github: 'https://github.com/Yassersaife/ExpensesApp',
  },
  {
    title: 'Automated assembly line',
    description:
      'which assemble two separate component and produce a final product After examining the pieces to make sure they are not damaged depending on the shape and color.',
    techUsed: ['C++'],
    image: line,
    link: 'https://www.youtube.com/watch?v=6QFtRCVXVK4',
    github: 'https://github.com/Yassersaife/Arm_robot',
  },

]

export default data
