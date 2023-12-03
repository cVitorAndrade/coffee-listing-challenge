import styled from "styled-components";
export const Container = styled.div`
    width: min(100%, 35rem);
    border-radius: 1rem;
    transition: filter .2s ease-in-out;
    &:hover {
        cursor: pointer;
        filter: brightness(0.9);

    }

    .image {
        position: relative;
        border-radius: inherit;
        img {
            width: 100%;
            border-radius: inherit;
        }

        span {
            background-color: ${ ({ theme }) => theme.COLORS.YELLOW};
            padding: .3rem 1rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            font-weight: 500;
            position: absolute;
            left: 1rem;
            top: 1rem;
        }
    }

    .infos {
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                color: ${ ({ theme }) => theme.COLORS.WHITE};
                font-size: 2.2rem;
                font-weight: 600;
                margin: 1rem 0;
            }

            span {
                background-color: ${ ({ theme }) => theme.COLORS.GREEN};
                font-size: 1.4rem;
                padding: .6rem 1rem;
                border-radius: .6rem;
                font-weight: 700;
                color: ${ ({ theme }) => theme.COLORS.BLACK_800};
            }
        }
    }

    .status {
        display: flex;
        justify-content: space-between;

        .rating {
            display: flex;
            align-items: center;
            gap: .8rem;

            > span {
                color: ${ ({ theme }) => theme.COLORS.GRAY};
                font-weight: 700;

                span {
                    color: ${ ({ theme }) => theme.COLORS.WHITE};
                }
            }
        }

        .available {
            p {
                color: ${ ({ theme }) => theme.COLORS.SALMON};
                font-size: 1.6rem;
                font-weight: 700;
            }
        }
    }
`;