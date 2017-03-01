import React from 'react';

class Header extends React.Component {
    render() {
        return (
           <div className="navbar navbar-default" id="navbar">
			<div className="navbar-container" id="navbar-container">
				<div className="navbar-header pull-left">
					<a href="#" className="navbar-brand">
						<small>
							<i className="icon-leaf"></i>
							ACE后台管理系统
						</small>
					</a>
				</div>
				<div className="navbar-header pull-right" role="navigation">
					<ul className="nav ace-nav">
						<li className="grey">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-tasks"></i>
								<span className="badge badge-grey">4</span>
							</a>

							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-ok"></i>
									还有4个任务完成
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">软件更新</span>
											<span className="pull-right">65%</span>
										</div>

										<div className="progress progress-mini ">
											<div  className="progress-bar "></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">硬件更新</span>
											<span className="pull-right">35%</span>
										</div>

										<div className="progress progress-mini ">
											<div className="progress-bar progress-bar-danger"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">单元测试</span>
											<span className="pull-right">15%</span>
										</div>

										<div className="progress progress-mini ">
											<div  className="progress-bar progress-bar-warning"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">错误修复</span>
											<span className="pull-right">90%</span>
										</div>

										<div className="progress progress-mini progress-striped active">
											<div  className="progress-bar progress-bar-success"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										查看任务详情
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="purple">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-bell-alt icon-animated-bell"></i>
								<span className="badge badge-important">8</span>
							</a>

							<ul className="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-warning-sign"></i>
									8条通知
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-pink icon-comment"></i>
												新闻评论
											</span>
											<span className="pull-right badge badge-info">+12</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<i className="btn btn-xs btn-primary icon-user"></i>
										切换为编辑登录..
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
												新订单
											</span>
											<span className="pull-right badge badge-success">+8</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-info icon-twitter"></i>
												粉丝
											</span>
											<span className="pull-right badge badge-info">+11</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										查看所有通知
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="green">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-envelope icon-animated-vertical"></i>
								<span className="badge badge-success">5</span>
							</a>

							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-envelope-alt"></i>
									5条消息
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Alex:</span>
												不知道写啥 ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>1分钟以前</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Susan:</span>
												不知道翻译...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>20分钟以前</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Bob:</span>
												到底是不是英文 ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>下午3:15</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="inbox.html">
										查看所有消息
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="light-blue">
							<a data-toggle="dropdown" href="#" className="dropdown-toggle">
								<img className="nav-user-photo" src="assets/avatars/user.jpg" alt="Jason's Photo" />
								<span className="user-info">
									<small>欢迎光临,</small>
									Jason
								</span>

								<i className="icon-caret-down"></i>
							</a>

							<ul className="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i className="icon-cog"></i>
										设置
									</a>
								</li>

								<li>
									<a href="#">
										<i className="icon-user"></i>
										个人资料
									</a>
								</li>

								<li className="divider"></li>

								<li>
									<a href="#">
										<i className="icon-off"></i>
										退出
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
        );
    }
}

export default Header;