type ButtonProps = {
  cancel?: any
}

type DescriptionTemplate = {
  id: string,
  name: string,
  content: string,
  hints?: string
}

type PreviewProps = {
  template: DescriptionTemplate
}

type Selectable = {
  id: string,
  name: string
}

type SelectorProps = {
  current: Selectable,
  list: Array<Selectable>,
  onChange: Function
}