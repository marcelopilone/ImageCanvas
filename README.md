# Image Canvas Component
The image-canvas component is a Stencil.js-based web component that allows you to create a canvas with background images and various types of content, such as text and images. This component provides an easy way to customize and display content on a canvas within your web application.

# Usage
To use the image-canvas component in your project, follow these steps:

Install the Stencil.js library if you haven't already:
bash

npm install @stencil/core
# Import the necessary classes and types:


import { Component, Prop, State, Element } from '@stencil/core';
import { ContentDataImg, ContentDataText } from '../type';
Define the image-canvas component using the @Component decorator:


@Component({
  tag: 'image-canvas',
  styleUrl: 'image-canvas.css', // Include your CSS file
})
export class ImageCanvas {
  // Component logic goes here
}
Within the ImageCanvas class, define the properties and methods:


export class ImageCanvas {
  @Element() el: HTMLElement;

  @Prop() bgImg!: string;
  @Prop() wCanvas: number;
  @Prop() hCanvas: number;
  @Prop() canvasFillStyle: string = 'black';
  @Prop() fontCanvas: string = 'bold 12px Arial';
  @Prop() content: ContentDataText[] | ContentDataImg[];
  @State() imgLoading = true;
  private canvas: HTMLCanvasElement;

  // Other methods and lifecycle hooks go here
}
# Implement the componentWillLoad lifecycle hook to create the canvas and load the background image:


export class ImageCanvas {
  componentWillLoad() {
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas);
    this.el.appendChild(this.canvas);

    const img = new Image();
    img.addEventListener('load', () => {
      this.imgLoading = false;
      const ctx = this.canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      this.__loadData();
    });

    img.src = this.bgImg;
  }

  // Other methods and lifecycle hooks go here
}
Implement the __createCanvas method to create the canvas element:


export class ImageCanvas {
  // ...

  __createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.height = this.hCanvas;
    canvas.width = this.wCanvas;
    return canvas;
  }

  // ...
}
Implement the __loadData method to populate the canvas with content:


export class ImageCanvas {
  // ...

  __loadData() {
    const ctx = this.canvas.getContext('2d');
    const data = this.content;

    data.forEach(item => {
      if (item.type === 'text') {
        const iText = item as ContentDataText;
        ctx.fillStyle = iText.style || this.canvasFillStyle;
        ctx.font = iText.font || this.fontCanvas;
        ctx.fillText(item.any_string, item.x, item.y);
      }
      if (item.type === 'image') {
        const imgData = new Image();
        imgData.src = item.any_string;
        imgData.onload = function () {
          ctx.drawImage(imgData, item.x, item.y, item.width, item.height);
        };
      }
    });
  }

  // ...
}
# Properties
bgImg: Background image URL.
wCanvas: Width of the canvas.
hCanvas: Height of the canvas.
canvasFillStyle: Fill style for canvas elements.
fontCanvas: Font style for canvas text elements.
content: An array of content items, including text and image data.
Lifecycle Hooks
componentWillLoad: Initializes the canvas and loads the background image.
Note
This README provides a basic overview of the image-canvas component and how to use it. Make sure to adapt the component to your specific use case and integrate it into your application accordingly.