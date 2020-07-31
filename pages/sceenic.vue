<template>
  <div>
    <v-btn @click.prevent="connect">Start</v-btn>
    <v-btn @click.prevent="disconnect">Disconnect</v-btn>
    <v-btn @click.prevent="videoOn">Video ON</v-btn>
    <v-btn @click.prevent="videoOff">Video OFF</v-btn>
    <v-btn @click.prevent="voiceOn">Voice ON</v-btn>
    <v-btn @click.prevent="voiceOff">Voice Off</v-btn>

    <div id="example">
      <!-- Container for video streams -->
    </div>
  </div>
</template>

<script>
import WTSDK from "@sscale/wtsdk";

export default {
  methods: {
    connect() {
      let sessionID = prompt("sessionID");

      let displayed_name = prompt("Displayed Name");

      let token;

      this.callReq(sessionID, displayed_name);
    },
    async callReq(sessionID, displayed_name) {
      let apiUrl = "https://auth.sceenic.co";
      const config = {
        headers: {
          "x-auth-token": this.$auth.getToken("local"),
        },
      };

      const res = await this.$axios.$get("/v1/sceenic", config);
      console.log(res);

      await getReq(`${apiUrl}/token?token=${res.token}`, { token: res.token })
        .then((data) => {
          WTSDK.Session.connect(
            {
              wsUrl: res.msc_url,
              sessionToken: res.token,
              sessionId: sessionID,
            },
            { displayed_name }
          );
        })
        .catch((resp) => {
          console.error(resp);
        });
    },

    disconnect() {
      WTSDK.Session.disconnect();
      document.getElementById("example").innerHTML = "";
    },
    videoOn() {
      WTSDK.Participant.enableVideo();
    },
    videoOff() {
      WTSDK.Participant.disableVideo();
    },
    voiceOn() {
      WTSDK.Participant.enableAudio();
    },
    voiceOff() {
      WTSDK.Participant.disableAudio();
    },
  },
};

/**
 * Watch Together Session
 *
 * WT.Session.onConnected - Method for setting up session when it ready
 * @param {onConnectedCallback} callback - Callback fired when session is ready
 * @callback onConnectedCallback
 * @param {Array} Participants - callback function contain an array of participants in the session
 *
 * WT.SessionListeners.onStreamCreated - Metod will allow you get information about new participants
 * @param {onStreamCreated} callback - Callback fired everytime when participant stream is reade
 * @callback onStreamCreated
 * @param {Object} ParticipantInfo - callback function contain object with participant information
 *
 * WT.ParticipantListeners.onParticipantLeft - Method will allow you get information about participant which left the session
 * @param {onParticipantLeftCallback} callback - Callback fired everytime when participant leave from the session
 * @callback onParticipantLeftCallback
 * @param {String} ParticipantName
 *
 * WT.Session.disconnect - Method will allow you disconnecting from the Session
 *
 * WT.Session.connect - Method will allow you connecting to the Session
 * @param {Object} SessionSettings - Information for creation the session
 * @param SessionSettings.sessionToken - session token
 * @param SessionSettings.wsUrl - WebSocket Url
 * @param SessionSettings.sessionId - The identifier of the session
 * @param {Object} UserInformation - Information about user
 * @param UserInformation.displayed_name - User ID
 *
 * WT.ErrorListeners.onSessionError - Method will allow you handling session errors
 * @param {onSesionErrorCallback} callback - Callbeck fired everytime when arises error with session
 * @callback onSesionErrorCallback
 * @param {Object} ErrorObject - Information about sesion error
 * @param code - error code
 * @param message - error message
 * @param requestTime - error time in unix timestamp
 */

WTSDK.ErrorListeners.onSessionError((event) => {
  // Error handling
  if (event.error.code === 206) {
    // Handle full room error
  }
});

WTSDK.SessionListeners.onConnected(() => {
  //On participant connect to the Session
  WTSDK.ParticipantListeners.onParticipantSpeaking(() => {
    // On participant speaking event
  });
  WTSDK.ParticipantListeners.onParticipantStopSpeaking(() => {
    // On participant stop speaking event
  });

  WTSDK.SessionListeners.onStreamCreated((stream) => {
    const { local, participant, streams, participantId } = stream;

    let video = document.createElement("video");
    video.id = participantId;
    video.className = local ? "local" : "";
    video.autoplay = true;
    video.muted = local ? true : false;
    video.srcObject = streams[0];

    let container = document.querySelector("#example");
    container.appendChild(video);
  });

  WTSDK.ParticipantListeners.onParticipantLeft((participantId) => {
    let el = document.getElementById(participantId);
    el.parentNode.removeChild(el);
  });
});

let postReq = (url = "", user = {}) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

let getReq = (url = "", token = {}) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
</script>

<style>
</style>
