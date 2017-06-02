class PaginationButton extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }

    render() {
        const {
            eventKey,
            children,
            onSelect,
            disabled,
            active,
            classType,
        } = this.props
        return (
            <a
                className={classType + (active ? " on" : "")}
                onClick={!disabled && onSelect.bind(this, eventKey)}
            >
                {children}
            </a>
        )
    }
}

class Pagination extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            sectionLimit: 5
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.prevhandleSelect = this.prevhandleSelect.bind(this)
        this.nexthandleSelect = this.nexthandleSelect.bind(this)
        this.handleSelctWithOutReload = this.handleSelctWithOutReload.bind(this)
        this.pagehandleSelect = this.pagehandleSelect.bind(this)
    }
    componentDidMount() {
        this.handleSelctWithOutReload()
        window.addEventListener("popstate", this.handleSelctWithOutReload, false);
    }
    componentWillUnmount() {
        window.removeEventListener("popstate", this.handleSelctWithOutReload, false);
    }
    renderPageButtons(activePage, items, onSelect) {
        const {
            sectionLimit
        } = this.state
        const pageButtons = [];

        let currentRow = Math.floor(activePage / sectionLimit);

        if (!(Math.floor(activePage % sectionLimit))) {
            currentRow -= 1
        }

        let startPage = currentRow * sectionLimit + 1;
        let endPage = currentRow * sectionLimit + sectionLimit;

        if (endPage > items) {
            endPage = items
        }
        for (let page = startPage; page <= endPage; page++) {
            pageButtons.push(
                <PaginationButton
                    onSelect={onSelect}
                    key={page}
                    eventKey={page}
                    active={page === activePage}
                >
                    {page}
                </PaginationButton>
            );
        }

        return pageButtons;
    }
    handleSelctWithOutReload() {

        //각각의 리스트 컴포넌트에서 API를 호출 하지 않고 pagingnation 컴포넌트에서 호출 하는 이유는
        //페이징 액션에서 새로고침하지 않고 pushState 로 관리하여 브라우저 새로고침 액션을 하고 싶지 않기 때문입니다.
        //paging에서 하지 않으면 모든 리스트 컴포넌트 (페이지 네이션을 사용하는 )에서 pushState 액션을 실행해야 되기 떄문에 매우 귀찮음.
        let queryObj = common_utils.parserQueryString()
        if (isNaN(queryObj.page)) {
            queryObj.page = 1
        }
        this.props.onSelect(Number(queryObj.page))
    }
    handleSelect(value) {

        let queryObj = common_utils.parserQueryString()
        queryObj.page = value

        if (this.props.activePage != value) {

            let queryString = common_utils.requestBuildQueryString(queryObj)

            history.pushState({}, "page", common_utils.currentUrl() + "?" + queryString);
            this.props.onSelect(Number(value))
        }

    }

    prevhandleSelect(value){
        this.pagehandleSelect(value, "prev");
    }
    nexthandleSelect(value){
        this.pagehandleSelect(value, "next")
    }

    pagehandleSelect(value, moveType) {
        const {
            sectionLimit
        } = this.state

        //몇번째 row에 있는지 확인용
        let rowPosition = Math.floor(value / sectionLimit)
        let restValue = value % sectionLimit
        if (restValue == 0) {
            --rowPosition
        }

        let plusPage = 1;
        if( moveType == "prev") plusPage = 5;
        if( moveType == "next") plusPage = 1;

        //그 row의 천번째 페이지를 선택하게 해준다.
        let page = rowPosition * sectionLimit + plusPage

        //그 페이지가 마지막 페이지를 넘어가면 마지막 페이지로 돌려준다

        page = page > this.props.items ? this.props.items : page
        page = page < 1 ? 1 : page

        let queryObj = common_utils.parserQueryString()
        queryObj.page = page


        let queryString = common_utils.requestBuildQueryString(queryObj)

        history.pushState({}, "page", common_utils.currentUrl() + "?" + queryString);
        this.props.onSelect(Number(page))

    }

    render() {
        const {
            activePage, // 현재 페이지
            items, //페이지 개수
            first,
            last,
            prev,
            next,
        } = this.props
        if (items > 1) {
            return (
                <div className="paging_group">
                    <div className="wrap_pasing" id="pagingArea">
                        {first && (
                            <PaginationButton
                                eventKey={1}
                                onSelect={this.handleSelect}
                                disabled={activePage == 1}
                                classType="btn_pasing btn_left01"
                            >
                                <span className="screen_out">처음</span>
                            </PaginationButton>
                        )}
                        {prev && (
                            <PaginationButton
                                eventKey={activePage - 5}
                                onSelect={this.prevhandleSelect}
                                disabled={activePage == 1}
                                classType="btn_pasing link_prev"
                            >
                                <span className="screen_out">이전</span>
                            </PaginationButton>
                        )}
                        {this.renderPageButtons(activePage, items, this.handleSelect)}
                        {next && (
                            <PaginationButton
                                eventKey={activePage + 5}
                                onSelect={this.nexthandleSelect}
                                disabled={activePage == items}
                                classType="btn_pasing link_next"
                            >
                                <span className="screen_out">다음</span>
                            </PaginationButton>
                        )}
                        {last && (
                            <PaginationButton
                                eventKey={items}
                                onSelect={this.handleSelect}
                                disabled={activePage >= items}
                                classType="btn btn_right02"
                            >
                                <span className="screen_out">마지막</span>
                            </PaginationButton>
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}

/*
사용예
<Pagination
    last
    first
    prev
    next
    items={25}
    activePage={this.state.activePage}
    onSelect={this.handleSelect.bind(this)} />
 */