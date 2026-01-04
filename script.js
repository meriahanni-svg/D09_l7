function banPlayer(){
  const id = document.getElementById("playerId").value || "0000000";
  const res = {
    action:"ban",
    mode:"simulation",
    player_id:id,
    status:"banned",
    message:"🚫 تم حظر الحساب (.)",
    developer:{
      instagram:"@d09_l7",
      tiktok:"@d09_l7"
    }
  };
  document.getElementById("output").textContent =
    JSON.stringify(res,null,2);
}

function spamPlayer(){
  const id = document.getElementById("spamId").value || "0000000";
  showDev({
    action:"spam",
    target:id,
    result:"✅ تم نــيــك  اللاعب (.)"
  });
}

function visitPlayer(){
  const id = document.getElementById("visitId").value || "0000000";
  showDev({
    action:"visit",
    target:id,
    result:"✅ تم زيادة 200 زيارة (.)"
  });
}

function acceptPlayer(){
  const id = document.getElementById("acceptId").value || "0000000";
  showDev({
    action:"accept",
    target:id,
    result:"✅ تم قبول اللاعب (.)"
  });
}

function showDev(obj){
  document.getElementById("devOutput").textContent =
    JSON.stringify(obj,null,2);
    }
