var app = new Vue({
	el: '#app',
	name: 'Skills',
  data() {
    return {
			skill: '',
      skills: [
      	{ "skill": "Vue.js" },
        { "skill": "Frontend Developer" }
      ]
    }
  },
  methods: {
  addSkill() {
  this.skills.push({ skill: this.skill })
  this.skill = '';
  }
  }
});