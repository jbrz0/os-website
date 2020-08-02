/*
Usage

import {useExcerpt} from '../../hooks/useExcerpt'

1.
Import or store long text in a variable
const text = 'some really long text'

2.
Call the hook
* Add max words parameter! - default is 30
const excerpt = useExcerpt(text, 50)

3.
Use it anywhere in the component

You can also use it directly in a component, ex:

<p>{ useExcerpt(textVariable) }</p>

<p>{ useExcerpt(`long text string`) }</p>

*/

// Hook

export function useExcerpt(text: string, limit: number = 30): string {

  // store our input text
  let excerpt: string = text

  // count our input text, store input text in an array
  const amount: number = text.split(' ').filter(n => n != '').length
  const words: Array<string> = text.split(' ')

  if (amount > limit) {

    // limit the words in array, join them back as a string
    excerpt = words.slice(0, limit).join(' ') + " ..."
  }

  return excerpt
}
