import "../App.css"

const Othernavbar = () => {

  return (
    <div>
      <h1>10 Dropdown Animations</h1>

      <div class="menu-container">
        <h3>Animate the Whole Menu</h3>
        <nav>
          <ul class="menu">
            <li class="dropdown dropdown-6">
              Scale Down
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li class="dropdown dropdown-7">
              RotateX
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            {/* <li class="dropdown dropdown-8">
              TranslateZ
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li> */}
            {/* <li class="dropdown dropdown-9">
              Scale
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-9">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li> */}
            {/* <li class="dropdown dropdown-10">
              Rotate Y
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-10">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>

      <div class="menu-container">
        <h3>Animate Each Menu Items</h3>
        <nav>
          <ul class="menu">
            <li class="dropdown dropdown-1">
              TranslateY
              <ul class="dropdown_menu dropdown_menu-1">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li class="dropdown dropdown-2">
              RotateX
              <ul class="dropdown_menu dropdown_menu-2">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li class="dropdown dropdown-3">
              TranslateZ
              <ul class="dropdown_menu dropdown_menu-3">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li class="dropdown dropdown-4">
              Scale
              <ul class="dropdown_menu dropdown_menu-4">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
            <li class="dropdown dropdown-5">
              TranslateX
              <ul class="dropdown_menu dropdown_menu-5">
                <li class="dropdown_item-1">Item 1</li>
                <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Othernavbar;
