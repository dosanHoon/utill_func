require(
    [
        '/main/ckeditor/ckeditor.js'
    ], function (tab) {


    })

class Label extends React.Component {
    static defaultProps = {
        title: "",
        for: ""
    };
    static propTypes = {
        for: React.PropTypes.string,
        name: React.PropTypes.string.Require
    };
    render() {
        return (
            <dt>
                <span className="ico_comm ico_ncs"></span>
                <label htmlFor={this.props.for}>{this.props.name}</label>
            </dt>
        )
    }
}

//셀럭트 박스 옵션 자동 생성 컴포넌트
class SelectBox extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
    }
    hadleOption(e) {
        this.props.onChange(e.target.value)
    }
    _rederOption() {
        function options(option, index) {
            return (
                <option value={option} index={index}>{option}</option>
            )
        }
        return (
            <select className="opt_select" name={this.props.name} onChange={this.hadleOption.bind(this)}>
                {this.props.options.map(options.bind(this))}
            </select>
        )
    }
    render() {
        return (
            <div className="opt_comm">
                {this._rederOption()}
                <span className="box_arrow"><span clclassNameass="img_sample ico_arrow"></span></span>
            </div>
        )
    }
}

class InputNumber extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    validatecheck(e) {
        if (!fp_common.numberCheck(e)) {
            e.preventDefault();
            alert('숫자만 입력 가능합니다.');
        }
    }
    render() {
        const {
            placeholder,
            name,
            classType,
            length
        } = this.props
        return (
            <input type="text"
                name={name}
                className={classType}
                onKeyDown={this.validatecheck.bind(this)}
                maxLength={length}
            />
        )
    }
}

//3단 구성 핸드폰 번호 INPUT 컴포넌트
class InputPhone extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    validatecheck(e) {
        if (!fp_common.numberCheck(e)) {
            e.preventDefault();
            alert('숫자만 입력 가능합니다.');
        }
    }
    render() {
        let phoneFirst = ["010", "011", "016", "017", "018", "019"]
        const {
            placeholder,
            name
        } = this.props
        return (
            <div>
                <SelectBox options={phoneFirst} name={name + "1"} />
                <input type="text" name={name + "2"} onKeyDown={this.validatecheck.bind(this)} />
                <input type="text" name={name + "3"} onKeyDown={this.validatecheck.bind(this)} />
            </div>
        )
    }
}

//3단 구성 핸드폰 번호 INPUT 컴포넌트
//커스텀 셀렉트 박스 이용
class CustomInputPhone extends React.Component {
    constructor() {
        super()
        this.state = {
            phone1: 0
        }
    }

