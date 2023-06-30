/**
 * <div class="parent">
 * <div class="child">
 * <h1>Hello</h1>
 * </div>
 *  </div>
 *
 *
 *
 */
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'chid' }, [
    React.createElement('h1', {}, 'This is the H1 Tags'),
    React.createElement('h1', {}, 'This is the H1 Tags'),
  ])
);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(parent);
