# Embedded Tableau Views
A Gitbook plugin for embedding Tableau visualizations using the [Tableau Javascript API](https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm).

# Supported features
##### URL Parameters
Defaults:
```
parameters='showVizHome=no&display_spinner=no&animate_transition=yes&tabs=no&embed=y'
```
##### Options
See the [full list](https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm) of available options

Defaults:
```JSON
options='{"hideTabs":true,"hideToolbar":true}'
```

##### Width and Height
Default: `width="100%"` `height="100%"`


# Install
Modify your book.json by adding `tableau` to plugins
```
{
    "plugins": ["tableau"]
}
```


# Usage
```
{% tableau width='700px', height='750px', parameters='showVizHome=no&embed=y', options='{"hideTabs":true,"hideToolbar":true}' %}
  https://public.tableau.com/views/Visual/Principles
{% endtableau %}
```


# Caveats
* Make sure the string you pass to options is valid JSON

# TODO
* Make the defaults configurable
* Allow passing an account token to the tableau api
