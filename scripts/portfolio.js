function hideModal(modalName)
{
    $(modalName).modal(
    {
        show: false
    }).on('hidden.bs.modal', function()
    {
        $(this).find('video')[0].pause();
    });
}

hideModal("#modal1");
hideModal("#modal2");
hideModal("#modal3");
hideModal("#modal4");
hideModal("#modal5");