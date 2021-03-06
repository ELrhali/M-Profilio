export const LIGHT_THEME_PARTICLES = {
  number: {
    value: 20,
    density: {
      enable: true,
      value_area: 800,
    },
  },
  color: {
    value: '#623686',
  },
  opacity: {
    value: 1,
    random: true,
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 5,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 3,
      sync: false,
    },
  },
  line_linked: {
    enable_auto: true,
    distance: 50,
    color: '#623686',
    opacity: 1,
    width: 1,
    condensed_mode: {
      enable: false,
      rotateX: 600,
      rotateY: 600,
    },
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

export const DARK_THEME_PARTICLES = {
  number: {
    value: 100,
    density: {
      enable: false,
      value_area: 800,
    },
    
  },
  line_linked: {
    enable: true,
    opacity: 0.13,
  },
  move: {
    direction: 'none',
    speed: 0.15,
  },
  size: {
    value: 1,
  },
  opacity: {
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.15,
    },
  },
};
