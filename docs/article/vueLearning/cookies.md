# cookies

由于 cookies中存储的是string类型，在将数据存入cookies中是，需要首先从json格式转化成string格式。

```javascript
JSON.stringify() //turn json to string
```

同样，当从cookies中读取数据时，也要从string转化成json。

```javascript
JSON.parse() //turn string to json
```

#### js-cookies包的操作

Create a cookie, valid across the entire site:

```
Cookies.set('name', 'value');
```

Create a cookie that expires 7 days from now, valid across the entire site:

```
Cookies.set('name', 'value', { expires: 7 });
```

Create an expiring cookie, valid to the path of the current page:

```
Cookies.set('name', 'value', { expires: 7, path: '' });
```

Read cookie:

```
Cookies.get('name'); // => 'value'Cookies.get('nothing'); // => undefined
```

Read all visible cookies:

```
Cookies.get(); // => { name: 'value' }
```

*Note: It is not possible to read a particular cookie by passing one of the cookie attributes (which may or may not have been used when writing the cookie in question):*

```
Cookies.get('foo', { domain: 'sub.example.com' }); // `domain` won't have any effect...!
```

The cookie with the name `foo` will only be available on `.get()` if it's visible from where the code is called; the domain and/or path attribute will not have an effect when reading.

Delete cookie:

```
Cookies.remove('name');
```

Delete a cookie valid to the path of the current page:

```
Cookies.set('name', 'value', { path: '' });Cookies.remove('name'); // fail!Cookies.remove('name', { path: '' }); // removed!
```

*IMPORTANT! When deleting a cookie and you're not relying on the [default attributes](https://www.npmjs.com/package/js-cookie#cookie-attributes), you must pass the exact same path and domain attributes that were used to set the cookie:*

```
Cookies.remove('name', { path: '', domain: '.yourdomain.com' });
```

*Note: Removing a nonexistent cookie does not raise any exception nor return any value.*




<Valine></Valine>
