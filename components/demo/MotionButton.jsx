import React from 'react';

import { motion } from 'framer-motion';

export default function MotionButton(){
    return <motion.div 
    style={{width:100}}
    animate={{ rotate: 360, translateX: [0, 100, 0], }}
    transition={{ duration: 2, repeat: Infinity }}>
       Hello world
    </motion.div>
}
