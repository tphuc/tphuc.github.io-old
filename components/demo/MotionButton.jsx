import React from 'react';

import { motion } from 'framer-motion';

export default function MotionButton(){
    return <motion.div 
        
    animate={{ rotate: 360, }}
    transition={{ duration: 2, repeat: Infinity }}>
       Hello world
    </motion.div>
}
