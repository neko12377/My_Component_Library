import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
    faChevronLeft,
    faChevronRight,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import "./style.scss";
import {connect} from "react-redux";
import {CarouselItems} from "./CarouselItems";
import styled from "styled-components";

interface carouselDemonstrateBlockPropsInterface {
    xPosition: number;
}

const CarouselDemonstrateBlock = styled.div<carouselDemonstrateBlockPropsInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  transform: translateX(${props => props.xPosition}px);
  transition: transform 1.5s;
`
interface CarouselPropsInterface {
    infoArray: {
        currency: string;
        timeInterval: string;
        payout: string;
        payoutMoney: string;
        market: string;
        marketMoney: string;
        isOpen: boolean;
    }[];
}

export const Carousel = ({infoArray}: CarouselPropsInterface) => {
    const [xPosition, setXPosition] = useState<number>(0);
    const [canGoPrevious, setCanGoPrevious] = useState<number>(0);
    const [canGoNext, setCanGoNext] = useState<number>(infoArray ? (infoArray.length / 5 -1) : 0)
console.debug(canGoNext)
    const swapInfoBlocksToPrior = () => {
        if (canGoPrevious === 0) return
        setXPosition(xPosition + 1115.3);
        setCanGoNext(cur => cur + 1);
        setCanGoPrevious(cur => cur -1);
    }

    const swapInfoBlocksToNext = () => {
        if (canGoNext === 0) return
        setXPosition(xPosition - 1115.3);
        setCanGoPrevious(cur => cur + 1);
        setCanGoNext(cur => cur - 1);

    }

    useEffect(() => {
        setCanGoNext(infoArray.length / 5 - 1);
    }, [infoArray])

    return (
        <section className="carousel">
            <div className="carousel-arrow" onClick={() => swapInfoBlocksToPrior()}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <CarouselDemonstrateBlock xPosition={xPosition}>
                {
                    CarouselItems({infoArray})
                }
            </CarouselDemonstrateBlock>
            <div className="carousel-arrow" onClick={() => swapInfoBlocksToNext()}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>

        </section>
    )
}

// const mapStateToProps = (state: any) => {
//     return {
//
//     }
// }
//
// export connect(mapStateToProps)(Carousel);