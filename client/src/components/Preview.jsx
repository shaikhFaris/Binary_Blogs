import { AnimatePresence, motion } from "framer-motion";

const Preview = ({ togglePreview, settogglePreview }) => {
  return (
    <AnimatePresence>
      {togglePreview && (
        <motion.div
          className="px-3"
          initial={{ width: 0 }}
          animate={{ width: "40vw" }}
          exit={{ width: 0, opacity: 0 }}
        >
          hello
          {/* <Tooltip text="preview">
            <VscPreview
              className="text-3xl hover:scale-110 duration-150"
              onClick={() => {
                settogglePreview(!togglePreview);
              }}
            />
          </Tooltip> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preview;
