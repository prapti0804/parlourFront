import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function offer() {
    return (
        <div>
            <div className='container'> 
                <div className='row'>
                    <div className="col-3">
                <div className="clearfix">
                    <Image src="/images/offers1.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="offer.iamge" height={120} width={120}/>

                        <p>
                            A paragraph of placeholder text. we are using it here to show the use of the clearfix class. We are adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
                        </p>

                        <p>
                            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                        </p>

                        <p>
                            And yet, here you are, still persevering in reading
                            
                         this placeholder text, hoping forss some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, There is none of that here.
                        </p>
                       
                </div>
            </div>
            </div>
            <div className='row3'>
                    <div className="col-3">
                <div className="clearfix">
                    <Image src="/images/offers1.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="offer.iamge" height={120} width={120}/>

                        <p>
                            A paragraph of placeholder text. we are using it here to show the use of the clearfix class. We are adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
                        </p>

                        <p>
                            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                        </p>

                        <p>
                            And yet, here you are, still persevering in reading
                            
                         this placeholder text, hoping forss some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, There is none of that here.
                        </p>
                       
                </div>
            </div>
            </div>
        </div>
    </div>
    )

}