$(document).ready(function()
{
    $('.Send_data').click(function(e)
    {
        if($('input[type=radio][name=item]:checked').length == 0)
        {
            return false;
        }
        else
        {
            var item = $('input[type=radio][name=item]:checked').val();
            window.setTimeout(function(){
                $('#loading').html('You Selected :' + item);
            },600);
            $('#loading').html('<br><span class="spinner-border fast" style="width:2rem;height:2rem;color:green;" role="status"></span>');
        }
    });
});