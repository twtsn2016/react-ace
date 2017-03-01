import React from 'react'
class UserAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      gender: ''
    };
  }
  handleValueChange(field, value, type = 'string') {
    // 由于表单的值都是字符串，我们可以根据传入type为number来手动转换value的类型为number类型
    if (type === 'number') {
      value = +value;
    }

    this.setState({
      [field]: value
    });
  }
  handleSubmit(e) {
    // 阻止表单submit事件自动跳转页面的动作
    e.preventDefault();
    const {name, age, gender} = this.state;
    fetch('http://localhost:3000/user', {
      method: 'post',
      body: JSON.stringify({ name, age, gender }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        debugger;
        if (res.id) {
          alert('添加用户成功');
          this.context.router.push('/user/list');
        } else {
          alert('添加用户失败');
        }

      })
      .catch((err) => console.error(err));
  }
  render() {
    const {name, age, gender} = this.state;
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <p>
              <label>用户名：</label>
              <input type="text" value={name} onChange={(e) => this.handleValueChange('name', e.target.value)} />
            </p>
            <p>
              <label>年龄：</label>
              <input type="number" value={age || ''} onChange={(e) => this.handleValueChange('age', e.target.value, 'number')} />
            </p>
            <p>
              <label>性别：</label>
              <select value={gender} onChange={(e) => this.handleValueChange('gender', e.target.value)}>
                <option value="">请选择</option>
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </p>

            <input type="submit" value="提交" />
          </form>
        </main>
      </div>
    );
  }
}
UserAdd.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default UserAdd;