export const store = {
  state: {
    visible: false
  },
  actions: (globalStore: any) => {
    const [_, { openPopup }] = globalStore as any
    openPopup({
      children: <div>111</div>
    })
  }
}

export default function CreateComponents () {
  return (
    <div>1111</div>
  )
}