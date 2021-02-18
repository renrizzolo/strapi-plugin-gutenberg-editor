import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import GutenbergWysiwygWithErrors from "./components";

export default (strapi) => {
  const pluginDescription =
    pluginPkg.strapi.description || pluginPkg.description;
  const icon = pluginPkg.strapi.icon;
  const name = pluginPkg.strapi.name;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: pluginPkg.strapi.required || false,
    mainComponent: null,
    name,
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };
  strapi.registerField({
    type: "wysiwyg",
    Component: GutenbergWysiwygWithErrors,
  });
  return strapi.registerPlugin(plugin);
};
