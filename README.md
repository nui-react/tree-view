
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
              hi...
              <TreeBadge label="my badge"/>
            </TreeItem>
          </TreeItemContainer>
        </TreeView>
    )
}
```


## Tech Stack

**Client:** React, Typescript, CSS



## Author

- [@adeeshaashinshana](https://github.com/adeeshaashinshana)


## License

[MIT](https://choosealicense.com/licenses/mit/)

