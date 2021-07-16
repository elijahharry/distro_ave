import useStyles from "./styles";
import Snippet from "./Snippet";

const Snippets = ({ strains }) => {
  const classes = useStyles();
  let delay = 0.1;

  return (
    <div className={classes.snippets}>
      {strains.map((strain) => {
        delay = delay + 0.1;
        return <Snippet strain={strain} delay={delay} />;
      })}
    </div>
  );
};

export default Snippets;
