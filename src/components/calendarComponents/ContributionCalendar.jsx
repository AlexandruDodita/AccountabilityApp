import {useState, useMemo} from 'react';

function ContributionCalendar({ year = new Date().getFullYear(), data={}}){
    const [selectedDate, setSelectedDate] = useState(null);

    const calendarData = useMemo(() => {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);

        const firstDay = new Date(startDate);
        firstDay.setDate(startDate.getDate() - startDate.getDay());

        const lastDay = new Date(endDate);
        lastDay.setDate(endDate.getDate() + (6 - endDate.getDay()));

        const weeks = [];
        const currentDate = new Date(firstDay);

        while (currentDate <= lastDay){
            const week = [];
            for (let day=0;day<7; day++){
                const date = new Date(currentDate);
                const dateStr = date.toISOString().split('T')[0];
                const isCurrentYear = date.getFullYear() === year;

                week.push({
                    date: dateStr,
                    level: isCurrentYear ? (data[dateStr] || 0) : -1,
                    isCurrentYear
                });

                currentDate.setDate(currentDate.getDate() +1);
            }
            weeks.push(week);
        }
        return weeks;
    }, [year,data]);

    const monthHeaders = useMemo(() =>{
        const months = [];
        let currentMonth = -1;
        let weekCount = 0;
        let startWeek = 0;

        calendarData.forEach((week, weekIndex) => {
            const monthOfWeek = new Date(week[0].date).getMonth();

            if (monthOfWeek !== currentMonth && week.some(day => day.isCurrentYear)){
                if (currentMonth !== -1){
                    months.push({
                        month: currentMonth,
                        startWeek,
                        colspan: weekCount
                    });
                }
                currentMonth = monthOfWeek;
                startWeek = weekIndex;
                weekCount =1;
            }else if (monthOfWeek===currentMonth){
                weekCount++;
            }
        })

        if (currentMonth!== -1){
            months.push({
                month: currentMonth,
                startWeek,
                colspan: weekCount
            });
        }
        return months;
    }, [calendarData]);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getContributionClass = (level) => {
        if (level === -1) return 'contribution-empty';

        const classes = [
            'contribution-level-0',
            'contribution-level-1',
            'contribution-level-2',
            'contribution-level-3',
            'contribution-level-4'
        ];

        return classes[Math.min(level,4)];
    };

    return (
        <div className="contribution-calendar">
            <table>
                <thead>
                    <tr>
                        <td></td>
                        {monthHeaders.map((header, index) =>(
                            <td key={index} className='month-label' colSpan={header.colspan}>
                                {monthNames[header.month]}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dayNames.map((dayName, dayIndex)=>(
                        <tr key={dayIndex}>
                            <td className='day-label'>
                                {dayIndex%2===1 ? dayName : ''}
                            </td>
                            {calendarData.map((week, weekIndex)=>{
                            const day = week[dayIndex];
                            return (
                                <td key={weekIndex} className="calendar-cell">
                                    <div
                                        className={`contribution-day ${getContributionClass(day.level)}`}
                                        data-date={day.date}
                                        data-level={day.level}
                                        onClick={()=>day.isCurrentYear && setSelectedDate(day.date)}
                                        title={`${day.date}: ${day.level} contributions`}
                                    />
                                </td>
                            );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedDate && (<div className="contribution-tooltip">{selectedDate} : {data[selectedDate] || 0} contributions</div>)}

        </div>
    )
}

export default ContributionCalendar;