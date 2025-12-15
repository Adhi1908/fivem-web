import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";

export const Toast = ({ message, type = "success", onClose }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className="bg-black/90 border border-white/10 rounded-lg p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl pointer-events-auto min-w-[300px]"
    >
        {type === "success" ? <CheckCircle className="text-green-400 w-5 h-5" /> : <AlertCircle className="text-red-400 w-5 h-5" />}
        <span className="text-white font-medium text-sm flex-1">{message}</span>
        <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={18} />
        </button>
    </motion.div>
);

export default Toast;
