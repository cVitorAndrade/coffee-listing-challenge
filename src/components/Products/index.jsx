import { Container } from "./styles";
import star from "./assets/Star.svg";
import starFill from "./assets/Star_fill.svg";

export function Product({ name, image, price, rating, votes, popular, available}) {
    return(
        <Container>
            <div className="image">
                <img src={image} alt="" />
                {
                    popular && <span>Popular</span>
                }
            </div>

            <div className="infos">
                <div className="title">
                    <h2>{name}</h2>
                    <span>{price}</span>
                </div>

                <div className="status">
                    <div className="rating">
                        {
                            rating 
                                    ? <>
                                        <img src={starFill} alt="" />
                                        <span>
                                            <span>{rating} </span> 
                                            ({votes}) votes
                                        </span>
                                      </>
                                    : <>
                                        <img src={star} alt="" />
                                        <span>No ratings</span>
                                      </>

                        }
                    </div>

                    {
                        !available && 
                            <div className="available">
                                <p>Sold out</p>
                            </div>
                    }
                    
                </div>

            </div>
        </Container>
    )
}