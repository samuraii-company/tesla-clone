import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            BackgroundImage="model-s.jpg"
            leftButtonText="Custom Order"
            RightButtonText="Existing Inventory"

        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            BackgroundImage="model-y.jpg"
            leftButtonText="Custom Order"
            RightButtonText="Existing Inventory"

        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            BackgroundImage="model-x.jpg"
            leftButtonText="Custom Order"
            RightButtonText="Existing Inventory"

        />
        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            BackgroundImage="model-3.jpg"
            leftButtonText="Custom Order"
            RightButtonText="Existing Inventory"

        />
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            BackgroundImage="solar-panel.jpg"
            leftButtonText="Order now"
            RightButtonText="Learn more"

        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roofs"
            BackgroundImage="solar-roof.jpg"
            leftButtonText="Order now"
            RightButtonText="Learn more"

        />
        <Section
            title="Accessories"
            description=""
            BackgroundImage="accessories.jpg"
            leftButtonText="Shop now"

        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`