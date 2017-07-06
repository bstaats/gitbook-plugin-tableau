# Embedded Tableau Views
A Gitbook plugin for embedding Tableau visualizations using the [Tableau Javascript API](https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm).

# Install
Modify your book.json by adding `tableau` to plugins
```
{
    "plugins": ["tableau"]
}
```


# Usage
```
{% tableau "https://public.tableau.com/views/Visual/Principles" %}
  {"hideTabs":true,
   "hideToolbar":true,
   "width": "100%",
   "height": "100%",
   "onFirstInteractive": "function(){console.log('Run this code when the viz has finished loading.');}"}  
{% endtableau %}
```

##### Default Options
See the [full list](https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm) of available options

```JSON
{"hideTabs":true,
 "hideToolbar":true,
 "width": "100%",
 "height": "100%"}
 ```


##### Caveats
* Make sure the body of the block is valid JSON

##### TODO
* Make the defaults configurable
* Allow passing an account token to the Tableau api