    validatecheck(e) {
        if (!fp_common.numberCheck(e)) {
            e.preventDefault();
            alert('숫자만 입력 가능합니다.');
        }
    }
    handleService(value) {
        this.setState({
            phone1: value
        })
    }
    render() {
        let phoneFirst = ["010", "011", "016", "017", "018", "019", "02", "031", "032", "033", "041", "042", "043", "044", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070"]
        const {
            placeholder,
            name
        } = this.props
        return (
            <div ref={"test"}>
                <input type="text" name={name + "1"} className="screen_out" value={this.state.phone1} />
                <CustomSelectBox2
                    classType="cate_num"
                    options={phoneFirst}
                    title="선택"
                    callback={this.handleService.bind(this)}
                />
                <span className="txt_slash">-</span>
                <input type="text" className="inp_txt" name={name + "2"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
                <span className="txt_slash">-</span>
                <input type="text" className="inp_txt" name={name + "3"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
            </div>
        )
    }
}

//3단 구성 핸드폰 번호 INPUT 컴포넌트
//커스텀 셀렉트 박스 이용
class CustomInputPhoneMo2 extends React.Component {
    constructor() {
        super()
        this.state = {
            phone1: 0
        }
    }

    validatecheck(e) {
        if (!fp_common.numberCheck(e)) {
            e.preventDefault();
            alert('숫자만 입력 가능합니다.');
        }
    }
    handleService(value) {
        this.setState({
            phone1: value
        })
    }
    render() {
        let phoneFirst = ["010", "011", "016", "017", "018", "019", "02", "031", "032", "033", "041", "042", "043", "044", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070"]
        let options = phoneFirst.map(function (value, index) {
            return {
                value: value,
                name: value
            }
        })
        const {
            placeholder,
            name
        } = this.props
        return (
            <div ref={"test"}>
                <input type="text" name={name + "1"} className="screen_out" value={this.state.phone1} />
                <SelectBoxDefault
                    classType="cate_num"
                    options={options}
                    title="선택"
                    callback={this.handleService.bind(this)}
                />
                <div className="wrap_num">
                    <input type="text" className="inp_txt fst" name={name + "2"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
                    <span className="txt_hyphen">-</span>
                    <input type="text" className="inp_txt" name={name + "3"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
                </div>
            </div>
        )
    }
}

//3단 구성 핸드폰 번호 INPUT 컴포넌트
//커스텀 셀렉트 박스 이용
class CustomInputPhoneMo extends React.Component {
    constructor() {
        super()
        this.state = {
            phone1: 0
        }
    }

    validatecheck(e) {
        if (!fp_common.numberCheck(e)) {
            e.preventDefault();
            alert('숫자만 입력 가능합니다.');
        }
    }
    handleService(value) {
        this.setState({
            phone1: value
        })
    }
    render() {
        let phoneFirst = ["010", "011", "016", "017", "018", "019", "02", "031", "032", "033", "041", "042", "043", "044", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070"]
        let options = phoneFirst.map(function (value, index) {
            return {
                value: value,
                name: value
            }
        })
        const {
            placeholder,
            name
        } = this.props
        return (
            <div ref={"test"}>
                <input type="text" name={name + "1"} className="screen_out" value={this.state.phone1} />
                <SelectBoxSelect
                    classType="cate_num"
                    options={options}
                    title="선택"
                    callback={this.handleService.bind(this)}
                />
                <div className="wrap_num">
                    <input type="text" className="inp_txt fst" name={name + "2"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
                    <input type="text" className="inp_txt" name={name + "3"} onKeyDown={this.validatecheck.bind(this)} maxLength="4" />
                </div>
            </div>
        )
    }
}


//일반 텍스트 INPUT
class InputText extends React.Component {
    render() {
        const {
            placeholder,
            name,
            id,
            classType
        } = this.props
        return (
            <input type="text" id={id} className={classType} name={name} placeholder={placeholder} />
        )
    }
}

//3단 INPUT EMAIL have SlECT BOX
class InputEmail extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            email2: ""
        }
    }
    emailHandle(e) {
        this.setState({
            email2: e.target.value
        })
    }
    handleSelect(value) {
        this.setState({
            email2: value
        })
    }
    render() {
        const {
            placeholder,
            name
        } = this.props
        let mails = ["naver.com", "hanmail.net", "gmail.com", "paran.com", "yahoo.co.kr", "hanmir.com", "empal.com", "freechal.com", "hotmail.com", "lycos.co.kr", "korea.com", "nate.com", "netian.com", "unitel.co.kr", "chollian.net"]
        return (
            <div>
                <input type="text" name={name} />
                @
                <input type="text" name={name} value={this.state.email2} onChange={this.emailHandle.bind(this)} />
                <SelectBox onChange={this.handleSelect.bind(this)} options={mails} />
            </div>
        )
    }
}

//3단 INPUT EMAIL have Custom SElECT BOX
class CustomInputEmailMo extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            email2: ""
        }
    }
    emailHandle(e) {
        this.setState({
            email2: e.target.value
        })
    }
    handleSelect(value) {
        this.setState({
            email2: value
        })
    }
    render() {
        const {
            placeholder,
            name
        } = this.props
        let mails = ["naver.com", "hanmail.net", "gmail.com", "paran.com", "yahoo.co.kr", "hanmir.com", "empal.com", "freechal.com", "hotmail.com", "lycos.co.kr", "korea.com", "nate.com", "netian.com", "unitel.co.kr", "chollian.net"]
        let options = mails.map(function (value, index) {
            return {
                value: value,
                name: value
            }
        })
        return (
            <div>
                <input type="text" id={name + "1"} name={name + "1"} className="inp_txt" />
                <span className="txt_at">@</span>
                <input type="text" name={name + "2"} className="inp_txt" value={this.state.email2} onChange={this.emailHandle.bind(this)} />
                <div className="cate_select cate_email">
                    <SelectBoxSelect
                        options={options}
                        title="선택"
                        callback={this.handleSelect.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

//3단 INPUT EMAIL have Custom SElECT BOX
class CustomInputEmail extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            email2: ""
        }
    }
    emailHandle(e) {
        this.setState({
            email2: e.target.value
        })
    }
    handleSelect(value) {
        this.setState({
            email2: value
        })
    }
    render() {
        const {
            placeholder,
            name
        } = this.props
        let mails = ["naver.com", "hanmail.net", "gmail.com", "paran.com", "yahoo.co.kr", "hanmir.com", "empal.com", "freechal.com", "hotmail.com", "lycos.co.kr", "korea.com", "nate.com", "netian.com", "unitel.co.kr", "chollian.net"]
        return (
            <div>
                <input type="text" id={name + "1"} name={name + "1"} className="inp_txt" />
                <span className="txt_at">@</span>
                <input type="text" name={name + "2"} id="inputFordelete" className="inp_txt" value={this.state.email2} onChange={this.emailHandle.bind(this)} />
                <CustomSelectBox2
                    classType="cate_email"
                    options={mails}
                    title="선택"
                    callback={this.handleSelect.bind(this)}
                />
            </div>
        )
    }
}

//input 파일 용량 체크 가능 
class InputFile extends React.Component {
    static defaultProps = {
        id:"",
        name:"",
        handleFileValue:function(){}
    }
    static propTypes = {
        id:React.PropTypes.string,
        name:React.PropTypes.string,
        handleFileValue:React.PropTypes.func
    }
    constructor() {
        super(...arguments)
        this.state = {
            disable: false
        }
    }
    handleFile(e) {
        if (e.target.files[0]) {
            var sizeinbytes = e.target.files[0].size;
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
            var fSize = sizeinbytes;
            var i = 0;
            while (i < 2) {
                fSize /= 1024;
                i++;
            }

            fSize = (Math.round(fSize * 100) / 100);
            if (this.props.totalFileSize + fSize > 10) {
                alert("10Mbyte까지 등록 가능합니다.")
                e.preventDefault();
            } else {
                this.props.handleFileValue(e.target.files[0].name, this.props.arIndex, fSize)
            }
        }
    }
    render() {
        const {
            placeholder,
            name,
            arIndex,
            deleteInput,
            fileValue
        } = this.props

        return (
            <div>
                <input type="file"
                    accept="image/*"
                    multiple=""
                    id={name}
                    className="hidden"
                    name={name}
                    placeholder="이미지 첨부"
                    onChange={this.handleFile.bind(this)}
                />
                <input type="text" className="inp_txt inp_file" name="filestext" readonly="readonly" placeholder="파일 첨부" value={fileValue} />
                <label htmlFor={name} className="lab_find">파일찾기</label>
                <button type="button" className="btn_del" onClick={deleteInput}>삭제</button>
            </div>
        )
    }
}

//input 파일 용량 체크 가능 
class InputFileMo extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            disable: false
        }
    }
    handleFile(e) {
        if (e.target.files[0]) {
            var sizeinbytes = e.target.files[0].size;
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
            var fSize = sizeinbytes;
            var i = 0;
            while (i < 2) {
                fSize /= 1024;
                i++;
            }

            fSize = (Math.round(fSize * 100) / 100);
            if (this.props.totalFileSize + fSize > 10) {
                alert("10Mbyte까지 등록 가능합니다.")
                e.preventDefault();
            } else {
                this.props.handleFileValue(e.target.files[0].name, this.props.arIndex, fSize)
            }
        }
    }
    render() {
        const {
            placeholder,
            name,
            arIndex,
            deleteInput,
            fileValue
        } = this.props

        return (
            <div className="wrap_file">
                <input type="file"
                    accept="image/*"
                    multiple=""
                    id={name}
                    className="inp_addfile"
                    name={name}
                    placeholder="이미지 첨부"
                    onChange={this.handleFile.bind(this)}
                />
                <input type="text" className="inp_txt inp_file" name="filestext" readonly="readonly" placeholder="파일 첨부" value={fileValue} />
                <label htmlFor={name} className="lab_find">파일찾기</label>
                <button type="button" className="snippet_comm btn_del" onClick={deleteInput}>삭제</button>
            </div>
        )
    }
}

