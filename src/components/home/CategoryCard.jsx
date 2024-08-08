import PropTypes from "prop-types";
import styles from "./CategoryList.module.scss";

export default function CategoryCard({ category }) {
  if (!category) {
    console.error("Category is undefined or null in CategoryCard");
    return null;
  }

  const { name, icon: Icon, color } = category;

  return (
    <div className={styles.card}>
      <Icon fontSize={40} color={color} className={styles.iconAlign} />
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
