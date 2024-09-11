export const pureCssMd = `
~~~js
// style.css
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import from './style';
const Item = () => <div className="item" />;
~~~
`;

export const pureCssModuleMd = `
~~~js
// style.module.css
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import styles from './style';
const Item = () => <div className={style.item} />;
~~~
`;
