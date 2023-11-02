---
title: AAA
date: 2015-05-28
---

## Quote

> Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.
> - kkk
> + item1
> + item2
>   + item3
>   + item4
> + item4
>
> ```mycode```
> Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.
> 
> &mdash;&mdash; hikaru

----- 
+ item1
  + subitem1
  + subitem2
+ Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.
+ item3
  + asdf


1. item1
   + subitem1
   + subitem2
2. item2
3. item3
   1. asdf


## GFM

### Autolink literals

www.example.com, https://example.com, and contact@example.com.

### Footnote

A note[^1]

[^1]: Big note.

### Strikethrough

~one~ or ~~two~~ tildes.

### Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |


|제목 셀1|제목 셀2|제목 셀3|제목 셀4|
|--|:--:|:--|--:|
|내용 1|내용 2|내용 3|내용 4|
|내용 5|내용 6|내용 7|내용 8|
|내용 9|내용 10|내용 11|내용 12|

### Tasklist

* [ ] to do
* [x] done



## Test 

> hFar far away, behind the word mountains, $$\log{N} \geq \sum{N}$$

```inlinecode```, ```inlinecode with lang{:js}```

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.


### Test

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.

#### Test

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.

##### Test

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.

###### Test

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.




## Code Syntax Highlight Test


```cpp title="main.cpp" caption="adsf" showLineNumbers{1} {1,3-4} 
#include <iostream>
using namespace std;
void main()
{
  int a = 0;
  cout << a << endl;
}
```

```cout{:.a}``` is good

```c# {1-3,4} showLineNumbers /Hello/
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

```js /age/#v /name/#v /setAge/#s /setName/#s /50/#i /'Taylor'/#i
const [age, setAge] = useState(50);
const [name, setName] = useState('Taylor');
```

```cpp title="main.cpp" caption="adsf" showLineNumbers{1} {2-3,5} 
#include <iostream>
using namespace std;
void main()
{
  int a = 0;
  cout << a << endl;
}
```

```cpp
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main() {
    srand(time(0));  // Seed the random number generator with current time
    int secretNumber = rand() % 100 + 1;  // Generate a random number between 1 and 100
    int guess;
    int tries = 0;

    cout << "Welcome to the Guess the Number game!" << endl;
    cout << "I'm thinking of a number between 1 and 100. Can you guess it?" << endl;

    do {
        cout << "Enter your guess: ";
        cin >> guess;
        tries++;

        if (guess < secretNumber) {
            cout << "Too low! Try again." << endl;
        } else if (guess > secretNumber) {
            cout << "Too high! Try again." << endl;
        } else {
            cout << "Congratulations! You guessed the number " << secretNumber << " in " << tries << " tries." << endl;
        }
    } while (guess != secretNumber);

    return 0;
}

```

한글입니다.

https://delba.dev/blog/next-blog-build-time-syntax-highlighting
https://rehype-pretty-code.netlify.app/
https://www.mridul.tech/blogs/how-to-use-scss-with-tailwind-in-next-js
https://tailwindcss.com/docs/using-with-preprocessors
https://www.mridul.tech/blogs/how-to-use-scss-with-tailwind-in-next-js