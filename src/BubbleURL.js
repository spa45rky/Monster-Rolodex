import React, { useState } from 'react'
import _ from 'lodash'
import Anime, {anime} from 'react-anime'

const BubbleURL = (props) => {
    const { items, handleChange, progressCounter } = props

    const displayItems = items || [
        {
            name: 'empty_name',
            id: 0,
            value: 'empty_string',
            displayText: 'default_text',
        },
        {
            name: 'empty_name1',
            id: 1,
            value: 'empty_string',
            displayText: 'default_text1',
        },
        {
            name: 'empty_name2',
            id: 2,
            value: 'empty_string',
            displayText: 'default_text2',
        },
        {
            name: 'empty_name3',
            id: 3,
            value: 'empty_string',
            displayText: 'default_text3',
        },
        {
            name: 'empty_name4',
            id: 4,
            value: 'empty_string5',
            displayText: 'default_text4',
        },
    ]

    const countToFinish = progressCounter || 10

    const [updatedArray, setUpdatedArray] = useState(displayItems)
    const [selectedArray, setSelectedArray] = useState([])

    const defaultChange = (index) => {
        selectedArray.push(updatedArray[index].id)
        setSelectedArray(selectedArray)
        const tempArr = _.remove(updatedArray, function (e) {
            return updatedArray[index].id !== e.id
        })
        setUpdatedArray(tempArr)
        console.log(selectedArray)
    }

    return (
        <div className="container">
            <Anime
                easing='easeOutElastic'
                duration={1000}
                loop={true}
                delay={1 * 240}
                translateX='13rem'
                scale={[.75,.9]}>



            {updatedArray.map((item, index) => (
                <button
                    key={index}
                    onClick={() => defaultChange(index)}
                    className="bubble w-100 m-5 h-100 p-3"
                    name={item.name}
                    id={item.id}
                    value={item.value}
                >
                    <span className="url-text">{item.displayText}</span>
                </button>
            ))}
            </Anime>
        </div>
    )
}

export default BubbleURL
