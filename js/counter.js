

                        /**********************************************************************************************
            * Days-Hours-Minutes-Seconds Counter script by Praveen Lobo 
            * (http://PraveenLobo.com/techblog/javascript-counter-count-days-hours-minutes-seconds/)
            * This notice MUST stay intact(in both JS file and SCRIPT tag) for legal use.
            * http://praveenlobo.com/blog/disclaimer/
            **********************************************************************************************/
            function DaysHMSCounter(initDate, id){
                this.counterDate = new Date(initDate);
                this.container = document.getElementById(id);
                this.update();
            }
             
            DaysHMSCounter.prototype.calculateUnit=function(secDiff, unitSeconds){
                var tmp = Math.abs((tmp = secDiff/unitSeconds)) < 1? 0 : tmp;
                return Math.abs(tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp));
            }
             
            DaysHMSCounter.prototype.calculate=function(){
                var secDiff = Math.abs(Math.round(((new Date()) - this.counterDate)/1000));
                this.days = this.calculateUnit(secDiff,86400);
                this.hours = this.calculateUnit((secDiff-(this.days*86400)),3600);
                this.mins = this.calculateUnit((secDiff-(this.days*86400)-(this.hours*3600)),60);
                this.secs = this.calculateUnit((secDiff-(this.days*86400)-(this.hours*3600)-(this.mins*60)),1);
            }
             
            DaysHMSCounter.prototype.update=function(){ 
                this.calculate();
                this.container.innerHTML =
                    "<div class='data'>" + this.days + " " + "<p class='counter_slots'>" + (this.days == 1? "" : " days")  + "</p>" + "</div>" +
                    "<div class='data'>" + this.hours + " " + "<p class='counter_slots'>" + (this.hours == 1? "" : " hours")  + "</p>" + "</div>" +
                    "<div class='data'>" + this.mins + " " + "<p class='counter_slots'>" + (this.mins == 1? "" : " mins")  + "</p>" + "</div>" +
                    "<div class='data'>" + this.secs + " " + "<p class='counter_slots'>" + (this.secs == 1? "" : " secs")  + "</p>" + "</div>" 
                var self = this;
                setTimeout(function(){self.update();}, (1000));
            }
             
            window.onload=function(){ new DaysHMSCounter('November 29, 2013 13:00:00', 'counter'); }


