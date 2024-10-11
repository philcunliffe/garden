export default (() => {
  function NoteStatus(props: QuartzComponentProps) {
    const { fileData } = props;
    const { frontmatter } = fileData;
    return <p>{frontmatter.status}</p>
  }
 
  return NoteStatus; 
})

