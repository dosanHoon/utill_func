class InquiryPopup extends React.Component {
	constructor() {
		super(...arguments)
		this.state = {
			inquiry: {
				title: "",
				content: "",
				popFlag: false,
			}
		}
		this.evalHandlerChange = this.evalHandlerChange.bind(this)
		this.submit = this.submit.bind(this)
		this.postData = this.postData.bind(this)
	}

	/**
	 * 범용 handlerChange memberName : state.goods 내의 하위 멤버 문자열
	 */
	evalHandlerChange(memberName, e) {
		var newState = this.state.inquiry
		eval("newState." + memberName + " = e.target.value");
		this.setState({
			inquiry: newState
		});
	}

	submit(e) {
		var inquiry = this.state.inquiry
		inquiry.email1 = document.getElementsByName("email1")[0].value;
		inquiry.email2 = document.getElementsByName("email2")[0].value;

		if (!inquiry.email1 || !inquiry.email2) {
			alert("이메일을 입력해주세요.")
			return
		} else if (!inquiry.title) {
			alert("제목을 입력해주세요.")
			return
		} else if (!inquiry.content) {
			alert("내용을 입력해주세요.")
			return
		}

		inquiry.inquiry_type = this.props.id

		fputils.console("inquiry : ", inquiry)

		this.setState({
			inquiry: inquiry
		})
		e.preventDefault()
		var formData = this.state.inquiry;//new FormData(e.target);
		//var formData = e.target.serialize();
		this.postData(formData)

	}

	postData(formData) {
		// 부모의 this에 접근하기 위한 변수
		var _this = this;
		$.ajax({
			url: fputils.storeApi2 + '/play/addInquiryEtc',
			type: 'POST',
			data: { "email1": formData.email1, "email2": formData.email2, "title": formData.title, "content": formData.content, "inquiry_type": formData.inquiry_type },
			dataType: 'json',
			success: function (responseJSON) {
				if (responseJSON.state == "100000") {
					alert("문의가 접수되었습니다.\n내용이 확인되는 대로 답변 드리겠습니다.")
					this.props.inquiryClick()
				} else {

				}
			}.bind(this),
			error: function (xhr, status, err) {
				alert("서버간 통신오류가 발생하였습니다.")
			}.bind(this)
		});
	}

	render() {
		return (
			<div>
				<div className="layer_pop layer_cooperation">
					<div className="layer_con">
						<div className="layer_apply">
							<div className="tit_pop">
								<h2>제휴 신청문의</h2>
								<button type="button" className="ico_comm ico_close" onClick={this.props.inquiryClick}></button>
							</div>
							<form id="myForm" method="post" onSubmit={this.submit}>
								<fieldset>
									<legend className="screen_out">판매제휴 PC방 신청문의</legend>
									<dl className="list_inptype">
										<dt>
											<span className="ico_comm ico_ncs"></span>
											<label>이메일</label>
										</dt>
										<dd className="select_eml">
											<CustomInputEmail placeholder="이메일" name="email" validation="email" />
										</dd>
									</dl>
									<dl className="list_inptype">
										<dt>
											<span className="ico_comm ico_ncs"></span>
											<label htmlFor="titQna">제목</label>
										</dt>
										<dd>
											<input type="text" name="title" className="inp_txt inp_long" value={this.state.inquiry.title} onChange={this.evalHandlerChange.bind(this, "title")} />
										</dd>
									</dl>
									<dl className="list_inptype list_desc">
										<dt>
											<span className="ico_comm ico_ncs"></span>
											<label>문의 내용</label>
										</dt>
										<dd>
											<textarea className="inp_long" name="content" value={this.state.inquiry.content} onChange={this.evalHandlerChange.bind(this, "content")}></textarea>
										</dd>
									</dl>
									<div className="wrap_submit">
										<a className="link_inquire" onClick={this.submit}><img src="http://static.funple.com/funpleapp/partnercenter/btn_qna.png" alt="" /></a>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class AlertPopup extends React.Component {
	onClickOK() {
		this.props.close()
		if (this.props.redirectUrl) {
			location.href = this.props.redirectUrl;
		} else if (Boolean(this.props.callback)) {
			this.props.callback()
		}
	}
	render() {
		fpconsole.log(this.props)
		return (
			<div className="layer_pop">
				<div className="layer_con">
					<div className="layer_view layer_cfm">
						<div className="txt_message" dangerouslySetInnerHTML={{ __html: this.props.title }}></div>
						<ul className="pop_btn">
							<li><button type="button" className="btn_popup btn_confirm btn_type03" onClick={this.onClickOK.bind(this)}>확인</button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

class InputPopup extends React.Component {
	handleConfirm() {
		this.props.callback(this.refs.inputs.value)
		this.props.close()
	}
	reset() {
		this.refs.inputs.value = ""
	}
	render() {
		return (
			<div className="layer_pop">
				<div className="layer_con">
					<div className="layer_view layer_player layer_change">
						<div className="txt_message" dangerouslySetInnerHTML={{ __html: this.props.title }}></div>
						<div className="wrap_inptext">
							<input type="text" className="inp_nick" ref="inputs" placeholder={this.props.placeholder} />
							<button type="button" className="btn_reset" onClick={this.reset.bind(this)}><span className="ico_popup ico_reset">내용삭제</span></button>
						</div>
						{this.props.context &&
							<div className="txt_contxt">
								<span className="ico_popup ico_attent">!</span>
								<em className="txt_cmmt">{this.props.context}</em>
							</div>
						}
						<ul className="pop_btn">
							<li><button type="button" className="btn_popup btn_confirm btn_type03" onClick={this.handleConfirm.bind(this)}>확인</button></li>
							<li><button type="button" className="btn_popup btn_cancle btn_type02" onClick={this.props.close}>취소</button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

class ConfirmAlertPopup extends React.Component {
	static defaultProps = {
		content: "",
		callback: function () { },
		close: function () { }
	}
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		callback: React.PropTypes.func.isRequired,
		close: React.PropTypes.func.isRequired
	}
	onClickOK() {
		this.props.close()

		if (this.props.redirectUrl) {
			location.href = this.props.redirectUrl;
		} else if (Boolean(this.props.callback)) {
			this.props.callback()
		}
	}
	render() {
		return (
			<div className="layer_pop">
				<div className="layer_con">
					<div className="layer_view layer_cfm">
						<div className="txt_message" dangerouslySetInnerHTML={{ __html: this.props.title }}></div>
						<ul className="pop_btn">
							<li><button type="button" className="btn_popup btn_confirm btn_type03" onClick={this.onClickOK.bind(this)}>확인</button></li>
							<li><button type="button" className="btn_popup btn_cancle btn_type02" onClick={this.props.close}>취소</button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

class PasswordPopup extends React.Component {
	constructor() {
		super(...arguments)
		this.state = {
			password: ""
		}
		this.passwordChange = this.passwordChange.bind(this)
	}

	passwordChange(e) {
		this.setState({
			password: e.target.value
		})
	}

	render() {
		return (
			<div className="layer_pop">
				<div className="layer_con">
					<div className="layer_psw">
						<h2 className="pop_tit">비밀번호</h2>
						<input type="password" onChange={this.passwordChange} />
						<ul className="pop_btn">
							<li><button type="button" className="btn_confirm" onClick={this.props.GetPassword.bind(this, this.state.password)}>확인</button></li>
							<li><button type="button" className="btn_cancle" onClick={this.props.handlePopFlag}>취소</button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}