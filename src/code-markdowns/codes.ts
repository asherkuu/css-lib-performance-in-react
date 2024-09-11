export const vanillaCssMd = `
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

export const vanillaCssModuleMd = `
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
