function Links (props) {
    // console.log(props.links)
    return (
        <Links>
            <h3>Links</h3>
            <a href={props.github}>Github link</a>
            <a href={props.linkedin}>LinkedIn link</a>
        </Links>
    )
}

export default Links;