/**
 * n메가바이트 확인
 */
class InputFileMB extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            disable: false
        }
    }
    handleFile(e) {
        if (e.target.files[0]) {
            var sizeinbytes = e.target.files[0].size;
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
            var fSize = sizeinbytes;
            var i = 0;
            while (i < 2) {
                fSize /= 1024;
                i++;
            }

            fSize = (Math.round(fSize * 100) / 100);
            if (fSize > this.props.maxFileSize) {
                alert(this.props.maxFileSize + "Mbyte까지 등록 가능합니다.")
                e.preventDefault();
            } else {
                this.props.handleFileValue(e.target.files[0].name)
            }
        }
    }
    render() {
        const {
            name,
            fileValue
        } = this.props

        return (
            <div className="add">
                <input type="file"
                    accept="image/*"
                    multiple=""
                    id={name}
                    className="inp_addfile"
                    name={name}
                    placeholder="이미지 첨부"
                    onChange={this.handleFile.bind(this)}
                />
                <input type="text" className="inp_txt inp_file" name="filestext" readonly="readonly" placeholder="파일 첨부" value={fileValue} />
                <label htmlFor={name} className="lab_find">파일찾기</label>
            </div>
        )
    }
}

//INPUT 파일 추가 삭제 기능 컴포넌트
class InputFileGroupMo extends React.Component {
    static defaultProps = {
        inputs: [
            {
                name: "file",
                fileValue: "",
            }

        ],
    };
    static propTypes = {
        inputs: React.PropTypes.array
    };
    constructor() {
        super(...arguments)
        this.state = {
            inputfiles: 1,
            inputs: [
                {
                    name: "",
                    fileValue: "",
                    fileSize: 0,
                }
            ],
            inputType: "",
            totalFileSize: 0
        }
        this.handleFileValue = this.handleFileValue.bind(this)
    }

