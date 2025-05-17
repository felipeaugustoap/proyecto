import style from './Burguer.module.css'


const Burguer = () => {
    
    $(document).ready(function(){
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });



    return (
        <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}