# @nui-react/tree-view

Fully customized react component.

## Installation

Install @nui-react/tree-view with npm, pnpm or yarn

```bash
  npm i @nui-react/tree-view
```

```bash
  pnpm add @nui-react/tree-view
```

```bash
  yarn add @nui-react/tree-view
```

## Usage/Examples

```javascript
import {
  TreeView,
  TreeItem,
  TreeItemContainer,
  TreeBadge,
} from "@nui-react/tree-view";

function App() {
  return (
    <TreeView header="my tree view">
      <TreeItemContainer>
        <TreeItem title="title 1">
          this is a react Tree View component
          <TreeBadge label="my badge" />
        </TreeItem>
      </TreeItemContainer>
    </TreeView>
  );
}
```

## Components

`<TreeView>`

| Prop       | Type        | Description   | Value                                             |
| :--------- | :---------- | :------------ | :------------------------------------------------ |
| `header`   | `string`    | **Required**. | `text`                                            |
| `children` | `ReactNode` | Optional.     | **`<TreeItemContainer>`**, **`<CirclePointer/>`** |
| `theme`    | `string`    | Optional.     | **`dark`** or **`light`**. _(Default is `dark`)_  |

`<TreeItemContainer>`

| Prop       | Type        | Description   | Value                                                       |
| :--------- | :---------- | :------------ | :---------------------------------------------------------- |
| `children` | `ReactNode` | **Required**. | **`<TreeItem>`**, **`<TreeExpander>`** or _any `ReactNode`_ |

`<TreeItem>`

| Prop             | Type        | Description   | Value                                                     |
| :--------------- | :---------- | :------------ | :-------------------------------------------------------- |
| `title`          | `string`    | **Required**. | `text`                                                    |
| `children`       | `ReactNode` | Optional.     | **`<TreeText>`** , **`<TreeBadge>`** or _any `ReactNode`_ |
| `direction`      | `string`    | Optional.     | **`col`** or **`row`**. _(Default is `row`)_              |
| `bgGradientSize` | `number`    | Optional.     | any number between **`0-100`** _(Default is `100`)_       |
| `titleWidth`     | `number`    | Optional.     | any number between **`10-100`**                           |

`<TreeExpander>`

| Prop        | Type        | Description   | Value                                             |
| :---------- | :---------- | :------------ | :------------------------------------------------ |
| `header`    | `string`    | **Required**. | `text`                                            |
| `children`  | `ReactNode` | **Required**. | _any `ReactNode`_                                 |
| `expanded`  | `boolean`   | Optional.     | **`true`** or **`false`**. _(Default is `false`)_ |
| `logo`      | `string`    | Optional.     | image **`URL`** or react **`img`** component      |
| `subHeader` | `string`    | Optional.     | `text`                                            |
| `desc`      | `string`    | Optional.     | `text`                                            |
| `link`      | `string`    | Optional.     | `URL`                                             |
| `sublink`   | `string`    | Optional.     | `URL`                                             |
| `descLink`  | `string`    | Optional.     | `URL`                                             |

`<TreeHeader>`

| Prop               | Type     | Description   | Value                                                                                                                                                    |
| :----------------- | :------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `header`           | `string` | **Required**. | `text`                                                                                                                                                   |
| `logo`             | `string` | Optional.     | image **`URL`** or react **`img`** component                                                                                                             |
| `subHeader`        | `string` | Optional.     | `text`                                                                                                                                                   |
| `desc`             | `string` | Optional.     | `text`                                                                                                                                                   |
| `link`             | `string` | Optional.     | `URL`                                                                                                                                                    |
| `sublink`          | `string` | Optional.     | `URL`                                                                                                                                                    |
| `descLink`         | `string` | Optional.     | `URL`                                                                                                                                                    |
| `headerVarient`    | `string` | Optional.     | **`h1`**, **`h2`**, **`h3`**, **`h4`**, **`h5`**, **`h6`** or **`p`**. _(Default is `h1`)_                                                               |
| `subHeaderVarient` | `string` | Optional.     | **`h1`**, **`h2`**, **`h3`**, **`h4`**, **`h5`**, **`h6`** or **`p`**. _(Default is `h3`)_                                                               |
| `descVarient`      | `string` | Optional.     | **`h1`**, **`h2`**, **`h3`**, **`h4`**, **`h5`**, **`h6`** or **`p`**. _(Default is `p`)_                                                                |
| `headerColor`      | `string` | Optional.     | **`white`**, **`black`**, **`primary`**, **`secondary`**, **`success`**, **`error`**, **`info`** , **`warning`** or **`mute`**. _(Default is `white`)_   |
| `subHeaderColor`   | `string` | Optional.     | **`white`**, **`black`**, **`primary`**, **`secondary`**, **`success`**, **`error`**, **`info`** , **`warning`** or **`mute`**. _(Default is `primary`)_ |
| `descColor`        | `string` | Optional.     | **`white`**, **`black`**, **`primary`**, **`secondary`**, **`success`**, **`error`**, **`info`** , **`warning`** or **`mute`** . _(Default is `mute`)_   |

