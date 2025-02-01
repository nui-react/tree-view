
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
import { TreeView, TreeItem, TreeItemContainer, TreeBadge } from "@nui-react/tree-view";

function App() {
  return (
      <TreeView header="my tree view">
          <TreeItemContainer>
            <TreeItem title="title 1">
              this is a react Tree View component
              <TreeBadge label="my badge"/>
            </TreeItem>
          </TreeItemContainer>
        </TreeView>
    )
}
```

## Components


`<TreeView>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `title` | `string` | **Required**. |`text`
| `children` | `ReactNode` | Optional. | **`<TreeItemContainer>`**, **`<CirclePointer/>`** 
| `theme` | `string` | Optional.|**`dark`** or **`light`**. _(Default is `dark`)_


`<TreeItemContainer>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `children` | `ReactNode` | **Required**. |**`<TreeItem>`**, **`<TreeExpander>`** or _any ``ReactNode``_


`<TreeItem>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `title` | `string` | **Required**. |`text`
| `children` | `ReactNode` | Optional. |**`<TreeText>`** , **`<TreeBadge>`** or _any ``ReactNode``_
| `direction` | `string` | Optional.|**`col`** or **`row`**. _(Default is `row`)_
| `bgGradientSize` | `number` | Optional. | any number between **`0-100`**  _(Default is `100`)_
| `titleWidth` | `number` | Optional. | any number between **`10-100`**


`<TreeExpander>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `header` | `string` | **Required**. |`text`
| `children` | `ReactNode` | **Required**. |_any ``ReactNode``_
| `expanded` | `boolean` |  Optional. |**`true`** or **`false`**. _(Default is `false`)_
| `isSimpleHeader` | `boolean` |  Optional. |**`true`** or **`false`**. _(Default is `true`)_


`<TreeHeader>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `header` | `string` | **Required**. |`text`


`<TreeText>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `text` | `string` | **Required**. |`text`


`<TreeBadge>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `label` | `string` | **Required**. |`text`
| `img` | `string` | Optional. |imge **`URL`** or react **`img`** component


`<CirclePointer>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `header` | `string` | **Required**. |`text`
| `showMainConnector` | `boolean` |  Optional. |**`true`** or **`false`**. _(Default is `true`)_
| `setAsLast` | `boolean` |  Optional. |**`true`** or **`false`**. _(Default is `false`)_


`<DownArrow>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `size` | `number` | Optional. |any number more than **`0`**  _(Default is `10`)_
| `color` | `string` | Optional. |any **`Color Code`** _(Default is `#00f0ff`)_


`<TreeLiner>`

| Prop | Type     | Description                | Value
| :-------- | :------- | :---------------------------- |:-----------------
| `color` | `string` | Optional. |any **`Color Code`** _(Default is `rgba(0, 240, 255, 0.502)`)_


## Tech Stack
**Client:** React, Typescript, CSS


## Author
- [@adeeshaashinshana](https://github.com/adeeshaashinshana)


## License
[MIT](https://choosealicense.com/licenses/mit/)

