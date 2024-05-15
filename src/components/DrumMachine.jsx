
import React from "react"
import Drum from "../components/DrumComponents/Drum"
import Controls from "../components/DrumComponents/Controls"
import sounds from "../assets/data/Data"

class DrumMachine extends React.Component {
    constructor() {
        super()
        this.state = {
            volume: 0.5,
            bank: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.handleBank = this.handleBank.bind(this)
    }
    // componentDidMount() {
    //     document.addEventListener("keypress", (e) => {
    //         for (let key in sounds) {
    //             if (sounds[key].key.toLowerCase() === e.key.toLowerCase()) {
    //                 let audio = new Audio(sounds[key].src)
    //                 audio.volume = this.state.volume
    //                 audio.play()
    //             }
    //         }
    //     }
    //     )
    // }
    handleBank() {
        this.setState({
            bank: !this.state.bank
        })
    }
    handleClick(e) {
        let { dataset } = e.target
        let key = dataset.sounds
        let audio = new Audio(sounds[key].src)
        audio.volume = this.state.volume
        audio.play()

    }
    handleChange(e) {
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value / 100
        })
    }
    openModal() {
        this.setState({
            ...this.state,
            modalStatus: !this.state.modalStatus
        })
    }
    closeModal() {
        this.setState({
            ...this.state,
            modalStatus: !this.state.modalStatus
        })
    }
    render() {

        return (
            <div className="outside">

                <h3 className="drumMachineHeader">Drum Machine</h3>

                {!this.state.modalStatus && <button className="showBtn" onClick={() => this.openModal()}><span className="icon">🎧</span>
                    <br />
                    Click</button>}
                {
                    this.state.modalStatus &&
                    <dialog open
                        className="dialog">

                        <div className="wrapper">
                            <div id="drum-machine">
                            </div>
                            <Drum
                                handleClick={this.handleClick}
                                bank={this.state.bank} />
                            <div>
                                <Controls
                                    handleChange={this.handleChange}
                                    bank={this.state.bank}
                                    handleBank={this.handleBank}
                                    volume={this.state.volume}
                                    closeModal={this.closeModal}
                                />
                            </div>
                        </div>
                    </dialog>
                }
            </div>
        )
    }
}

export default DrumMachine


