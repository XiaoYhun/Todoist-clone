import moment from "moment";

const icons = {
    menu: (
        <svg className="menu_icon" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
            ></path>
        </svg>
    ),
    home: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z"
            ></path>
        </svg>
    ),
    add: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd" transform="translate(4 3)">
                <mask id="jd4FBg" fill="#fff">
                    <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
                </mask>
                <g mask="url(#jd4FBg)">
                    <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                </g>
            </g>
        </svg>
    ),
    bell: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 3a5.75 5.75 0 015.75 5.75c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 19H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75A5.75 5.75 0 0112 3zm1.5 16h-3a1.5 1.5 0 003 0zM12 4a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476A4.75 4.75 0 0012 4z"
                fill="currentColor"
                fillRule="nonzero"
            ></path>
        </svg>
    ),
    search: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            ariaHidden="true"
            className="search_icon"
        >
            <path
                d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    toggle: (
        <svg width="16px" height="16px" viewBox="0 0 16 16">
            <g transform="translate(-266, -17)" fill="#777777">
                <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818"></path>
            </g>
        </svg>
    ),
    dot: (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="project_icon"
        >
            <path
                d="M12 7a5 5 0 110 10 5 5 0 010-10z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    sort: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z"
            ></path>
        </svg>
    ),
    circle: (
        <svg width="24" height="24">
            <path
                fill="currentColor"
                d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
            ></path>
        </svg>
    ),
    edit: (
        <svg width="24" height="24">
            <g fill="none" fillRule="evenodd">
                <path
                    fill="currentColor"
                    d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                ></path>
                <path
                    stroke="currentColor"
                    d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                ></path>
            </g>
        </svg>
    ),
    schedule: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-reach-tooltip-trigger=""
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
            ></path>
        </svg>
    ),
    comment: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            data-svgs-path="sm1/comments.svg"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
            ></path>
        </svg>
    ),
    more: (
        <svg width="15" height="3">
            <path
                d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill="currentColor"
                fillRule="evenodd"
            ></path>
        </svg>
    ),
    dragHandle: (
        <span
            className="task_list_item__drag_handle item_dnd_handle"
            data-testid="task_list_item__drag_handle"
        >
            <svg width="24" height="24">
                <path
                    fill="currentColor"
                    d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
                ></path>
            </svg>
        </span>
    ),
    close: (
        <svg viewBox="0 0 24 24" className="icon_close" width="24" height="24">
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"
            ></path>
        </svg>
    ),
    tag: (
        <svg
            data-svgs-path="sm1/label_outline.svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
            ></path>
        </svg>
    ),
    flag: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"
            ></path>
        </svg>
    ),
    flagFill: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="#246fe0"
                fillRule="nonzero"
                d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
            ></path>
        </svg>
    ),
    clock: (
        <svg
            data-svgs-path="sm1/reminder.svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"
            ></path>
        </svg>
    ),
    calendar: (
        <svg
            data-svgs-path="sm1/calendar_small.svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
            ></path>
        </svg>
    ),
    inbox: (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="project_icon projectSectionPill--icon project_icon_inbox"
        >
            <g fill="currentColor">
                <path
                    d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                    opacity="0.1"
                ></path>
                <path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"></path>
            </g>
        </svg>
    ),
    upcoming: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                    opacity="0.1"
                ></path>
                <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
            </g>
        </svg>
    ),
    today: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="evenodd">
                <path
                    fillRule="nonzero"
                    d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                    opacity=".1"
                ></path>
                <path
                    fillRule="nonzero"
                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                ></path>
                <text
                    font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    font-size="9"
                    transform="translate(4 2)"
                    font-weight="500"
                >
                    <tspan x="8" y="15" text-anchor="middle">
                        {moment().format("DD")}
                    </tspan>
                </text>
            </g>
        </svg>
    ),
    big_inbox: (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                    opacity="0.1"
                ></path>
                <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
            </g>
        </svg>
    ),
    list: (
        <svg
            data-svgs-path="sm1/project_old.svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
            ></path>
        </svg>
    ),
    calendarToday: (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            class="scheduler-suggestions-item-icon--today"
            ariaHidden="true"
            focusable="false"
        >
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
                    opacity=".1"
                ></path>
                <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z"></path>
                <text
                    font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    font-size="11"
                    transform="translate(4 2)"
                    font-weight="500"
                >
                    <tspan x="9.5" y="18" text-anchor="middle">
                        {moment().format("DD")}
                    </tspan>
                </text>
            </g>
        </svg>
    ),
    sun: (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            class="scheduler-suggestions-item-icon--tomorrow"
            ariaHidden="true"
            focusable="false"
        >
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                    opacity=".1"
                ></path>
                <path d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z"></path>
            </g>
        </svg>
    ),
    chair: (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            class="scheduler-suggestions-item-icon--weekend"
            ariaHidden="true"
            focusable="false"
        >
            <path
                fill="currentColor"
                d="M19.3 6c2 0 3.7 1.6 3.7 3.7V11a2.5 2.5 0 013 2.4v5c0 1.4-1 2.5-2.4 2.5H21v.5a.5.5 0 01-1 0V21H8v.5a.5.5 0 01-1 0V21H4.5A2.5 2.5 0 012 18.5v-5a2.5 2.5 0 013-2.4V9.7C5 7.7 6.6 6 8.7 6h10.6zm4.2 6c-.8 0-1.4.6-1.5 1.4V17H6v-3.5a1.5 1.5 0 00-3-.1v5.1c0 .8.6 1.4 1.4 1.5h19.1c.8 0 1.4-.6 1.5-1.3v-5.2c0-.8-.7-1.5-1.5-1.5zm-4.2-5H8.7A2.7 2.7 0 006 9.5v2c.6.5 1 1.2 1 2V16h14v-2.5c0-.8.4-1.5 1-2V9.7C22 8.3 20.9 7 19.5 7h-.2z"
            ></path>
        </svg>
    ),
    nextWeek: (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            class="scheduler-suggestions-item-icon--next-week"
            ariaHidden="true"
            focusable="false"
        >
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
                    opacity=".1"
                ></path>
                <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"></path>
            </g>
        </svg>
    ),
    noDate: (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            ariaHidden="true"
            focusable="false"
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            ></path>
        </svg>
    ),
    moveTo: (
        <svg width="24" height="24">
            <g fill="none" transform="translate(4 4)">
                <circle cx="8" cy="8" r="7.5" stroke="currentColor"></circle>
                <path
                    fill="currentColor"
                    d="M10.11 7.82L8.15 5.85a.5.5 0 1 1 .7-.7l2.83 2.82a.5.5 0 0 1 0 .71l-2.83 2.83a.5.5 0 1 1-.7-.7l1.98-1.99H4.5a.5.5 0 1 1 0-1h5.61z"
                ></path>
            </g>
        </svg>
    ),
    duplicate: (
        <svg width="24" height="24">
            <g fill="none">
                <path
                    fill="currentColor"
                    d="M11 13h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H11v2.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V14H7.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5H10v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V13z"
                ></path>
                <rect
                    width="12"
                    height="12"
                    x="4.5"
                    y="7.5"
                    stroke="currentColor"
                    rx="2"
                ></rect>
                <path
                    fill="currentColor"
                    d="M19 16.7V6a1 1 0 0 0-1-1H7.3c.2-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3h7.8c1 0 1.3 0 1.6.3.3.1.6.4.7.7.2.3.3.7.3 1.6v7.8c0 1 0 1.3-.3 1.6-.1.3-.4.5-.7.7zm-1.6.3H9.6h7.8z"
                ></path>
            </g>
        </svg>
    ),
    link: (
        <svg width="24" height="24">
            <path
                fill="currentColor"
                d="M7.39 12.339l.706.707-1.768 1.768a2 2 0 1 0 2.829 2.828l3.535-3.535a2 2 0 0 0 0-2.829l.707-.707a3 3 0 0 1 0 4.243l-3.535 3.535a3 3 0 0 1-4.243-4.242l1.768-1.768zm8.838-.354l-.707-.707 1.768-1.768a2 2 0 1 0-2.829-2.828l-3.535 3.536a2 2 0 0 0 0 2.828l-.707.707a3 3 0 0 1 0-4.243l3.535-3.535a3 3 0 0 1 4.243 4.243l-1.768 1.767z"
            ></path>
        </svg>
    ),
    trash: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <rect
                    width="14"
                    height="1"
                    x="5"
                    y="6"
                    fill="currentColor"
                    rx=".5"
                ></rect>
                <path
                    fill="currentColor"
                    d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                ></path>
                <path
                    stroke="currentColor"
                    d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
                ></path>
            </g>
        </svg>
    ),
    checkMark: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            width="12"
            height="12"
            ariaHidden="true"
            class="dropdown_select_checkmark"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
            ></path>
        </svg>
    ),
};
export default icons;
