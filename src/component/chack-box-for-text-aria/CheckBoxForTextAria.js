import "./CheckBoxForTextAria.css";

export function CheckBoxForTextAria(props) {

    const getClass = () => {
        if (!props.checked) {
            return "pool-check-box-container-aria"
        } else {
            return "pool-check-box-container-check-aria"
        }
    }


    return (
        <div className={getClass()}>
            <div className={"txt-container-pool-check-box-aria"}>
                Other, please explain
                <div className={"icon-container-pool-aria"}>
                    <img src={"pen-angled.svg"} alt={"pen"}/>
                </div>
            </div>
            <div className={"direct-aria"}>
                <div className={"check-box-v-container-aria"}>
                    <label className="container-aria">
                        <input checked={props.checked} type="checkbox"/>
                        <span className="checkmark-aria"/>
                    </label>
                </div>
            </div>
        </div>
    )
}
