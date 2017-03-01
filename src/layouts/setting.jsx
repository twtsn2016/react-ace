import React from 'react';

class Setting extends React.Component {
    render() {
        return (
            <div className="ace-settings-container" id="ace-settings-container">
                <div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
                    <i className="icon-cog bigger-150"></i>
                </div>

                <div className="ace-settings-box" id="ace-settings-box">
                    <div>
                        <div className="pull-left">
                            <select id="skin-colorpicker" className="hide">
                                <option data-skin="default" value="#438EB9">#438EB9</option>
                                <option data-skin="skin-1" value="#222A2D">#222A2D</option>
                                <option data-skin="skin-2" value="#C6487E">#C6487E</option>
                                <option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
                            </select>
                        </div>
                        <span>&nbsp; 选择皮肤</span>
                    </div>

                    <div>
                        <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-navbar" />
                        <label className="lbl" htmlFor="ace-settings-navbar"> 固定导航条</label>
                    </div>

                    <div>
                        <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-sidebar" />
                        <label className="lbl" htmlFor="ace-settings-sidebar"> 固定滑动条</label>
                    </div>

                    <div>
                        <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
                        <label className="lbl" htmlFor="ace-settings-breadcrumbs">固定面包屑</label>
                    </div>

                    <div>
                        <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl" />
                        <label className="lbl" htmlFor="ace-settings-rtl">切换到左边</label>
                    </div>

                    <div>
                        <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-add-container" />
                        <label className="lbl" htmlFor="ace-settings-add-container">
                            切换窄屏
								<b></b>
                        </label>
                    </div>
                </div>
            </div> 

        );
    }
}

export default Setting;