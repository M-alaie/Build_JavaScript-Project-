class draggabe {
  DragSrc;
  list;
  id;
  updated;
  constructor(options) {
    this.SetUplist(options);
    this.id = options.list;
    this.list = options.list;
    this.updated = options.updated;
    for (let listItem of options.element.children) {
      this.DragHandle(listItem);
    }
  }

  SetUplist(option) {
    if (!option.element) throw Error("the list dosnt Exisit");
    if (!option.list) throw Error("this data do not Exist");
    if (!Array.isArray(option.list))
      throw Error("the list is not an array, please insert an array");
    if (!option.template) throw Error("please add a Tempalte function");
    if (typeof option.template !== "function")
      throw Error("please add a function as template");

    option.list.forEach(
      (item) => (option.element.innerHTML += option.template(item))
    );
  }

  DragHandle(el) {
    el.setAttribute("draggable", true);
    //  el.addEventListener("dragstart",this.DragginStart)

    //  هر دو روش یک کار رو انجام میدن برای گرفتن کلاس مون
    //  el.addEventListener("dragstart",this.DragginStart.bind(this))
    el.addEventListener("dragstart", (e) => this.DragginStart(e));
    el.addEventListener("dragend", (e) => this.DragginEnd(e));
    el.addEventListener("dragover", (e) => this.DragginOver(e));
    el.addEventListener("dragleave", (e) => this.DragginLeave(e));
    el.addEventListener("dragenter", (e) => this.DragginEnter(e));
    el.addEventListener("drop", (e) => this.Drop(e));

    // در اینجا ما می توانیم به کلاس مون دسترسی پیدا کنیم
  }
  DragginStart(e) {
    this.DragSrc = e.target;

    //  دیس بر می گرده به کلاس مون
    e.dataTransfer.dropeffect = "move";
    e.dataTransfer.setData("text/html", e.target.outerHTML);

    e.target.classList.add("dragElem");
  }

  DragginOver(e) {
    if (e.preventDefault()) {
      console.log(e.preventDefault());
    }
    e.target.classList.add("over");
  }
  DragginLeave(e) {
    e.target.classList.remove("over");
  }
  DragginEnter(e) {}
  Drop(e) {
    let target = e.target.closest(".list-item"); // برای تینکه المنت پدر رو رو از دام بگیریم از متد کلوزست استفاده کردیم
    // از تارگت لاگ بگیر ببین به چی بر می گرده

    if (this.DragSrc != target) {
      const data = e.dataTransfer.getData("text/html");

      target.insertAdjacentHTML("beforebegin", data); // این کد برای اینکه ما مقدار

      e.target.parentNode.removeChild(this.DragSrc);
      this.DragHandle(target.previousSibling);
    }
    e.target.classList.remove("over");
  }

  DragginEnd(e) {
    e.target.classList.remove("dragElem");

    let newList = [];
    this.id.forEach((elm) => {
      newList.push(this.list.find((item) => elm.id== item.id));
     this.updated(newList);
    });
  }
}
