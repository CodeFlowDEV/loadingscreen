local loadingscreenActive = true

function InitiateLoadingScreenShutdown()
    if loadingscreenActive then 
        loadingscreenActive = false
        SendLoadingScreenMessage(json.encode({
            eventName = 'hideUI'
        }))
    end 
end

RegisterNUICallback('ShutdownLoadingScreen', function()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)

exports('RequestLoadingScreenShutdown', InitiateLoadingScreenShutdown)