    componentWillMount() {
        this.setState({
            inputs: [
                {
                    name: this.props.inputFilesName,
                    fileValue: ""
                }
            ],
        })
    }
    handleFileValue(fileName, fileIndex, fileSize) {
        this.setState((prevState) => {
            let inputs = prevState.inputs
            inputs[fileIndex].fileValue = fileName
            inputs[fileIndex].fileSize = fileSize

            var totalFileSize = 0
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].fileSize) {
                    totalFileSize += inputs[i].fileSize
                }
            }
            if (totalFileSize <= 10) {
                return (
                    {
                        inputs: inputs,
                        totalFileSize: totalFileSize
                    }
                )
            }
        })
    }
    _renderInputFile() {
        function inputFiles(el, index) {
            return (
                <InputFileMo
                    arIndex={index}
                    name={el.name + (index + 1)}
                    fileValue={el.fileValue}
                    validation="content"
                    handleFileValue={this.handleFileValue}
                    deleteInput={this.deleteInput.bind(this, index)}
                    totalFileSize={this.state.totalFileSize}
                />
            )
        }
        return (
            <div className="file_add">
                {this.state.inputs.map(inputFiles.bind(this))}
            </div>
        )
    }
    deleteInput(index) {
        this.setState((prevState) => {
            let inputs = prevState.inputs
            var totalFileSize = 0

            if (inputs.length > 1) {
                inputs.splice(index, 1)
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].fileSize) {
                        totalFileSize += inputs[i].fileSize
                    }
                }

                return (
                    {
                        inputs: inputs,
                        totalFileSize: totalFileSize
                    }
                )
            } else {
                return (
                    {
                        inputs: [
                            {
                                name: "",
                                fileValue: "",
                                fileSize: 0,
                            }
                        ],
                        totalFileSize: 0
                    }
                )
            }
        })
    }
    addInput() {
        this.setState((prevState) => {
            if (prevState.inputs.length < 3) {
                return {
                    inputs: prevState.inputs.concat({
                        name: "",
                        fileValue: ""
                    }),
                }
            }
        })
    }
    render() {
        return (
            <dd className="file_post">
                {this._renderInputFile()}
                <button type="button" className="btn_add_file" onClick={this.addInput.bind(this)}>+첨부파일 추가</button>
                <div className="byte_bar">
                    <div className="bg_bar">
                        <span className="bg" style={{ width: this.state.totalFileSize / 10 * 100 + "%" }}></span>
                        <span className="byte">{this.state.totalFileSize.toFixed(2) + "MB"}</span>
                    </div>
                    <p className="txt_file">* 첨부파일은 이미지 형식의 파일만 가능하며 최대3개, 10Mbyte까지 등록 가능합니다.</p>
                </div>
            </dd>
        )
    }
}

