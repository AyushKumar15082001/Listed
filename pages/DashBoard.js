import React, { useEffect, useState } from 'react'
import Styles from '@/styles/DashBoard.module.css'
import SideBar from '@/components/SideBar'
import LineGraph from '@/components/LineGraph'
import PieChart from '@/components/PieChart'
import NavBar from '@/components/NavBar'

function DashBoard() {
    const [show, setShow] = useState(false);
    const showSideBar = () => {
        setShow(!show);
    }
    return (
        <div className={Styles.container}>
            <SideBar show={show} />
            <div className={Styles.content}>
                <NavBar title="Dashboard" showSideBar={showSideBar} />
                <div className={Styles.cards}>
                    <div className={Styles.card}>
                        <div><img src="/revenue.svg" alt="revenue" /></div>
                        <div>Total Revenues</div>
                        <div>$2,129,430</div>
                    </div>
                    <div className={Styles.card}>
                        <div><img src="/transactions.svg" alt="Transactions" /></div>
                        <div>Total Transactions</div>
                        <div>1,520</div>
                    </div>
                    <div className={Styles.card}>
                        <div><img src="/likes.svg" alt="Likes" /></div>
                        <div>Total Likes</div>
                        <div>9,721</div>
                    </div>
                    <div className={Styles.card}>
                        <div><img src="/totalUsers.svg" alt="Total Users" /></div>
                        <div>Total Users</div>
                        <div>892</div>
                    </div>
                </div>
                <div className={Styles.graph}>
                    <LineGraph />
                </div>
                <div className={Styles.footer}>
                    <div className={Styles.pie}>
                        <PieChart />
                    </div>
                    <div className={Styles.schedule}>
                        <div className={Styles.TitleCont}>
                            <div className={Styles.scheduleTitle}>Today's schedule</div>
                            <div className={Styles.seeAll}>See All <img src="/arrrow.svg" alt="arrow" /></div>
                        </div>
                        <div className={Styles.schedule_item}>
                            <div className={Styles.bar}></div>
                            <div className={Styles.scheduleContent}>
                                <div className={Styles.scheduleContentTitle}>Meeting with supplier from Kuta Bali</div>
                                <div className={Styles.scheduleContentItem}>14.00-15.00</div>
                                <div className={Styles.scheduleContentItem}>at Sunset Road, Kuta, Bali</div>
                            </div>
                        </div>
                        <div className={Styles.schedule_item}>
                            <div className={Styles.bar}></div>
                            <div className={Styles.scheduleContent}>
                                <div className={Styles.scheduleContentTitle}>Check operation at Giga Factory 1</div>
                                <div className={Styles.scheduleContentItem}>18.00-20.00</div>
                                <div className={Styles.scheduleContentItem}>at Central Jakarta</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard