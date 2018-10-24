# Container Components
The idea is simple:

A container does data fetching and then renders its corresponding sub-component. That’s it.

“Corresponding” meaning a component that shares the same name:
NoteEditorContainer => NoteEditor
ToolBarContainer => Toolbar

## Why containers?
Say you have a component that displays comments. You didn’t know about container components. So, you put everything in one place:

```javascript
  class CommentList extends React.Component {
    this.state = { comments: [] };

    componentDidMount() {
      fetchSomeComments(comments =>
        this.setState({ comments: comments }));
    }
    render() {
      return (
        <ul>
          {this.state.comments.map(c => (
            <li>{c.body}—{c.author}</li>
          ))}
        </ul>
      );
    }
  }
```
Your component is responsible for both fetching data and presenting it. There’s nothing “wrong” with this but you miss out on a few benefits of React.

#### Reusability
CommentList can’t be reused unless under the exact same circumstances!
#### Data structure
Your markup components should state expectations of the data they require. PropTypes are great for this.

Our component is opinionated about data structure but has no way of expressing those opinions. This component will break silently if the json endpoint change.

## This time with a container
Pull out data-fetching into a container component.

```javascript
  class CommentListContainer extends React.Component {
    state = { comments: [] };
    componentDidMount() {
      fetchSomeComments(comments =>
        this.setState({ comments: comments }));
    }
    render() {
      return <CommentList comments={this.state.comments} />;
    }
  }
```
refactor CommentList to take comments as a prop.
```javascript
  const CommentList = props =>
    <ul>
      {props.comments.map(c => (
        <li>{c.body}—{c.author}</li>
      ))}
    </ul>
```
### What did we get?
* Separated our data-fetching and rendering concerns.
* Made our CommentList component reusable.
* CommentList have the ability to set PropTypes and fail loudly.

