import './style.scss'

const Filter = () => {
    return (
        <table className="filter">
            <tr>
                <td className="filter__header text--lavenderBlue text--600 text--regular">Dev</td>
                <td className="filter__header text--lavenderBlue text--600 text--regular">Status</td>
            </tr>
            <tr>
                <td>
                    <select name="" id="" className='filter__select select text--lavenderGray text--regular'>
                        <option value="Jenny Wilson">Jenny Wilson</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                    </select>
                </td>
                <td>
                    <select name="" id="" className='filter__select select text--lavenderGray text--regular'>
                        <option value="Jenny Wilson">All Statuses</option>
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" name="" id="efficiency" class="checkbox" />
                    <label for="efficiency" class="text--regular text--lavenderGray">Show Efficiency</label>
                </td>
                <td>
                    <button class="text--regular text--700 button">Apply</button>
                </td>
                <td>
                    <button class="text--regular text--700 button">Reset Filters</button>
                </td>
            </tr>
        </table>
    )
}

export default Filter