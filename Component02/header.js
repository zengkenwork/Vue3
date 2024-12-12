const HeaderComponent = {
  props: {
    activeKey: {
      type: String,
      required: true,
      default: "",
    },
    navItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const isActive = (key) => {
      return key === props.activeKey;
    };

    return { isActive };
  },
  template: `<div id="brand">
  Site Name
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.key">
        <a :href="item.url" :class="{ active: isActive(item.key) }">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</div>`,
};
