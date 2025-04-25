const packagesDB = {
    browsers: {
        "Mozilla Firefox": {
            chocolatey: "firefox",
            winget: "Mozilla.Firefox",
            scoop: "firefox",
            homebrew: "firefox",
            apt: "firefox",
            flatpak: "org.mozilla.firefox",
            yay: "firefox",
            icon: "https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png",
            description: "Free and open-source web browser developed by Mozilla"
        },
        "Google Chrome": {
            chocolatey: "googlechrome",
            winget: "Google.Chrome",
            scoop: "googlechrome",
            homebrew: "google-chrome",
            apt: "google-chrome-stable",
            flatpak: "com.google.Chrome",
            yay: "google-chrome",
            icon: "https://www.google.com/chrome/static/images/chrome-logo.svg",
            description: "Fast and secure browser from Google"
        },
        "Chromium": {
            chocolatey: "chromium",
            winget: "Hibbiki.Chromium",
            scoop: "chromium",
            homebrew: "chromium",
            apt: "chromium-browser",
            flatpak: "org.chromium.Chromium",
            yay: "chromium",
            icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Chromium_Material_Icon.png",
            description: "Open-source browser project that powers Chrome"
        },
        "Ungoogled Chromium": {
            chocolatey: "ungoogled-chromium",
            winget: "eloston.ungoogled-chromium",
            scoop: "ungoogled-chromium",
            homebrew: "ungoogled-chromium",
            apt: "ungoogled-chromium",
            flatpak: "com.github.Eloston.UngoogledChromium",
            yay: "ungoogled-chromium-bin",
            icon: "https://dl.flathub.org/media/io/github/ungoogled_software.ungoogled_chromium/73bbd61cc47dab0799686834f5aa98cc/icons/128x128@2/io.github.ungoogled_software.ungoogled_chromium.png",
            description: "Chromium without Google integration"
        },
        "Vivaldi": {
            chocolatey: "vivaldi",
            winget: "Vivaldi.Vivaldi",
            scoop: "vivaldi",
            homebrew: "vivaldi",
            apt: "vivaldi-stable",
            flatpak: "com.vivaldi.Vivaldi",
            yay: "vivaldi",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Vivaldi_web_browser_logo.svg/800px-Vivaldi_web_browser_logo.svg.png",
            description: "Feature-rich browser based on Chromium"
        },
        "Opera": {
            chocolatey: "opera",
            winget: "Opera.Opera",
            scoop: "opera",
            homebrew: "opera",
            apt: "opera-stable",
            flatpak: "com.opera.Opera",
            yay: "opera",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1200px-Opera_2015_icon.svg.png",
            description: "Fast and secure browser with built-in VPN"
        },
        "Opera GX": {
            chocolatey: "opera-gx",
            winget: "Opera.OperaGX",
            scoop: "opera-gx",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "opera-gx",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Opera_GX_Icon.svg/2048px-Opera_GX_Icon.svg.png",
            description: "Gaming-oriented web browser with system optimization features"
        },
        "Brave": {
            chocolatey: "brave",
            winget: "Brave.Brave",
            scoop: "brave",
            homebrew: "brave-browser",
            apt: "brave-browser",
            flatpak: "com.brave.Browser",
            yay: "brave-bin",
            icon: "https://images.sftcdn.net/images/t_app-icon-m/p/db88d9c8-5269-4d1a-9989-b70526909144/293497331/brave-browser-icon.png",
            description: "Privacy-focused browser with built-in ad blocking"
        }
    },
    messaging: {
        "Discord": {
            chocolatey: "discord",
            winget: "Discord.Discord",
            scoop: "discord",
            homebrew: "discord",
            apt: "discord",
            flatpak: "com.discordapp.Discord",
            yay: "discord",
            icon: "https://www.cdnlogo.com/logos/d/38/discord.svg",
            description: "Popular chat and voice platform for communities"
        },
        "Beeper": {
            chocolatey: "",
            winget: "NovaTechnology.Beeper",
            scoop: "",
            homebrew: "--cask beeper",
            apt: "",
            flatpak: "im.beeper.Beeper",
            yay: "beeper-bin",
            icon: "https://avatars.githubusercontent.com/u/74791520?s=280&v=4",
            description: "Universal chat app that connects multiple messaging services"
        },
        "Slack": {
            chocolatey: "slack",
            winget: "SlackTechnologies.Slack",
            scoop: "slack",
            homebrew: "slack",
            apt: "slack-desktop",
            flatpak: "com.slack.Slack",
            yay: "slack-desktop",
            icon: "https://slack.com/favicon.ico",
            description: "Business communication and team collaboration platform"
        },
        "Zoom": {
            chocolatey: "zoom",
            winget: "Zoom.Zoom",
            scoop: "zoom",
            homebrew: "zoom",
            apt: "zoom",
            flatpak: "us.zoom.Zoom",
            yay: "zoom",
            icon: "https://zoom.us/favicon.ico",
            description: "Video conferencing and online meeting platform"
        },
        "Skype": {
            chocolatey: "skype",
            winget: "Microsoft.Skype",
            scoop: "skype",
            homebrew: "skype",
            apt: "skypeforlinux",
            flatpak: "com.skype.Client",
            yay: "skypeforlinux-stable-bin",
            icon: "https://www.skype.com/favicon.ico",
            description: "Microsoft's communication tool for chat and video calls"
        },
        "Thunderbird": {
            chocolatey: "thunderbird",
            winget: "Mozilla.Thunderbird",
            scoop: "thunderbird",
            homebrew: "thunderbird",
            apt: "thunderbird",
            flatpak: "org.mozilla.Thunderbird",
            yay: "thunderbird",
            icon: "https://www.thunderbird.net/media/img/thunderbird/favicon.ico",
            description: "Free email client from Mozilla Foundation"
        }
    },
    security: {
        "Bitwarden": {
            chocolatey: "bitwarden",
            winget: "Bitwarden.Bitwarden",
            scoop: "bitwarden",
            homebrew: "bitwarden",
            apt: "bitwarden",
            flatpak: "com.bitwarden.desktop",
            yay: "bitwarden-bin",
            icon: "https://bitwarden.com/icons/icon-512x512.png",
            description: "Open source password management solution"
        },
        "KeePassXC": {
            chocolatey: "keepassxc",
            winget: "KeePassXCTeam.KeePassXC",
            scoop: "keepassxc",
            homebrew: "keepassxc",
            apt: "keepassxc",
            flatpak: "org.keepassxc.KeePassXC",
            yay: "keepassxc",
            icon: "https://keepassxc.org/assets/img/keepassxc.svg",
            description: "Cross-platform password manager"
        },
        "Keepass": {
            chocolatey: "keepass",
            winget: "KeePassXCTeam.KeePassXC",
            scoop: "keepass",
            homebrew: "keepass",
            apt: "keepass2",
            flatpak: "org.keepass.KeePass",
            yay: "keepass",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsn0KuAjN_KYMeNsAbSoDyBVqMfAugJxGLjw&s",
            description: "Light-weight and easy-to-use password manager"
        },
        "QtPass": {
            chocolatey: "",
            winget: "IJHack.QtPass",
            scoop: "",
            homebrew: "qtpass",
            apt: "qtpass",
            flatpak: "org.qtpass.QtPass",
            yay: "qtpass",
            icon: "https://static.macupdate.com/products/63556/m/qtpass-logo.png?v=1632826940",
            description: "GUI for pass, the standard unix password manager"
        },
        "LastPass": {
            chocolatey: "lastpass",
            winget: "LogMeIn.LastPass",
            scoop: "lastpass",
            homebrew: "lastpass",
            apt: "lastpass-cli",
            flatpak: "com.lastpass.LastPass",
            yay: "lastpass",
            icon: "https://lastpass.com/images/favicon.ico",
            description: "Password manager and secure digital vault"
        },
        "OpenVPN": {
            chocolatey: "openvpn",
            winget: "OpenVPNTechnologies.OpenVPN",
            scoop: "openvpn",
            homebrew: "openvpn",
            apt: "openvpn",
            flatpak: "",
            yay: "openvpn",
            icon: "https://sc.filehippo.net/images/t_app-icon-l/p/01baa812-9b24-11e6-8c21-00163ed833e7/1452966159/openvpn-logo",
            description: "Open source VPN client"
        },
        "Tailscale": {
            chocolatey: "tailscale",
            winget: "tailscale.tailscale",
            scoop: "tailscale",
            homebrew: "tailscale",
            apt: "tailscale",
            flatpak: "com.tailscale.Tailscale",
            yay: "tailscale",
            icon: "https://tailscale.com/favicon.ico",
            description: "Zero config VPN for building secure networks"
        },
        "WireGuard": {
            chocolatey: "wireguard",
            winget: "WireGuard.WireGuard",
            scoop: "wireguard",
            homebrew: "wireguard-tools",
            apt: "wireguard",
            flatpak: "",
            yay: "wireguard-tools",
            icon: "https://play-lh.googleusercontent.com/tixGgVipnsaKeGQzykJfgSEhUc_YYMSsr3gwBuPTpXb2F1BKPVzv5OxfCrpS8OAXXh8",
            description: "Fast, modern, and secure VPN tunnel"
        }
    },
    media: {
        "VLC": {
            chocolatey: "vlc",
            winget: "VideoLAN.VLC",
            scoop: "vlc",
            homebrew: "vlc",
            apt: "vlc",
            flatpak: "org.videolan.VLC",
            yay: "vlc",
            icon: "https://images.videolan.org/images/VLC-IconSmall.png",
            description: "Free and open-source media player"
        },
        "Spotify": {
            chocolatey: "spotify",
            winget: "Spotify.Spotify",
            scoop: "spotify",
            homebrew: "spotify",
            apt: "spotify-client",
            flatpak: "com.spotify.Client",
            yay: "spotify",
            icon: "https://www.citypng.com/public/uploads/preview/square-black-green-spotify-app-icon-png-701751694969849j7wtxvnrgo.png",
            description: "Digital music streaming service"
        },
        "iTunes": {
            chocolatey: "itunes",
            winget: "Apple.iTunes",
            scoop: "itunes",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/2039px-ITunes_logo.svg.png",
            description: "Apple's media player and library manager"
        },
        "foobar2000": {
            chocolatey: "foobar2000",
            winget: "PeterPawlowski.foobar2000",
            scoop: "foobar2000",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "foobar2000",
            icon: "https://www.techspot.com/images2/downloads/topdownload/2022/10/2022-10-07-ts3_thumbs-57c.png",
            description: "Advanced freeware audio player"
        },
        "MPC-HC": {
            chocolatey: "mpc-hc",
            winget: "clsid2.mpc-hc",
            scoop: "mpc-hc",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "mpc-hc",
            icon: "https://mpc-hc.org/assets/img/logo-256x256.png",
            description: "Light-weight media player for Windows"
        },
        "Handbrake": {
            chocolatey: "handbrake",
            winget: "HandBrake.HandBrake",
            scoop: "handbrake",
            homebrew: "handbrake",
            apt: "handbrake",
            flatpak: "fr.handbrake.ghb",
            yay: "handbrake",
            icon: "https://handbrake.fr/img/logo.png",
            description: "Open-source video transcoder"
        }
    },
    utilities: {
        "PowerToys": {
            chocolatey: "powertoys",
            winget: "Microsoft.PowerToys",
            scoop: "powertoys",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPf7vMthKRCgjSxB6bxmJTypARbHiPoFgFg&s",
            description: "Windows system utilities to maximize productivity"
        },
        "EarTrumpet": {
            chocolatey: "eartrumpet",
            winget: "File-New-Project.EarTrumpet",
            scoop: "eartrumpet",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://raw.githubusercontent.com/File-New-Project/EarTrumpet/master/Resources/EarTrumpet-768-black.png",
            description: "Powerful volume control app for Windows"
        },
        "Everything": {
            chocolatey: "everything",
            winget: "voidtools.Everything",
            scoop: "everything",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://www.voidtools.com/Everything.ico",
            description: "Locate files and folders by name instantly"
        },
        "Everything Toolbar": {
            chocolatey: "everything-toolbar",
            winget: "stnkl.EverythingToolbar",
            scoop: "everything-toolbar",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://media.licdn.com/dms/image/v2/C5603AQHTFHycrNDs_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1577943495909?e=2147483647&v=beta&t=t2KDK56Hm0U8po9qu6lTbTL48rO40qBLbui46u56jaA",
            description: "Search Windows using Everything from the taskbar"
        },
        "TeraCopy": {
            chocolatey: "teracopy",
            winget: "CodeSector.TeraCopy",
            scoop: "teracopy",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "teracopy",
            icon: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBeYnpjc8Fv8jGP3a87EPS6boqPUD3u_TtBbK4kJ6UsidJw7cepoUyMna0oxYgT..UrOmms610Fzyg0l4aQEo1RQ-&format=source",
            description: "Copy files faster and more securely"
        },
        "TreeSize Free": {
            chocolatey: "treesizefree",
            winget: "JAMSoftware.TreeSize.Free",
            scoop: "treesizefree",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/TreeSize-Icon-256.png",
            description: "Disk space manager and analyzer"
        },
        "WizTree": {
            chocolatey: "wiztree",
            winget: "AntibodySoftware.WizTree",
            scoop: "wiztree",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://wiztree.co.uk/wp-content/uploads/2024/05/wiztree445x.png",
            description: "The fastest disk space analyzer"
        },
        "CPU-Z": {
            chocolatey: "cpu-z",
            winget: "CPUID.CPU-Z",
            scoop: "cpu-z",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "cpu-z",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/23/CPU-Z_icon.png",
            description: "System information and CPU monitoring"
        },
        "GPU-Z": {
            chocolatey: "gpu-z",
            winget: "TechPowerUp.GPU-Z",
            scoop: "gpu-z",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/82/GPU-Z_icon.png",
            description: "Graphics card information utility"
        },
        "Etcher": {
            chocolatey: "etcher",
            winget: "Balena.Etcher",
            scoop: "etcher",
            homebrew: "balenaetcher",
            apt: "balena-etcher",
            flatpak: "io.balena.Etcher",
            yay: "etcher-bin",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png",
            description: "Flash OS images to SD cards & USB drives"
        },
        "Rufus": {
            chocolatey: "rufus",
            winget: "Rufus.Rufus",
            scoop: "rufus",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://rufus.ie/pics/rufus-128.png",
            description: "Create bootable USB drives"
        },
        "AutoHotkey": {
            chocolatey: "autohotkey",
            winget: "AutoHotkey.AutoHotkey",
            scoop: "autohotkey",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "autohotkey",
            icon: "https://www.svgrepo.com/show/373451/autohotkey.svg",
            description: "Automation scripting language for Windows"
        },
        "Lightshot": {
            chocolatey: "lightshot",
            winget: "Skillbrains.Lightshot",
            scoop: "lightshot",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://img.utdstc.com/icon/55a/378/55a3784945dab322b6e9a1407db70abddbe3a201659541319e7ed9e783ef9867:200",
            description: "Simple and convenient screenshot tool"
        },
        "Flameshot": {
            chocolatey: "flameshot",
            winget: "Flameshot.Flameshot",
            scoop: "flameshot",
            homebrew: "flameshot",
            apt: "flameshot",
            flatpak: "org.flameshot.Flameshot",
            yay: "flameshot",
            icon: "https://flameshot.org/flameshot-icon.svg",
            description: "Powerful screenshot software"
        }
    },
    filesharing: {
        "LocalSend": {
            chocolatey: "",
            winget: "LocalSend.LocalSend",
            scoop: "localsend",
            homebrew: "--cask localsend",
            apt: "",
            flatpak: "org.localsend.localsend_app",
            yay: "localsend-bin",
            icon: "https://play-lh.googleusercontent.com/t2xwoWAJPoIHZlYiw82J31fZl40kj962j5DVHohn-Pgn7ZiuoXCl-2_NMyMERa7cCFw=w240-h480-rw",
            description: "Open source alternative to AirDrop for cross-platform file sharing"
        },
        "qBittorrent": {
            chocolatey: "qbittorrent",
            winget: "qBittorrent.qBittorrent",
            scoop: "qbittorrent",
            homebrew: "qbittorrent",
            apt: "qbittorrent",
            flatpak: "org.qbittorrent.qBittorrent",
            yay: "qbittorrent",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/66/New_qBittorrent_Logo.svg",
            description: "Free and open-source BitTorrent client"
        }
    },
    creative: {
        "OBS Studio": {
            chocolatey: "obs-studio",
            winget: "OBSProject.OBSStudio",
            scoop: "obs-studio",
            homebrew: "obs",
            apt: "obs-studio",
            flatpak: "com.obsproject.Studio",
            yay: "obs-studio",
            icon: "https://obsproject.com/assets/images/new_icon_small-r.png",
            description: "Free and open source software for video recording and live streaming"
        },
        "Audacity": {
            chocolatey: "audacity",
            winget: "Audacity.Audacity",
            scoop: "audacity",
            homebrew: "audacity",
            apt: "audacity",
            flatpak: "org.audacityteam.Audacity",
            yay: "audacity",
            icon: "https://forum.audacityteam.org/uploads/default/original/1X/81a69b20bcd548215067cfaceccc8a10bfa2d176.png",
            description: "Free, open source, cross-platform audio software"
        },
        "Unity Hub": {
            chocolatey: "unity-hub",
            winget: "Unity.UnityHub",
            scoop: "    ",
            homebrew: "unity-hub",
            apt: "unityhub",
            flatpak: "com.unity.UnityHub",
            yay: "unity-hub",
            icon: "https://i.redd.it/tu3gt6ysfxq71.png",
            description: "Management tool for Unity installations"
        },
        "Godot": {
            chocolatey: "godot",
            winget: "GodotEngine.GodotEngine",
            scoop: "godot",
            homebrew: "godot",
            apt: "godot",
            flatpak: "org.godotengine.Godot",
            yay: "godot",
            icon: "https://godotengine.org/assets/press/icon_color.png",
            description: "Feature-packed, cross-platform game engine"
        },
        "Godot Mono": {
            chocolatey: "godot-mono",
            winget: "GodotEngine.GodotEngine.Mono",
            scoop: "godot-mono",
            homebrew: "godot-mono",
            apt: "godot-mono",
            flatpak: "org.godotengine.Godot.Mono",
            yay: "godot-mono",
            icon: "https://godotengine.org/assets/press/icon_color.png",
            description: "Godot engine with C# support"
        },
        "Blender": {
            chocolatey: "blender",
            winget: "BlenderFoundation.Blender",
            scoop: "blender",
            homebrew: "blender",
            apt: "blender",
            flatpak: "org.blender.Blender",
            yay: "blender",
            icon: "https://e7.pngegg.com/pngimages/146/983/png-clipart-blender-3d-computer-graphics-logo-filehippo-3d-modeling-blenders-3d-computer-graphics-text-thumbnail.png",
            description: "Free and open source 3D creation suite"
        },
        "Paint.NET": {
            chocolatey: "paint.net",
            winget: "dotPDNLLC.paintdotnet",
            scoop: "paint.net",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://avatars.githubusercontent.com/u/11067286?s=280&v=4",
            description: "Image and photo editing software for Windows"
        },
        "GIMP": {
            chocolatey: "gimp",
            winget: "GIMP.GIMP.3",
            scoop: "gimp",
            homebrew: "gimp",
            apt: "gimp",
            flatpak: "org.gimp.GIMP",
            yay: "gimp",
            icon: "https://www.gimp.org/images/frontpage/wilber-big.png",
            description: "Free and open source image editor"
        },
        "Figma": {
            chocolatey: "figma",
            winget: "Figma.Figma",
            scoop: "figma",
            homebrew: "--cask figma",
            apt: "figma-linux",
            flatpak: "io.figma.Figma",
            yay: "figma-linux",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            description: "Collaborative interface design tool"
        },
        "Inkscape": {
            chocolatey: "inkscape",
            winget: "Inkscape.Inkscape",
            scoop: "inkscape",
            homebrew: "inkscape",
            apt: "inkscape",
            flatpak: "org.inkscape.Inkscape",
            yay: "inkscape",
            icon: "https://media.inkscape.org/static/images/inkscape-logo.svg",
            description: "Professional vector graphics editor"
        }
    },
    compression: {
        "7-Zip": {
            chocolatey: "7zip",
            winget: "7zip.7zip",
            scoop: "7zip",
            homebrew: "p7zip",
            apt: "p7zip-full",
            flatpak: "",
            yay: "p7zip",
            icon: "https://img.icons8.com/?size=512&id=9ha2laDO6EkM&format=png",
            description: "File archiver with high compression ratio"
        },
        "PeaZip": {
            chocolatey: "peazip",
            winget: "Giorgiotani.Peazip",
            scoop: "peazip",
            homebrew: "",
            apt: "peazip",
            flatpak: "io.github.peazip.PeaZip",
            yay: "peazip",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Peazip_ico.svg/1200px-Peazip_ico.svg.png",
            description: "Free file archiver utility"
        },
        "WinRAR": {
            chocolatey: "winrar",
            winget: "RARLab.WinRAR",
            scoop: "winrar",
            homebrew: "",
            apt: "rar",
            flatpak: "",
            yay: "winrar",
            icon: "https://sc.filehippo.net/images/t_app-icon-l/p/c3152528-96bf-11e6-b8e7-00163ed833e7/3833258526/winrar-64-icon.png",
            description: "Powerful archive manager and compressor"
        }
    },
    cloud: {
        "Dropbox": {
            chocolatey: "dropbox",
            winget: "Dropbox.Dropbox",
            scoop: "dropbox",
            homebrew: "--cask dropbox",
            apt: "dropbox",
            flatpak: "com.dropbox.Client",
            yay: "dropbox",
            icon: "https://store-images.s-microsoft.com/image/apps.23871.13668225141277943.68205d94-7cbe-41f0-893f-53305fceb682.4c98395a-28d0-4eee-9b6e-08ecd210e980",
            description: "Cloud storage and file synchronization service"
        },
        "Google Drive": {
            chocolatey: "google-drive-file-stream",
            winget: "Google.Drive",
            scoop: "googledrive",
            homebrew: "--cask google-drive",
            apt: "google-drive-ocamlfuse",
            flatpak: "",
            yay: "google-drive-ocamlfuse",
            icon: "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",
            description: "Cloud storage and file backup service by Google"
        },
        "Insync": {
            chocolatey: "insync",
            winget: "Insync.Insync",
            scoop: "",
            homebrew: "--cask insync",
            apt: "insync",
            flatpak: "com.insynchq.insync",
            yay: "insync",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPP0iyn7kuL9RJp15w88SYeu-FgUjE9i4pfA&s",
            description: "Google Drive and OneDrive sync client"
        },
        "Nextcloud": {
            chocolatey: "nextcloud-client",
            winget: "Nextcloud.Nextcloud",
            scoop: "nextcloud",
            homebrew: "nextcloud",
            apt: "nextcloud-desktop",
            flatpak: "com.nextcloud.desktopclient.nextcloud",
            yay: "nextcloud-client",
            icon: "https://nextcloud.com/wp-content/uploads/2022/03/favicon.png",
            description: "Self-hosted productivity platform and file sync"
        }
    },
    documents: {
        "Foxit PDF Reader": {
            chocolatey: "foxitreader",
            winget: "Foxit.FoxitReader",
            scoop: "foxit-reader",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://www.foxit.com/favicon.ico",
            description: "Fast and lightweight PDF reader"
        },
        "Sumatra PDF Reader": {
            chocolatey: "sumatrapdf",
            winget: "KrzysztofKowalczyk.SumatraPDF",
            scoop: "sumatrapdf",
            homebrew: "sumatrapdf",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://avatars.githubusercontent.com/u/9777518?s=200&v=4",
            description: "Free, open-source PDF, eBook, and comic book reader"
        },
        "Adobe Acrobat Reader": {
            chocolatey: "adobereader",
            winget: "Adobe.Acrobat.Reader.64-bit",
            scoop: "",
            homebrew: "--cask adobe-acrobat-reader",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://www.adobe.com/favicon.ico",
            description: "Industry-standard PDF reader from Adobe"
        },
        "PDFCreator": {
            chocolatey: "pdfcreator",
            winget: "pdfforge.PDFCreator",
            scoop: "pdfcreator",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3M-om5eu0fZwzGj12hxN8vvUm9xzEpvI4Vw&shttps://www.heise.de/download/media/pdfcreator-22244/pdfcreator-logo-big_1-1-30.png",
            description: "Create PDFs from any printable document"
        },
        "CutePDF": {
            chocolatey: "cutepdf",
            winget: "AcroSoftware.CutePDFWriter",
            scoop: "cutepdf",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://img.apponic.com/219/24/6e8baa1c61481dc222ca983578b6cf03.png",
            description: "Free PDF converter and writer"
        }
    },
    writing: {
        "Notion": {
            chocolatey: "notion",
            winget: "Notion.Notion",
            scoop: "notion",
            homebrew: "--cask notion",
            apt: "",
            flatpak: "",
            yay: "notion-app",
            icon: "https://www.notion.so/images/favicon.ico",
            description: "All-in-one workspace for notes, tasks, and collaboration"
        },
        "Obsidian": {
            chocolatey: "obsidian",
            winget: "Obsidian.Obsidian",
            scoop: "obsidian",
            homebrew: "--cask obsidian",
            apt: "",
            flatpak: "md.obsidian.Obsidian",
            yay: "obsidian-appimage",
            icon: "https://obsidian.md/favicon.ico",
            description: "Powerful knowledge base that works on local Markdown files"
        },
        "Logseq": {
            chocolatey: "",
            winget: "Logseq.Logseq",
            scoop: "logseq",
            homebrew: "--cask logseq",
            apt: "",
            flatpak: "com.logseq.Logseq",
            yay: "logseq-desktop-bin",
            icon: "https://user-images.githubusercontent.com/25513724/220608753-f33db466-af72-4611-b603-411440c15ed0.png?sanatize=true",
            description: "Privacy-first, open-source knowledge base and task management"
        },
        "LibreOffice": {
            chocolatey: "libreoffice-fresh",
            winget: "TheDocumentFoundation.LibreOffice",
            scoop: "libreoffice-fresh",
            homebrew: "libreoffice",
            apt: "libreoffice",
            flatpak: "org.libreoffice.LibreOffice",
            yay: "libreoffice-fresh",
            icon: "https://e1.pngegg.com/pngimages/115/350/png-clipart-macos-app-icons-libreoffice.png",
            description: "Free and open-source office suite"
        }
    },
    gaming: {
        "Steam": {
            chocolatey: "steam",
            winget: "Valve.Steam",
            scoop: "steam",
            homebrew: "steam",
            apt: "steam",
            flatpak: "com.valvesoftware.Steam",
            yay: "steam",
            icon: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg",
            description: "Popular platform for PC gaming and game distribution"
        },
        "Epic Games Launcher": {
            chocolatey: "epicgameslauncher",
            winget: "EpicGames.EpicGamesLauncher",
            scoop: "epic-games-launcher",
            homebrew: "--cask epic-games",
            apt: "",
            flatpak: "",
            yay: "epic-games-launcher",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
            description: "Digital storefront and game launcher by Epic Games"
        },
        "GOG Galaxy": {
            chocolatey: "goggalaxy",
            winget: "GOG.Galaxy",
            scoop: "gog-galaxy",
            homebrew: "--cask gog-galaxy",
            apt: "",
            flatpak: "",
            yay: "gog-galaxy",
            icon: "https://cdn2.steamgriddb.com/logo_thumb/d8ac3b01ba19729174a8f1e63c9e937c.png",
            description: "Game launcher and store for DRM-free games"
        },
        "Heroic Games Launcher": {
            chocolatey: "",
            winget: "HeroicGamesLauncher.HeroicGamesLauncher",
            scoop: "heroic-games-launcher",
            homebrew: "--cask heroic",
            apt: "",
            flatpak: "com.heroicgameslauncher.hgl",
            yay: "heroic-games-launcher-bin",
            icon: "https://heroicgameslauncher.com/_next/static/images/logo-23215e07e1919bee380591f74ace6c70.png.webp",
            description: "Open-source game launcher for Epic Games and GOG"
        }
    },
    devlang: {
        "Python 3": {
            chocolatey: "python",
            winget: "Python.Python.3",
            scoop: "python",
            homebrew: "python",
            apt: "python3",
            flatpak: "",
            yay: "python",
            icon: "https://www.python.org/static/favicon.ico",
            description: "High-level programming language for general-purpose programming"
        },
        "Python 2": {
            chocolatey: "python2",
            winget: "Python.Python.2",
            scoop: "python2",
            homebrew: "python@2",
            apt: "python2",
            flatpak: "",
            yay: "python2",
            icon: "https://www.python.org/static/favicon.ico",
            description: "Legacy version of the Python programming language"
        },
        "NodeJS": {
            chocolatey: "nodejs",
            winget: "OpenJS.Nodejs",
            scoop: "nodejs",
            homebrew: "node",
            apt: "nodejs",
            flatpak: "",
            yay: "nodejs",
            icon: "https://nodejs.org/static/images/favicons/favicon.ico",
            description: "JavaScript runtime built on Chrome's V8 JavaScript engine"
        },
        "NodeJS (LTS)": {
            chocolatey: "nodejs-lts",
            winget: "OpenJS.Nodejs.LTS",
            scoop: "nodejs-lts",
            homebrew: "node@lts",
            apt: "nodejs",
            flatpak: "",
            yay: "nodejs-lts",
            icon: "https://nodejs.org/static/images/favicons/favicon.ico",
            description: "Long-term support version of Node.js"
        },
        "Deno": {
            chocolatey: "deno",
            winget: "Deno.Deno",
            scoop: "deno",
            homebrew: "deno",
            apt: "deno",
            flatpak: "",
            yay: "deno",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Deno_Logo_2024.svg/1200px-Deno_Logo_2024.svg.png",
            description: "A modern runtime for JavaScript and TypeScript"
        },
        "Oracle JDK 17": {
            chocolatey: "oraclejdk",
            winget: "Oracle.JDK.17",
            scoop: "oraclejdk",
            homebrew: "openjdk@17",
            apt: "openjdk-17-jdk",
            flatpak: "",
            yay: "jdk",
            icon: "https://www.oracle.com/favicon.ico",
            description: "Java Development Kit by Oracle"
        },
        "Go": {
            chocolatey: "golang",
            winget: "GoLang.Go",
            scoop: "go",
            homebrew: "go",
            apt: "golang",
            flatpak: "",
            yay: "go",
            icon: "https://golang.org/favicon.ico",
            description: "Open source programming language that makes it easy to build simple, reliable, and efficient software"
        },
        "Rust MSVC": {
            chocolatey: "rust-msvc",
            winget: "RustLang.Rust.MSVC",
            scoop: "rust-msvc",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "",
            icon: "https://www.rust-lang.org/static/images/favicon.ico",
            description: "Rust programming language with MSVC toolchain"
        },
        "Rustup": {
            chocolatey: "rustup",
            winget: "RustLang.Rustup",
            scoop: "rustup",
            homebrew: "rustup-init",
            apt: "rustup",
            flatpak: "",
            yay: "rustup",
            icon: "https://www.rust-lang.org/static/images/favicon.ico",
            description: "Rust toolchain installer"
        },
        "Ruby": {
            chocolatey: "ruby",
            winget: "RubyInstallerTeam.Ruby",
            scoop: "ruby",
            homebrew: "ruby",
            apt: "ruby",
            flatpak: "",
            yay: "ruby",
            icon: "https://www.ruby-lang.org/favicon.ico",
            description: "Dynamic, open source programming language with a focus on simplicity and productivity"
        },
        "Perl": {
            chocolatey: "strawberryperl",
            winget: "StrawberryPerl.StrawberryPerl",
            scoop: "perl",
            homebrew: "perl",
            apt: "perl",
            flatpak: "",
            yay: "perl",
            icon: "https://www.perl.org/favicon.ico",
            description: "Highly capable, feature-rich programming language"
        }
    },
    devtools: {
        "PowerShell": {
            chocolatey: "powershell",
            winget: "Microsoft.PowerShell",
            scoop: "powershell",
            homebrew: "powershell",
            apt: "powershell",
            flatpak: "",
            yay: "powershell",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
            description: "Task automation and configuration management framework"
        },
        "Visual Studio Code": {
            chocolatey: "vscode",
            winget: "Microsoft.VisualStudioCode",
            scoop: "vscode",
            homebrew: "visual-studio-code",
            apt: "code",
            flatpak: "com.visualstudio.code",
            yay: "visual-studio-code-bin",
            icon: "https://code.visualstudio.com/favicon.ico",
            description: "Source-code editor developed by Microsoft"
        },
        "VSCodium": {
            chocolatey: "vscodium",
            winget: "VSCodium.VSCodium",
            scoop: "vscodium",
            homebrew: "vscodium",
            apt: "vscodium",
            flatpak: "com.vscodium.codium",
            yay: "vscodium-bin",
            icon: "https://vscodium.com/img/favicon.ico",
            description: "Open-source build of Visual Studio Code"
        },
        "Notepad++": {
            chocolatey: "notepadplusplus",
            winget: "Notepad++.Notepad++",
            scoop: "notepadplusplus",
            homebrew: "notepad-plus-plus",
            apt: "",
            flatpak: "",
            yay: "notepadplusplus",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Notepad_plus_plus.svg/2048px-Notepad_plus_plus.svg.png",
            description: "Free source code editor and Notepad replacement"
        },
        "GitHub Desktop": {
            chocolatey: "github-desktop",
            winget: "GitHub.GitHubDesktop",
            scoop: "github-desktop",
            homebrew: "github",
            apt: "",
            flatpak: "",
            yay: "github-desktop",
            icon: "https://www.dockhunt.com/_next/image?url=https%3A%2F%2Fdockhunt-images.nyc3.cdn.digitaloceanspaces.com%2F69257cb2-1b88-4d76-ae6b-5ef6469d1a23&w=384&q=75",
            description: "Desktop application for managing GitHub repositories"
        },
        "Git": {
            chocolatey: "git",
            winget: "Git.Git",
            scoop: "git",
            homebrew: "git",
            apt: "git",
            flatpak: "",
            yay: "git",
            icon: "https://git-scm.com/favicon.ico",
            description: "Distributed version control system"
        },
        "Git LFS": {
            chocolatey: "git-lfs",
            winget: "Git.GitLFS",
            scoop: "git-lfs",
            homebrew: "git-lfs",
            apt: "git-lfs",
            flatpak: "",
            yay: "git-lfs",
            icon: "https://avatars.githubusercontent.com/u/20246716?s=200&v=4",
            description: "Git extension for versioning large files"
        },
        "AWS CLI": {
            chocolatey: "awscli",
            winget: "Amazon.AWSCLI",
            scoop: "aws-cli",
            homebrew: "awscli",
            apt: "awscli",
            flatpak: "",
            yay: "aws-cli-v2-bin",
            icon: "https://www.strongdm.com/hubfs/21126185/Technology%20Images/603c5ee70b9e8acb4229b654_603c218977575b8d6b27fabe_AWS_CLI.png",
            description: "Command Line Interface for Amazon Web Services"
        },
        "Azure CLI": {
            chocolatey: "azure-cli",
            winget: "Microsoft.AzureCLI",
            scoop: "azure-cli",
            homebrew: "azure-cli",
            apt: "azure-cli",
            flatpak: "",
            yay: "azure-cli",
            icon: "https://avatars.githubusercontent.com/u/6844498?s=400&v=4",
            description: "Command Line Interface for Microsoft Azure"
        },
        "Docker Desktop": {
            chocolatey: "docker-desktop",
            winget: "Docker.DockerDesktop",
            scoop: "docker-desktop",
            homebrew: "docker",
            apt: "",
            flatpak: "",
            yay: "docker",
            icon: "https://www.docker.com/favicon.ico",
            description: "Application for building and sharing containerized applications"
        },
        "OpenSSH": {
            chocolatey: "openssh",
            winget: "Microsoft.OpenSSH",
            scoop: "openssh",
            homebrew: "openssh",
            apt: "openssh-client",
            flatpak: "",
            yay: "openssh",
            icon: "https://avatars.githubusercontent.com/u/2387206?s=280&v=4",
            description: "Connectivity tool for remote login with SSH protocol"
        },
        "WinSCP": {
            chocolatey: "winscp",
            winget: "WinSCP.WinSCP",
            scoop: "winscp",
            homebrew: "",
            apt: "",
            flatpak: "",
            yay: "winscp",
            icon: "https://winscp.net/favicon.ico",
            description: "Free SFTP, SCP, and FTP client for Windows"
        },
        "FileZilla": {
            chocolatey: "filezilla",
            winget: "FileZilla.Client",
            scoop: "filezilla",
            homebrew: "filezilla",
            apt: "filezilla",
            flatpak: "org.filezillaproject.Filezilla",
            yay: "filezilla",
            icon: "https://cissandbox.bentley.edu/sandbox/wp-content/uploads/filezilla-icon-6.png",
            description: "Free FTP solution for both client and server"
        },
        "PuTTY": {
            chocolatey: "putty",
            winget: "PuTTY.PuTTY",
            scoop: "putty",
            homebrew: "putty",
            apt: "putty",
            flatpak: "",
            yay: "putty",
            icon: "https://www.chiark.greenend.org.uk/~sgtatham/putty/putty.ico",
            description: "Free SSH and telnet client"
        },
        "Arduino IDE": {
            chocolatey: "arduino",
            winget: "XPDDTBJ80F8PC9",
            scoop: "arduino",
            homebrew: "arduino",
            apt: "arduino",
            flatpak: "cc.arduino.arduinoide",
            yay: "arduino",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png",
            description: "Open-source electronics platform"
        },
        "GNU Wget": {
            chocolatey: "wget",
            winget: "GNU.Wget",
            scoop: "wget",
            homebrew: "wget",
            apt: "wget",
            flatpak: "",
            yay: "wget",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Official_gnu.svg/250px-Official_gnu.svg.png",
            description: "Free utility for non-interactive download of files"
        },
        "VirtualBox": {
            chocolatey: "virtualbox",
            winget: "Oracle.VirtualBox",
            scoop: "virtualbox",
            homebrew: "virtualbox",
            apt: "virtualbox",
            flatpak: "",
            yay: "virtualbox",
            icon: "https://www.virtualbox.org/graphics/vbox_logo2_gradient.png",
            description: "Powerful x86 and AMD64/Intel64 virtualization product"
        },
        "Wireshark": {
            chocolatey: "wireshark",
            winget: "WiresharkFoundation.Wireshark",
            scoop: "wireshark",
            homebrew: "wireshark",
            apt: "wireshark",
            flatpak: "org.wireshark.Wireshark",
            yay: "wireshark-qt",
            icon: "https://www.innovsys.com/innovsys/wp-content/uploads/2021/11/Wireshark.png",
            description: "Network protocol analyzer"
        }
    }
};