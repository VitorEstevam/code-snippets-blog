var app = new Vue({
    el: '#scene',
    data() {
        return {
            snippets: [],
        }
    },
    mounted() {
        axios
            .get('https://api.github.com/repos/VitorEstevam/codesnippets/contents/snippets')
            .then(
                (response) => {
                    // console.log(response.data)
                    response.data.forEach((snippetInfo) => {
                        console.log(snippetInfo.name)
                        axios.get(`https://raw.githubusercontent.com/VitorEstevam/codesnippets/main/snippets/${snippetInfo.name}`)
                        .then((response) => {this.snippets.push(response.data)})
                    })
                }
            )
    },
})