export type OptionsTypeTemplate = {
  width: number,
  height: number,
  format: string,
  displayValue: boolean,
  fontOptions: string,
  font: string,
  textAlign: string,
  textPosition: string,
  textMargin: number,
  fontSize: number,
  background: string,
  lineColor: string,
  margin: number,
  marginTop: undefined | number,
  marginBottom: undefined | number,
  marginLeft: undefined | number,
  marginRight: undefined | number,
  id: undefined | number,
  className: undefined | string
}

const optionsBarcode: OptionsTypeTemplate = {
  width: 2,
  height: 30,
  format: "CODE128",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#fff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  id: undefined,
  className: undefined
}

export { optionsBarcode } 