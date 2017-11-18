const COMPONENTS = ['helloWorld'];

COMPONENTS.forEach((componentName) => {
	require(`./components/${componentName}/${componentName}.jsx`);
});
