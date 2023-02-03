import './assets/style/style.scss';

function App() {
    const quarterHour = 40;
    const eventDuration = 2;

    return (
        <div className='schedule'>
            <div className='schedule-in'>
                <div className='schedule-timeline'>
                    <ul>
                        <li>
                            <span>09:00</span>
                        </li>
                        <li>
                            <span>09:15</span>
                        </li>
                        <li>
                            <span>09:30</span>
                        </li>
                    </ul>
                </div>
                <div className='schedule-content'>
                    <div className='schedule-column'>
                        <div className='schedule-header'>
                            <h4 className='schedule-header-in'>Entry</h4>
                        </div>
                        <div className='schedule-body'>
                            <div className='schedule-item'
                                 style={{height: (eventDuration * quarterHour) / 16 + 'rem'}}>
                                <div className='schedule-item-in'>
                                    <div className='schedule-item-title'>
                                        <h6 className='schedule-item-title-in'>Registration</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='schedule-in'>
                <div className='schedule-timeline'>
                    <ul>
                        <li>
                            <span>09:45</span>
                        </li>
                        <li>
                            <span>10:00</span>
                        </li>
                        <li>
                            <span>10:15</span>
                        </li>
                        <li>
                            <span>10:30</span>
                        </li>
                        <li>
                            <span>10:45</span>
                        </li>
                        <li>
                            <span>11:00</span>
                        </li>
                    </ul>
                </div>
                <div className='schedule-content'>
                    <div className='schedule-column'>
                        <div className='schedule-header'>
                            <h4 className='schedule-header-in'>3rd Hall</h4>
                        </div>
                        <div className='schedule-body'>
                            <div className='schedule-item'
                                 style={{height: (eventDuration * quarterHour) / 16 + 'rem'}}>
                                <div className='schedule-item-in'>
                                    <div className='schedule-item-title'>
                                        <h6 className='schedule-item-title-in'>Topic 4</h6>
                                    </div>
                                    <div className='schedule-item-info'>
                                        <ul className='schedule-item-info-in'>
                                            <li>
                                                <span className='language en'>en</span>
                                            </li>
                                            <li>
                                                <span className='level beginner'/>
                                            </li>
                                        </ul>
                                        <div className='schedule-item-speaker'>
                                            <span className='schedule-item-speaker-name'>Davit Matevosyan</span>
                                            <img className='schedule-item-speaker-image'
                                                 src="https://via.placeholder.com/22x22" alt="no photo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='schedule-column'>
                        <div className='schedule-header'>
                            <h4 className='schedule-header-in'>3rd Hall</h4>
                        </div>
                        <div className='schedule-body'>
                            <div className='schedule-item'
                                 style={{height: (eventDuration * quarterHour) / 16 + 'rem'}}>
                                <div className='schedule-item-in'>
                                    <div className='schedule-item-title'>
                                        <h6 className='schedule-item-title-in'>Topic 4</h6>
                                    </div>
                                    <div className='schedule-item-info'>
                                        <ul className='schedule-item-info-in'>
                                            <li>
                                                <span className='language en'>en</span>
                                            </li>
                                            <li>
                                                <span className='level beginner'/>
                                            </li>
                                        </ul>
                                        <div className='schedule-item-speaker'>
                                            <span className='schedule-item-speaker-name'>Davit Matevosyan</span>
                                            <img className='schedule-item-speaker-image'
                                                 src="https://via.placeholder.com/22x22" alt="no photo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='schedule-column'>
                        <div className='schedule-header'>
                            <h4 className='schedule-header-in'>3rd Hall</h4>
                        </div>
                        <div className='schedule-body'>
                            <div className='schedule-item'
                                 style={{height: (eventDuration * quarterHour) / 16 + 'rem'}}>
                                <div className='schedule-item-in'>
                                    <div className='schedule-item-title'>
                                        <h6 className='schedule-item-title-in'>Topic 4</h6>
                                    </div>
                                    <div className='schedule-item-info'>
                                        <ul className='schedule-item-info-in'>
                                            <li>
                                                <span className='language en'>en</span>
                                            </li>
                                            <li>
                                                <span className='level beginner'/>
                                            </li>
                                        </ul>
                                        <div className='schedule-item-speaker'>
                                            <span className='schedule-item-speaker-name'>Davit Matevosyan</span>
                                            <img className='schedule-item-speaker-image'
                                                 src="https://via.placeholder.com/22x22" alt="no photo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
