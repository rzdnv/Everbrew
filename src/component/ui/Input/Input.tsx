import styles from "./Input.module.css";

interface PropTypes {
  label?: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const Input = ({
  label,
  name,
  id,
  type,
  placeholder,
  required,
  className,
}: PropTypes) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        type={type}
        id={id}
        name={name}
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
};

export default Input;
