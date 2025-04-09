export const fadeIn = (direction, delay) => {
  return {
    initial: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'keyframes',
        duration: 1200,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

export const textGlow = (duration) => {
  return {
    initial: {
      'text-shadow': '0 0 1px rgba(0, 0, 0, 0)',
    },
    enter: {
      'text-shadow': '0 0 10px rgba(0, 250, 250, 1)',
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }
}

export const motionShake = {
  initial: {
    x: 0,
  },
  visible: {
    x: 5,
    transition: {
      duration: 250,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  hovered: {
    x: 0,
    transition: {},
  },
}

export const scrollBtnAnim = {
  initial: {
    y: -20,
  },
  visible: {
    y: 0,
    transition: {
      duration: 250,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  hovered: {
    y: -20,
    transition: {},
  },
}
