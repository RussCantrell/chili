﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Usa.chili.Domain
{
    public partial class ObstructionData
    {
        [Key]
        public string StationKey { get; set; }
        public double Azimuth { get; set; }
        public double Distance { get; set; }
        public double? Horizontal { get; set; }
        public double? Height { get; set; }
        public string Type { get; set; }
    }
}
