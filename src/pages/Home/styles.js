import bgCafe from "./assets/bg-cafe.jpg"
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};
    position: relative;
    padding-bottom: 8rem;

    > div {
        width: 100%;
        background-image: url(${bgCafe});
        background-size: cover;
        height: 50rem;
    }

    > main {
        width: min(90%, 120rem);
        margin: auto;
        background-color: ${ ({ theme }) => theme.COLORS.BLACK_800};
        border-radius: 1rem;
        margin-top: -25rem;
        overflow: hidden;
        padding-bottom: 8rem;

        header {
            width: min(100%, 50rem);
            text-align: center;
            margin: auto;
            position: relative;

            .icon {
                position: relative;
                background-image: url("/vector.svg");
                height: 16rem;
                background-repeat: no-repeat;
                left: 50%;
                top: 10rem;
                width: 26rem;

            }

            h1 {
                font-size: 3.2rem;
                color: ${ ({ theme }) => theme.COLORS.WHITE};
            }
            
            p {
                font-size: 1.6rem;
                color: ${ ({ theme }) => theme.COLORS.GRAY};
                margin: 2rem 0;
            }

            .buttons {
                display: flex;
                width: 100%;
                justify-content: center;
                gap: 1rem;

                button {
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: ${ ({ theme }) => theme.COLORS.WHITE};
                    border: none;
                    padding: 1.2rem;
                    border-radius: 1rem;
                    cursor: pointer;
                    transition: all .4s ease-in-out;
                    background: none;
                }
                
                button.active {
                    background-color: ${ ({ theme }) => theme.COLORS.GRAY};
                }

                button:hover {
                    filter: brightness(0.9);
                }
            }
        }

        .products {
            margin-top: 3.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 1.5rem;
            row-gap: 8rem;
        }
    }
`;