//INPUT 파일 추가 삭제 기능 컴포넌트
class InputFileGroup extends React.Component {
    static defaultProps = {
        inputs: [
            {
                name: "file",
                fileValue: ""
            }
        ],
    };
    static propTypes = {
        inputs: React.PropTypes.array
    };
    constructor() {
        super(...arguments)
        this.state = {
            inputfiles: 1,
            inputs: [
                {
                    name: "",
                    fileValue: "",
                    fileSize: 0,
                }
            ],
            inputType: "",
            totalFileSize: 0,
        }
        this.handleFileValue = this.handleFileValue.bind(this)
    }

    componentWillMount() {
        this.setState({
            inputs: [
                {
                    name: this.props.inputFilesName,
                    fileValue: ""
                }
            ],
        })
    }
    handleFileValue(fileName, fileIndex, fileSize) {
        this.setState((prevState) => {
            let inputs = prevState.inputs
            inputs[fileIndex].fileValue = fileName
            inputs[fileIndex].fileSize = fileSize

            var totalFileSize = 0
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].fileSize) {
                    totalFileSize += inputs[i].fileSize
                }
            }

            if (totalFileSize <= 10) {
                return (
                    {
                        inputs: inputs,
                        totalFileSize: totalFileSize
                    }
                )
            }
        })
    }
    _renderInputFile() {
        function inputFiles(el, index) {
            return (
                <InputFile
                    arIndex={index}
                    name={el.name + (index + 1)}
                    fileValue={el.fileValue}
                    validation="content"
                    handleFileValue={this.handleFileValue}
                    deleteInput={this.deleteInput.bind(this, index)}
                    totalFileSize={this.state.totalFileSize}
                />
            )
        }
        return (
            <div className="file_add">
                {this.state.inputs.map(inputFiles.bind(this))}
            </div>
        )
    }
    deleteInput(index) {
        this.setState((prevState) => {
            let inputs = prevState.inputs
            var totalFileSize = 0
            if (inputs.length > 1) {
                inputs.splice(index, 1)
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i].fileSize) {
                        totalFileSize += inputs[i].fileSize
                    }
                }
                return (
                    {
                        inputs: inputs,
                        totalFileSize: totalFileSize
                    }
                )
            } else {
                return (
                    {
                        inputs: [
                            {
                                name: "",
                                fileValue: "",
                                fileSize: 0,
                            }
                        ],
                        totalFileSize: 0
                    }
                )
            }
        })
    }
    addInput() {
        this.setState((prevState) => {
            if (prevState.inputs.length < 3) {
                return {
                    inputs: prevState.inputs.concat({
                        name: this.props.inputFilesName,
                        fileValue: ""
                    }),
                }
            }
        })
    }
    render() {
        return (
            <dd className="file_post">
                {this._renderInputFile()}
                <button type="button" className="btn_add_file" onClick={this.addInput.bind(this)}>+첨부파일 추가</button>
                <div className="byte_bar">
                    <div className="bg_bar">
                        <span className="bg" style={{ width: this.state.totalFileSize / 10 * 100 + "%" }}></span>
                        <span className="byte">{this.state.totalFileSize.toFixed(2) + "MB"}</span>
                    </div>
                    <p className="txt_file">첨부파일은 이미지 형식의 파일만 가능하며 최대3개, 10Mbyte까지 등록 가능합니다.</p>
                </div>
            </dd>
        )
    }
}

