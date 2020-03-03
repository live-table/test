import * as React from "react"
import LiveTable from "@live-table/react"
import { ColumnsOption } from "../../core/dist"

type Bar = [number]

interface Foo {
	id: number;
}

const columnsOfArray: ColumnsOption<Bar> = [
	{
		data: 0,
		label: "id"
	}
]

const columnsOfObject: ColumnsOption<Foo> = [
	{
		data: "id",
		label: "Id"
	}
]

const dataOfArrays: Bar[] = [

]

const dataOfObjects: Foo[] = [

]

export default class App extends React.PureComponent {
	render(): React.ReactNode {
		return <LiveTable data={dataOfObjects}/>
	}
}
