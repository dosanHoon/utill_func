class InfiniteScroll extends React.Component {
    static defaultProps = {
        hasMore: false,
        loadMore: function () { }
    };
    static propTypes = {
        hasMore: React.PropTypes.bool,
        loadMore: React.PropTypes.func
    };
    constructor() {
        super(...arguments)
        this.state = {
        }
        this.scrollListener = this.scrollListener.bind(this)
    }
    componentWillMount() {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }
    componentDidMount() {
        this.attachScrollListener();
    }    
    componentDidUpdate() {
        this.attachScrollListener()
    }
    scrollListener() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
            // 스크롤 시 실행될 이벤트
            this.detachScrollListener();
            this.props.loadMore();
        }
    }
    attachScrollListener() {
        if (!this.props.hasMore) {
            return;
        }
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
    }
    detachScrollListener() {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.scrollListener);
    }
    componentWillUnmount() {
        this.detachScrollListener();
    }
    render() {
        return (

            <div className="list_psqna">
                {this.props.children}
            </div>

        )
    }
}