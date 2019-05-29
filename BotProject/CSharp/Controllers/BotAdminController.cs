﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
//
// Generated with Bot Builder V4 SDK Template for Visual Studio EchoBot v4.3.0

using System;
using System.Linq;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Microsoft.Bot.Builder.TestBot.Json
{
    [Route("api/admin")]
    [ApiController]
    public class BotAdminController : ControllerBase
    {
        private readonly IBotManager BotManager;

        public BotAdminController(IBotManager botManager)
        {
            BotManager = botManager;
        }

        [HttpGet] 
        public IActionResult GetAsync()
        {
            return Ok();
        }
           

        [HttpPost]
        public IActionResult PostAsync(IFormFile file)
        {
            if (file == null)
            {
                return BadRequest();
            }

            BotManager.SetCurrent(file.OpenReadStream());
            return Ok();
        }
    }
}