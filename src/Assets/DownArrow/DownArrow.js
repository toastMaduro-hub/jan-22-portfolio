import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import "./DownArrow.css";


class DownArrow extends React.Component {

    render() {
        return (
            <div className='down-arrow'>
                <i onClick={() => {
                    window.scrollTo(this.props.locationX, this.props.locationY)
                }}>
                    {this.props.location === 'bottom' ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </i>
            </div>
        );
    }
}

export default DownArrow



// Save for later
 // skillRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })