import { useState } from 'react'

type DropendType = {
    title: string;
    category?: any[];
}

export const Dropend = ({ title, category }: DropendType) => {
    const [dropendCategoriesVisible, setDropendCategoriesVisible] = useState(false);



    return (<div className='dropdown-item'>

        <div className="btn-group dropend">
            <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropend" aria-expanded="false"

            >
                {title}
            </button>
            {(category) &&
                <ul className="dropdown-menu">
                    {category.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            }
        </div>

    </div>
    )
}
