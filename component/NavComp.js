import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cookieCutter from 'cookie-cutter';
import {useRouter} from 'next/router';
function NavComp() {
	const router = useRouter();
	const [login,setLogin] = useState(false);
	const [name,setName] = useState("");
	useEffect(()=>{
		if(cookieCutter.get('jwt') !== "" && cookieCutter.get('jwt') !== undefined && cookieCutter.get('jwt') !== null){
            setLogin(true);
        }else{
			setLogin(false);
		}
		setName(cookieCutter.get('name'))
		console.log(login);
	},[login]);

	const handleLogout = (e) => {
		e.preventDefault();
		cookieCutter.set("jwt", "", {
		  expires: new Date(new Date().toLocaleDateString()),
		  path: "/",
		});
		cookieCutter.set("name", "", {
		  expires: new Date(new Date().toLocaleDateString()),
		  path: "/",
		});
		cookieCutter.set("role", "", {
		  expires: new Date(new Date().toLocaleDateString()),
		  path: "/",
		});
		setLogin(false);
		router.push("/");
	  };
    return (
<div class="page" id="top">
                <header class='sticky-header js-stick top-fixed'>
			<div class="container">
				<nav class="main-nav">
					<div class="full-wrapper align-center">


						<div class="nav-logo-wrap-sticky">
							<a href="index.html" class="logo">
								<img src="/images/logo.png" data-at2x="images/logo@2x.png" alt />
							</a>
						</div>

						<div class="mobile-nav">
							<i class="fa fa-bars"></i>
						</div>

						<div class="inner-nav desktop-nav">
							<ul class="clearlist">
								<li>
                                <Link href="/">
<a class="nav-submenu active">Home</a></Link>
								</li>
								<li class="sep">
									<a>/</a>
								</li>
								<li>
                                <Link href="/appointment">
<a class="nav-submenu">Appointment</a></Link>

								</li>
								<li class="sep">
									<a>/</a>
								</li>
								<li>
                                <Link href="/about">
<a class="nav-submenu">About Us</a></Link>
								</li>

								<li class="nav-logo-wrap">
									<a href="index.html" class="logo">
										<img src="images/logo.png" data-at2x="images/logo@2x.png" alt />
									</a>
								</li>


								<li>
                                <Link href="/offer"><a class="nav-submenu">Offers</a></Link>

								</li>
								<li class="sep">
									<a>/</a>
								</li>
								
								
								{ !login &&
								<> 
								<li>
                                <Link href="/login">
<a class="nav-submenu">Login</a></Link>
								</li>
								<li class="sep">
									<a>/</a>
								</li>
								<li>
                                <Link href="/registration">
<a>Registration</a></Link>
								</li> </> 
								}{ login &&
								<> {name} 
								<li class="sep">
									<a>/</a>
								</li>
								<a onClick={handleLogout}> logout </a>
								</>

								}

							</ul>
							<div class="menu-rect">
								<img src="/images/rectangle-1.png" data-at2x="images/lines/rectangle-1@2x.png" alt />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
        <div class="tp-banner-container">
			<div class="tp-banner-slider">
				<ul>
					<li data-masterspeed="700">
						<img src="/images/slider-1.jpg" alt />
					
	   				</li>
			
	   		
				</ul>
			</div>
		</div>


        </div>
    )
}

export default NavComp; 