<template>
  <!--faQ section-->
    <div class="container">
        <div class="row mx-0 px-0 my-4">
            <h4 class="fqt">Frequently asked questions</h4>
        </div>
    </div>
  <div class="container px-4">
    <div v-for="(item, index) in faqs" :key="index" class="row">
      <div class="col-11">
        <div class="qus mb-2" :class="{ 'active': item.showAnswer }" @click="toggleAnswer(index)">
          {{ item.question }}
        </div>
        <div class="ans pb-3" v-show="item.showAnswer">
          <small>{{ item.answer }}</small>
        </div>
      </div>
      <div class="col-1">
        <i v-if="!item.showAnswer" class="fas fa-circle-plus" @click="toggleAnswer(index)"></i>
        <i v-if="item.showAnswer" class="bi bi-dash-circle-fill" style="color: #daa520;" @click="toggleAnswer(index)"></i>
      </div>
      <div class="mx-0 mb-2" style="padding-left: 1%;">
    <hr style="width: 95%;">
</div>
    </div>
  </div>
  <!-- Sitll question-->
  <div class="container py-4">
  <div class="row mbgl px-5 text-center">
    <div class="col">
      <i class="fas pt-2 fa-question-circle question-icon"></i>
      <div class="tcxt">
        <p style="font-weight: bold; color: black;">Still have questions?</p>
        <p><small>
          <router-link style="text-decoration: none; color: #daa520;" to="/Contact">Contact</router-link> us friendly team....
        </small></p>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Is Zapkad free?",
          answer: "Zapkad is a free to download app and all our core features are free to use. You get a digital business card & profile, unlimited OCR business card scanning, unlimited cloud storage for your contacts, notes and business card sharing with colleagues as well as daily customised newsfeeds from top publications.",
          showAnswer: false
        },
        {
          question: "Why should I fill up information on my job experience, interests and social media links?",
          answer: "Filling up information on your job experience, interests, and social media links helps create a comprehensive profile, making it easier for potential connections to learn more about you and your professional background.",
          showAnswer: false
        },
        {
          question: "Can my company sign up Zapkad for all the employees?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "Can my company sign up Zapkad for all the employees?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "How do I invite my friends to connect on Zapkad?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "How do I invite my friends to connect on Zapkad?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "Where can I find my referral code?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "Where can I find my referral code?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        {
          question: "How do I customise my newsfeeds?",
          answer: "Yes, your company can sign up for Zapkad and create accounts for all employees. This allows for seamless communication and networking within the company.",
          showAnswer: false
        },
        // Add more questions and answers here
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    }
  }
};
</script>

<style>
body {
  background-color: #fff;
}
.qus{
    font-weight: bold;
}
.active {
  color: #DAA520;
}
.fqt{
    font-weight: bold;
}
.mbgl {
    background-color: #dfdede88;
    border-radius: 10px;
    padding: 20px;
  }

  .question-icon {
    font-size: 48px;
    margin-bottom: 10px;
  }
</style>