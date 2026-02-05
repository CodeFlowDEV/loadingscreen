local firstSpawn = false
local loadscreenActive = true

function InitiateLoadScreenShutdown()
    if loadscreenActive then 
        loadscreenActive = false
        SendLoadingScreenMessage(json.encode({
            eventName = 'hideUI'
        }))
    end 
end

AddEventHandler('playerSpawned', function()
    if not firstSpawn then 
        firstSpawn = true
        
        InitiateLoadScreenShutdown()
    end
end)

RegisterNUICallback('ShutdownLoadingScreen', function()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)

exports('RequestLoadingScreenShutdown', InitiateLoadScreenShutdown)