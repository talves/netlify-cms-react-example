(WIP) The project uses the beta feature of manually initializing the CMS (valid in 1.4.0) and is now fully supported.

This example repository has many layers, but the main entry point is the master branch. Other branches will hold examples we feel will also help you get started to design your custom NetlifyCMS.

Have fun Exploring! 🎉

## Branches:

- [(master)][master] - example from core NetlifyCMS project (1.5.0)  
  Now using the local file-system (custom backend) for development, so you can test your configs, etc.
- [(with-routes)][with-routes] - same as master with routes (With a Caveat)
  Must use page reload/replace when calling the CMS within a route. The CMS maintains it's own routes based on collections at this time so CMS routes require a page reload to the CMS route. `<Link to='/admin/' replace>NetlifyCMS</Link>`

***NOTE:***
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Always code like you are on 🔥

[master]: https://github.com/talves/netlify-cms-react-example/tree/master
[with-routes]: https://github.com/talves/netlify-cms-react-example/tree/with-routes
