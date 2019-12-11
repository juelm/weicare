import React, { Component } from 'react';
import {pageStyle} from '../styles.js';
import PhotoPane from './PhotoPane.js'


/**

 */
class HomePage extends Component {

  getStyle = () => ({
    margin: '150px auto 20px auto',
    //background: 'white'
    //padding: '170px 170px 20px auto',
    //display: 'block'
    //clear: 'both'
  });

  render() {

    return (
      <div style={pageStyle()}>
        <p style = {{margin: '0px 20% 0px 20%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla a erat vel volutpat. Donec porta ligula felis, at scelerisque mi egestas sed. Aenean rhoncus, enim sit amet faucibus mattis, erat justo scelerisque mi, at faucibus odio enim in felis. Aliquam maximus tempor risus sed iaculis. Praesent finibus nec eros non pellentesque. In fringilla lectus non tellus suscipit sodales. Sed at libero id ipsum interdum facilisis. Suspendisse vitae arcu ex. Etiam vitae odio at tortor convallis sagittis quis vel quam. Sed facilisis quis risus vel gravida. Nulla a pulvinar velit. Sed quis pellentesque sem. Donec pharetra vel lectus at vehicula. Nam massa dui, porta non massa eu, sollicitudin vestibulum nulla.

          Praesent et dolor viverra, vehicula odio vitae, aliquam dui. Praesent ac eleifend odio. Nam feugiat sodales augue, id iaculis urna scelerisque id. Duis dapibus dapibus lacus, sed tristique est aliquam eu. Vivamus sit amet faucibus nisi. Cras dictum mauris nibh, eget vulputate est consequat eu. Duis tempus at est eget placerat. Praesent aliquam nibh non eros mollis bibendum. Aenean vel commodo erat. Vestibulum augue urna, rhoncus a viverra vel, tincidunt non lectus. Suspendisse sit amet porta erat. Fusce id tellus vitae odio volutpat volutpat nec ut neque. Sed ullamcorper maximus leo, faucibus dapibus enim laoreet id.

          Nullam quis libero non dui lobortis interdum eget sed magna. Curabitur eget justo nec urna sagittis viverra at eget tortor. Proin laoreet fermentum felis vitae porttitor. Praesent sit amet accumsan eros, vitae varius justo. Curabitur arcu est, tempor ut urna consectetur, dictum rhoncus dolor. Praesent consequat justo libero. Ut faucibus lectus at dui varius, ut congue tortor consequat. Quisque non justo luctus, tincidunt eros eget, finibus dolor. Nunc id ex consequat diam elementum convallis. Ut bibendum commodo justo sit amet pulvinar. Vestibulum suscipit odio pharetra velit pellentesque dictum.

          Aenean tincidunt, velit eget posuere malesuada, enim ligula volutpat dui, non facilisis turpis tellus eget sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat, dui vel dapibus dapibus, sapien nisl sagittis neque, vel ullamcorper metus tortor vel elit. In quis lorem nec dui commodo venenatis eu quis lacus. Curabitur non sem eu enim pretium molestie. Proin metus diam, facilisis quis orci in, venenatis semper velit. Donec tempor non sapien ut molestie. Aenean vulputate tincidunt faucibus. Nunc a sem sit amet ipsum lobortis efficitur ut sit amet nulla. Suspendisse potenti. Suspendisse vulputate magna vitae quam volutpat lobortis. Vivamus varius lobortis lectus sit amet pharetra. Donec risus est, porta non consectetur a, pulvinar eget eros. Sed id ligula ex. Curabitur vel volutpat arcu.

          In congue diam quis augue mollis, laoreet lacinia elit consequat. Donec laoreet odio ut tortor vehicula sodales. Pellentesque sollicitudin scelerisque tellus. Nunc vitae risus dictum, dictum tortor vel, vestibulum augue. Praesent dignissim, magna sed vehicula convallis, sapien dui pretium magna, quis pellentesque nunc mi ut tellus. Pellentesque hendrerit nunc ut mi placerat blandit. Suspendisse lacinia elit erat, eu venenatis dui congue sit amet. Suspendisse eu diam lobortis massa ullamcorper mattis eget nec nunc. Morbi dictum, dolor quis tempus consequat, ipsum tortor aliquet urna, ut varius diam ipsum ac felis. Curabitur velit nisl, vulputate non hendrerit quis, consectetur a neque. Etiam fringilla mi erat, ac maximus lectus scelerisque interdum. Vestibulum rhoncus in tortor posuere volutpat. Etiam eget lectus ut nibh hendrerit volutpat. Ut varius vestibulum turpis, quis vehicula ligula luctus in.</p>
      

        <p style = {{margin: '0px 20% 0px 20%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla a erat vel volutpat. Donec porta ligula felis, at scelerisque mi egestas sed. Aenean rhoncus, enim sit amet faucibus mattis, erat justo scelerisque mi, at faucibus odio enim in felis. Aliquam maximus tempor risus sed iaculis. Praesent finibus nec eros non pellentesque. In fringilla lectus non tellus suscipit sodales. Sed at libero id ipsum interdum facilisis. Suspendisse vitae arcu ex. Etiam vitae odio at tortor convallis sagittis quis vel quam. Sed facilisis quis risus vel gravida. Nulla a pulvinar velit. Sed quis pellentesque sem. Donec pharetra vel lectus at vehicula. Nam massa dui, porta non massa eu, sollicitudin vestibulum nulla.

          Praesent et dolor viverra, vehicula odio vitae, aliquam dui. Praesent ac eleifend odio. Nam feugiat sodales augue, id iaculis urna scelerisque id. Duis dapibus dapibus lacus, sed tristique est aliquam eu. Vivamus sit amet faucibus nisi. Cras dictum mauris nibh, eget vulputate est consequat eu. Duis tempus at est eget placerat. Praesent aliquam nibh non eros mollis bibendum. Aenean vel commodo erat. Vestibulum augue urna, rhoncus a viverra vel, tincidunt non lectus. Suspendisse sit amet porta erat. Fusce id tellus vitae odio volutpat volutpat nec ut neque. Sed ullamcorper maximus leo, faucibus dapibus enim laoreet id.

          Nullam quis libero non dui lobortis interdum eget sed magna. Curabitur eget justo nec urna sagittis viverra at eget tortor. Proin laoreet fermentum felis vitae porttitor. Praesent sit amet accumsan eros, vitae varius justo. Curabitur arcu est, tempor ut urna consectetur, dictum rhoncus dolor. Praesent consequat justo libero. Ut faucibus lectus at dui varius, ut congue tortor consequat. Quisque non justo luctus, tincidunt eros eget, finibus dolor. Nunc id ex consequat diam elementum convallis. Ut bibendum commodo justo sit amet pulvinar. Vestibulum suscipit odio pharetra velit pellentesque dictum.

          Aenean tincidunt, velit eget posuere malesuada, enim ligula volutpat dui, non facilisis turpis tellus eget sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat, dui vel dapibus dapibus, sapien nisl sagittis neque, vel ullamcorper metus tortor vel elit. In quis lorem nec dui commodo venenatis eu quis lacus. Curabitur non sem eu enim pretium molestie. Proin metus diam, facilisis quis orci in, venenatis semper velit. Donec tempor non sapien ut molestie. Aenean vulputate tincidunt faucibus. Nunc a sem sit amet ipsum lobortis efficitur ut sit amet nulla. Suspendisse potenti. Suspendisse vulputate magna vitae quam volutpat lobortis. Vivamus varius lobortis lectus sit amet pharetra. Donec risus est, porta non consectetur a, pulvinar eget eros. Sed id ligula ex. Curabitur vel volutpat arcu.

          In congue diam quis augue mollis, laoreet lacinia elit consequat. Donec laoreet odio ut tortor vehicula sodales. Pellentesque sollicitudin scelerisque tellus. Nunc vitae risus dictum, dictum tortor vel, vestibulum augue. Praesent dignissim, magna sed vehicula convallis, sapien dui pretium magna, quis pellentesque nunc mi ut tellus. Pellentesque hendrerit nunc ut mi placerat blandit. Suspendisse lacinia elit erat, eu venenatis dui congue sit amet. Suspendisse eu diam lobortis massa ullamcorper mattis eget nec nunc. Morbi dictum, dolor quis tempus consequat, ipsum tortor aliquet urna, ut varius diam ipsum ac felis. Curabitur velit nisl, vulputate non hendrerit quis, consectetur a neque. Etiam fringilla mi erat, ac maximus lectus scelerisque interdum. Vestibulum rhoncus in tortor posuere volutpat. Etiam eget lectus ut nibh hendrerit volutpat. Ut varius vestibulum turpis, quis vehicula ligula luctus in.</p>
      </div>
    );
  }
}


export default HomePage;
