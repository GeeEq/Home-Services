import PropTypes from "prop-types";
import styles from "./CategoryList.module.scss";

export default function CategoryCard({ category }) {
  const { name, icon: Icon, color } = category;

  return (
    <div className={styles.card}>
      <Icon fontSize={48} color={color} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
