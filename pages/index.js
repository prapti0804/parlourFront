import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <section class="page-section">
			<div class="container">
				<div class="row">


					<div class="col-md-12 col-lg-6">
						<a href="images/promo-1@2x.jpg" class="lightbox-single mfp-image">
							<img class="img-border" src="images/promo-1.jpg" data-at2x="images/promo-1@2x.jpg" alt  />
						</a>
					</div>
					<div class="col-md-12 col-lg-6 mt-lg-50">
						<h3 class="banner-title font-alt">Welcome To Relish</h3>
						<div class="section-text mt-10">
							<span class="circle-letter-1 font-alt">S</span>
							<p>uperior service, personalized attention
We're proud to offer the highest quality, most unique merchandise on the market today. 
From our family to yours, we put lots of love and careful attention in each item. We hope you 
enjoy our work as much as we enjoy bringing it to you.
							</p>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<ul class="list-style-2">
									<li>Special Offer on Gift Cards</li>
									<li>Go to Great Lengths for Beauty</li>
									<li>Non-Surgical Treatments, No Recovery Time</li>
								</ul>
							</div>
							<div class="col-sm-6">
								<ul class="list-style-2">
									<li>Get a Professionally Contoured Makeup </li>
									<li>Customizable Facial Treatments</li>
									<li>Beauty Salon & Spa</li>
								</ul>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>

        

        <section class="small-section alt-color">
			<div class="container">

				<div class="row">
					<div class="col-md-3 mb-md-30">
						<div class="features-center">
							<div class="features-icon">
                            <i class="fab fa-canadian-maple-leaf mt-4"></i>                            							</div>
							<h3 class="features-title font-alt">Body Care</h3>
							<p>Recover from your join pain by applying body treatment</p>
						</div>
					</div>
					<div class="col-md-3 mb-md-30">
						<div class="features-center">
							<div class="features-icon">
                            <i class="fas fa-feather-alt mt-4"></i>
                            							</div>
							<h3 class="features-title font-alt">Hands & Feet</h3>
							<p>Menicure & Pedicure is useful to enhance your beauty</p>
						</div>
					</div>
					<div class="col-md-3 mb-md-30">
						<div class="features-center">
							<div class="features-icon">
                            <i class="fas fa-spa mt-4"></i>
                            							</div>
							<h3 class="features-title font-alt">Spa Massage</h3>
							<p>It's a Hygienic Spa in Pune with all Massage facilities</p>
						</div>
					</div>
					<div class="col-md-3">
						<div class="features-center">
							<div class="features-icon">
                            <i class="fas fa-grin mt-4"></i>
                            							</div>
							<h3 class="features-title font-alt">Face Care</h3>
							<p>Different types of facial are available which makes your skin healthy</p>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section class="page-section">
        <div class="">
			<div class="container align-center">
				<h3 class="section-title bottom-line font-alt">Services For You<span>The Greatest Pleasure</span></h3>
				<div class="col-md-10 col-md-offset-1 mb-30">
					<p>Your style is a reflection of your personality and we know how to bring out the real you. Let our professionals style your body to complement your facial features, then add a personal touch.</p>
				</div>
			</div>

			<div class="slider-4 dots-alt ">
				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-2@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-2.jpg" data-at2x="images/portfolio/img-2@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Relaxation Therapy</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Providing Relaxation and curing all pain</p>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-2@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-1.jpg" data-at2x="images/portfolio/img-2@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Auyervedic</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Providing Auyervedic Therapy for Eyes, Ear.</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-4@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-4.jpg" data-at2x="images/portfolio/img-4@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Body Tanning</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Remove tanning instantly</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-7@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-7.jpg" data-at2x="images/portfolio/img-7@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Panchkarma</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Easy way to make your soul good</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/card4.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/card4-1.jpg" data-at2x="images/portfolio/img-8@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Bridal Makeup</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Bridal package is help add up in your beauty</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-9@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-9.jpg" data-at2x="images/portfolio/img-9@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>wax</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Full body waxing is also available which helps to nourish your body</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="/images/img-10@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-10.jpg" data-at2x="images/portfolio/img-10@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Menicure</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Menicure and nail art is essential to enhance beauty of hands</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="images/portfolio/img-5@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/card5-1.jpg" data-at2x="images/portfolio/img-5@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>Hair Treatment</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>Hair cut makes your hair beautiful</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div class="portfolio-item ih-item circle effect13 from_left_and_right font-alt">
					<a href="images/portfolio/img-6@2x.jpg" class="lightbox mfp-image">
						<div class="portfolio-media">
							<div class="portfolio-img">
								<img src="/images/img-5.jpg" data-at2x="images/portfolio/img-6@2x.jpg" alt />
							</div>
							<div class="info">
								<h3>cure diseases</h3>
								<div>
									<div class="img-line">
										<img src="/images/img-line-7.png" data-at2x="images/lines/img-line-7@2x.png" alt />
									</div>
								</div>
								<div>
									<p>with Auyervedic cure body diseases</p>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
            </div>
		</section>
        <div class="sep-lane alt-3"><span></span></div>

            {/* <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <Image src="/images/service1.jpg" className="card-img-top border border-warning" alt="service1" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Hair Treatment</h5>
                            <p className="card-text text-dark">
                            Hair treatments generally refer to any means of managing common hair related problems such as hair fall, dryness, dandruff, frizzy hair, thinning hair, and so on. The treatments vary in terms of the problem you are suffering from because different ingredients and elements are required to tackle them.
                            </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service2.jpg" className="card-img-top border border-warning" alt="service2" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Facial</h5>
                            <p className="card-text text-dark">
                            A basic facial is a skin treatment used to clean pores, remove dead skin cells, and treat common skin concerns like acne, dark circles, and wrinkles and other signs of aging. Modern facial treatments are a surefire way to get smooth, supple skin and improve your general appearance.
                            </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service3.jpg" className="card-img-top border border-warning" alt="service3" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Pedicure</h5>
                            <p className="card-text text-dark">
                            A pedicure is a treatment that is used to cleanse and groom feet and toenails. In this treatment, the dead skin cells on the bottom of the feet are scraped away. This technique also massages the foot muscles, which relaxes them. The nails are then shaped to the desired length and shape.
                                </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service5.jpg" className="card-img-top border border-warning" alt="service4" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">bridal makeup</h5>
                            <p className="card-text text-dark">
                            Bridal packages will mostly include hair, makeup and draping, which means they will help you do your bridal makeup, your bridal hairstyle and help you drape your saree or wedding trousseau. Professionals also help put on your wedding jewellery at the makeup venue, if you are going for costume jewellery.
                                </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
 */}
        </div>
    );
}
