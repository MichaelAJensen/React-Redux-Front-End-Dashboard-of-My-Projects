import MagicEightBall from "../components/MagicEightBall"
import DrumMachine from "../components/DrumMachine"
import Profile from "../components/Profile"
import QuoteGenerator from "../components/QuoteGenerator"
import Todo from "../components/Todo"
import Pomodoro from "../components/Pomodoro"
import Navbar from "../components/Navbar"


const Dashboard = (props) => {
    return (
        <>
            <Navbar />
            {/* <marquee className="nav-marquee"><Navbar /></marquee> */}
            <div className="grid-container">        < >
                <DrumMachine />
                <MagicEightBall />
                <Profile />
                <QuoteGenerator />
                <Todo />
                <Pomodoro />
            </>
            </div>
            <Navbar />
        </>
    )

}
export default Dashboard
