import React, { useState } from 'react';
import './Tabs.css'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import AccordionComp from './Accordion';

export default function Tabs() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <div className="TabsContainer">
                <MDBTabs className=' bg-white rounded-top HeaderHeight'>
                    <MDBTabsItem style={{display: 'flex', alignItems: 'center'}}>
                        <MDBTabsLink className='textSize' style={{border: 'none'}} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Contents
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{display: 'flex', alignItems: 'center'}}>
                        <MDBTabsLink className='textSize' style={{border: 'none'}} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Description
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem style={{display: 'flex', alignItems: 'center'}}>
                        <MDBTabsLink className='textSize' style={{border: 'none',}} onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            Reviews
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>

                        <AccordionComp />

                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </>
    );
}