class CkeditorText extends React.Component {

    componentDidMount() {
        CKEDITOR.replace(this.props.id, {
            enterMode: '1',
            lang: 'ko',
            startupFocus: false,
            resize_enabled: false,
            disallowedContent: 'img[width,height]'
        });

    }

    componentWillMount() {
    }

    render() {
        const {
            placeholder,
            name,
            id
        } = this.props
        return (
            <textarea type="text" id={id} name={name} className="txt_area" placeholder={placeholder}></textarea>
        )
    }
}

class TextArea extends React.Component {
    render() {
        const {
            placeholder,
            name,
            id
        } = this.props
        return (
            <textarea id={id} placeholder={placeholder} name={name}></textarea>
        )
    }
}

class FormComponent extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            formvalue: {}
        }
    }
    getFormValue(e) {
        e.preventDefault();
        var form_query = $(e.target).serialize()
        var val_obj = unserialize(form_query)

        //var formData = new FormData($(e.target));
        var formData = new FormData(document.getElementById('postform'));

        function unserialize(str) {
            str = decodeURIComponent(str);
            var strArr = str.split('&'),
                obj = {};
            for (var c = 0; c < strArr.length; c++) {
                var split = strArr[c].split('=', 2);
                obj[split[0]] = split[1];
            }
            return obj;
        }

        this.props.handleFormData(val_obj)
    }
    render() {
        return (
            <form id="postform" method="post" onSubmit={this.getFormValue.bind(this)} enctype="multipart/form-data">
                {this.props.children}
            </form>
        )
    }
}

class Test extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            formvalue: {}
        }
    }
    handleFormData(value) {
        this.setState({
            formvalue: value
        })
    }
    render() {
        return (
            <FormComponent
                handleFormData={this.handleFormData.bind(this)}
            >
                <p>
                    전화번호 : <InputPhone
                        placeholder="핸드폰"
                        name="phone"
                    />
                </p>
                <p>
                    이메일 : <InputEmail
                        placeholder="이메일"
                        name="email"
                        validation="email"
                    />
                </p>
                <p>
                    제목 : <InputText
                        placeholder="제목"
                        validation="phone"
                        name="title"
                    />
                </p>
                문의 내용 : <TextArea
                    name="content"
                />
                <p>
                    파일첨부 : <InputFileGroup

                    />
                </p>
                <p>
                    <button type="submit">
                        버튼
                </button>
                </p>
            </FormComponent>
        )
    }
}