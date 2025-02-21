import { motion } from 'framer-motion';

const SlideInComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }} 
    >
      {children}
    </motion.div>
  );
};

export default SlideInComponent;