import './Contact.css';

function Contact(){
    return (
    <>
        <div className="ribbon"/>
        <div className="Backgroundwelcome">
            <div class="PDetailtopic">Contact Details</div>
            <div class="ContactBox"> 
            <form action="">
                    <div class="inputArea">Company Name : </div>
                    <div class="password">Founder:</div>
                    <div class="password">Address:</div>
                    <div class="password">Email Address:</div>
                    <div class="password">Contact Number:</div>
                    <div class="password">Facebook:</div>
                    <div class="password">LinkedIn:</div>
                    
            </form> 
            <div class="ContactBoxDetail">
            <form action="">
                    <div class="inputArea">Perera Dairy Farm Store Room </div>
                    <div class="password">A.B.C. Perera</div>
                    <div class="password">232/B, Araliya Road, Colombo 7</div>
                    <div class="password">PereraDairyFarm325@gmail.com</div>
                    <div class="password">011-222 222 1     OR    011-222 222 2</div>
                    <div class="password">Perera Dairy Farm Colombo</div>
                    <div class="password">@PereraDairyFarm325</div>
            </form> 
            </div>
            </div>
            <div>
            <a className='GoToOrders' href="UserProductDetails">Go to Orders</a>

            </div>

            </div>
            
    </>
    );
}

export default Contact;