`<TreeText>`

| Prop        | Type     | Description   | Value                                                                                                                                                  |
| :---------- | :------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`      | `string` | **Required**. | `text`                                                                                                                                                 |
| `varient`   | `string` | Optional.     | **`h1`**, **`h2`**, **`h3`**, **`h4`**, **`h5`**, **`h6`** or **`p`**. _(Default is `p`)_                                                              |
| `color`     | `string` | Optional.     | **`white`**, **`black`**, **`primary`**, **`secondary`**, **`success`**, **`error`**, **`info`** , **`warning`** or **`mute`**. _(Default is `white`)_ |
| `className` | `string` | Optional.     | any                                                                                                                                                    |

`<TreeBadge>`

| Prop    | Type     | Description   | Value                                        |
| :------ | :------- | :------------ | :------------------------------------------- |
| `label` | `string` | **Required**. | `text`                                       |
| `img`   | `string` | Optional.     | image **`URL`** or react **`img`** component |

`<TreeLink>`

| Prop        | Type     | Description   | Value                                                                            |
| :---------- | :------- | :------------ | :------------------------------------------------------------------------------- |
| `href`      | `string` | **Required**. | `URL`                                                                            |
| `target`    | `string` | Optional.     | **`_blank`**, **`_self`**, **`_parent`**, or **`_top`**. _(Default is `_blank`)_ |
| `title`     | `string` | Optional.     | `text`                                                                           |
| `iconColor` | `string` | Optional.     | any `color code`                                                                 |
| `className` | `string` | Optional.     | any                                                                              |

`<CirclePointer>`

| Prop                | Type      | Description   | Value                                             |
| :------------------ | :-------- | :------------ | :------------------------------------------------ |
| `header`            | `string`  | **Required**. | `text`                                            |
| `showMainConnector` | `boolean` | Optional.     | **`true`** or **`false`**. _(Default is `true`)_  |
| `setAsLast`         | `boolean` | Optional.     | **`true`** or **`false`**. _(Default is `false`)_ |

`<DownArrow>`

| Prop        | Type     | Description | Value                                            |
| :---------- | :------- | :---------- | :----------------------------------------------- |
| `size`      | `number` | Optional.   | any number more than **`0`** _(Default is `10`)_ |
| `color`     | `string` | Optional.   | any **`Color Code`** _(Default is `#00f0ff`)_    |
| `className` | `string` | Optional.   | any                                              |

`<LinkIcon>`

| Prop        | Type     | Description | Value                                         |
| :---------- | :------- | :---------- | :-------------------------------------------- |
| `color`     | `string` | Optional.   | any **`Color Code`** _(Default is `#00f0ff`)_ |
| `className` | `string` | Optional.   | any                                           |

`<TreeLiner>`

| Prop    | Type     | Description | Value                                                          |
| :------ | :------- | :---------- | :------------------------------------------------------------- |
| `color` | `string` | Optional.   | any **`Color Code`** _(Default is `rgba(0, 240, 255, 0.502)`)_ |

## Tech Stack

**Client:** React, Typescript, CSS

## Author

- [@adeeshaashinshana](https://github.com/adeeshaashinshana)

## License

[MIT](https://choosealicense.com/licenses/mit/)
